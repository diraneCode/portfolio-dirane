#!/usr/bin/env python3
"""
Génère les visuels de présentation des projets à partir des captures brutes.

Entrée  : public/projets/<slug>/<slug>-N.png   (captures d'écran, jamais modifiées)
Sortie  : public/projets/<slug>/cover.webp     (composition inclinée, 4 écrans)
          public/projets/<slug>/visuel-N.webp  (un écran mis en avant, cadré droit)

Direction : fond en dégradé aux couleurs du projet, lignes topographiques en
filigrane, écrans aux coins arrondis avec une ombre douce. Rien d'autre.

Usage   : python3 scripts/project-visuals.py            # tous les projets
          python3 scripts/project-visuals.py kmc ps5    # seulement ceux-là
Dépendances : Pillow, numpy.
"""
import math
import os
import random
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "projets")
W, H = 2400, 1350  # format final 16:9
SS = 2  # suréchantillonnage (anti-crénelage)
TILT = 8  # inclinaison de la couverture, en degrés
QUALITY = 82

# Dégradé (gauche → droite) propre à chaque projet + recadrage éventuel des
# captures (gauche, haut, droite, bas en px) pour retirer les barres du système.
PROJECTS = {
    "caline-house": {"colors": ("#0B4F86", "#39A9F0")},
    "cortex-agency": {"colors": ("#16308F", "#6C93FF")},
    "cortex-art-deco": {"colors": ("#1C1B1A", "#B49A78"), "crop": {"*": (0, 88, 0, 0)}},
    "crm-bt": {
        "colors": ("#150C33", "#7A3FF2"),
        "crop": {1: (12, 96, 28, 112), 2: (12, 96, 28, 0), 3: (12, 96, 28, 36)},
    },
    "crm-powerlink": {"colors": ("#141B52", "#5468E0")},
    "fjoe-construction": {"colors": ("#0F1D33", "#5C86B8")},
    "kmc": {"colors": ("#9E1B16", "#F5A23A")},
    "magic-booster": {"colors": ("#101010", "#A9E034")},
    "ps5": {"colors": ("#131C4A", "#4B86E6")},
    "tara-card": {"colors": ("#16300F", "#86B04A")},
    "website-bt": {"colors": ("#082C4E", "#2AA5F2")},
}


def hex_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i : i + 2], 16) for i in (0, 2, 4))


def background(c1, c2, seed):
    """Dégradé diagonal + courbes de niveau en filigrane."""
    w, h = W * SS, H * SS
    a, b = np.array(hex_rgb(c1), float), np.array(hex_rgb(c2), float)
    xs, ys = np.meshgrid(np.linspace(0, 1, w), np.linspace(0, 1, h))
    t = np.clip(xs * 0.92 + (1 - ys) * 0.16 - 0.04, 0, 1)
    t = t * t * (3 - 2 * t)  # transition adoucie
    t = np.clip((t - 0.18) / 0.82, 0, 1)[..., None]  # la couleur sombre tient le premier tiers
    bg = Image.fromarray((a * (1 - t) + b * t).astype("uint8"), "RGB").convert("RGBA")

    rnd = random.Random(seed)
    lines = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(lines)
    for cx, cy in ((0.02, 0.1), (1.0, 0.92)):
        p = [rnd.uniform(0, math.tau) for _ in range(3)]
        for k in range(1, 15):
            r = k * 0.058 * w
            pts = []
            for i in range(361):
                th = math.tau * i / 360
                wob = (
                    0.11 * math.sin(3 * th + p[0] + k * 0.22)
                    + 0.07 * math.sin(5 * th + p[1] - k * 0.17)
                    + 0.035 * math.sin(8 * th + p[2] + k * 0.31)
                )
                rr = r * (1 + wob)
                pts.append((cx * w + rr * math.cos(th), cy * h + rr * 0.82 * math.sin(th)))
            d.line(pts, fill=(255, 255, 255, 44), width=int(1.6 * SS), joint="curve")
    return Image.alpha_composite(bg, lines)


def load(slug, n):
    im = Image.open(os.path.join(ROOT, slug, f"{slug}-{n}.png")).convert("RGB")
    crops = PROJECTS[slug].get("crop", {})
    l, t, r, b = crops.get(n, crops.get("*", (0, 0, 0, 0)))
    return im.crop((l, t, im.width - r, im.height - b))


def card(im, width, radius=24):
    """Écran redimensionné, coins arrondis (travail en pixels suréchantillonnés)."""
    width = int(width * SS)
    height = round(im.height * width / im.width)
    im = im.resize((width, height), Image.LANCZOS).convert("RGBA")
    mask = Image.new("L", (width, height), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, width - 1, height - 1), radius * SS, fill=255)
    im.putalpha(mask)
    # Liseré clair très fin : détache les écrans sombres des fonds sombres
    edge = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    ImageDraw.Draw(edge).rounded_rectangle(
        (0, 0, width - 1, height - 1), radius * SS, outline=(255, 255, 255, 60), width=int(1.5 * SS)
    )
    return Image.alpha_composite(im, edge)


def place(layer, shadow, c, x, y):
    """Colle une carte et son ombre portée sur les calques (coordonnées finales)."""
    x, y = int(x * SS), int(y * SS)
    sh = Image.new("RGBA", c.size, (4, 8, 20, 255))
    sh.putalpha(c.getchannel("A").point(lambda v: int(v * 0.5)))
    shadow.alpha_composite(sh, (x, y + 34 * SS))
    layer.alpha_composite(c, (x, y))


def finish(bg, shadow, layer, angle=0):
    shadow = shadow.filter(ImageFilter.GaussianBlur(36 * SS))
    stage = Image.alpha_composite(shadow, layer)
    if angle:
        stage = stage.rotate(angle, resample=Image.BICUBIC)
    ox, oy = (stage.width - bg.width) // 2, (stage.height - bg.height) // 2
    out = Image.alpha_composite(bg, stage.crop((ox, oy, ox + bg.width, oy + bg.height)))
    return out.convert("RGB").resize((W, H), Image.LANCZOS)


def cover(slug, sources, bg):
    """Deux colonnes d'écrans décalées et inclinées, qui débordent du cadre."""
    pad = 500  # marge de la scène pour que la rotation ne coupe rien
    size = ((W + 2 * pad) * SS, (H + 2 * pad) * SS)
    layer, shadow = Image.new("RGBA", size), Image.new("RGBA", size)
    cw, gap = 1340, 56
    order = (sources + sources)[:4]
    cards = [card(load(slug, n), cw) for n in order]
    ch = cards[0].height / SS
    xa, xb = pad + 210, pad + 210 + cw + gap
    ya = pad + 250
    yb = ya + ch * 0.46
    place(layer, shadow, cards[0], xa, ya)  # écran principal, entièrement visible
    place(layer, shadow, cards[2], xa, ya + ch + gap)
    place(layer, shadow, cards[1], xb, yb - cards[1].height / SS - gap)
    place(layer, shadow, cards[3], xb, yb)
    return finish(bg, shadow, layer, TILT)


def single(slug, n, bg):
    """Un seul écran, centré et droit."""
    im = load(slug, n)
    cw = min(1900, int(1070 * im.width / im.height))
    c = card(im, cw, radius=26)
    layer, shadow = Image.new("RGBA", bg.size), Image.new("RGBA", bg.size)
    place(layer, shadow, c, (W - cw) / 2, (H - c.height / SS) / 2 - 8)
    return finish(bg, shadow, layer)


def build(slug):
    cfg = PROJECTS[slug]
    folder = os.path.join(ROOT, slug)
    sources = sorted(
        int(f[len(slug) + 1 : -4])
        for f in os.listdir(folder)
        if f.startswith(slug + "-") and f.endswith(".png") and f[len(slug) + 1 : -4].isdigit()
    )
    if not sources:
        print(f"  {slug}: aucune capture, ignoré")
        return
    bg = background(*cfg["colors"], seed=slug)
    save = lambda im, name: im.save(os.path.join(folder, name), "WEBP", quality=QUALITY, method=6)
    save(cover(slug, sources, bg), "cover.webp")
    for n in sources:
        save(single(slug, n, bg), f"visuel-{n}.webp")
    print(f"  {slug}: cover.webp + {len(sources)} visuels")


if __name__ == "__main__":
    for slug in sys.argv[1:] or PROJECTS:
        build(slug)
