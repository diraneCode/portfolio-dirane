import { ImageResponse } from "next/og"
import { site } from "@/lib/site"

export const alt = `${site.name} — ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

async function loadFont(family: string, text: string, weight = 600) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:5.0) Gecko/20100101 Firefox/5.0" },
      })
    ).text()
    const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1]
    if (!url) return null
    const res = await fetch(url)
    if (!res.ok) return null
    return await res.arrayBuffer()
  } catch {
    return null
  }
}

export default async function OpenGraphImage() {
  const text = `Dirane ${site.role} ${site.location} ${site.url} Disponible pour vos projets`
  const poppins = await loadFont("Poppins", text, 600)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#121212",
          color: "#FFFFFF",
          fontFamily: poppins ? "Poppins" : "sans-serif",
          padding: "64px 80px 56px",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 22, background: "#3B6CFF" }} />
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "#3B6CFF",
            opacity: 0.9,
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#B8B8B8" }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#3B6CFF" }} />
          {site.roleShort}
        </div>
        <div style={{ display: "flex", fontSize: 230, fontWeight: 600, lineHeight: 0.9, letterSpacing: -12 }}>Dirane</div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 24, color: "#B8B8B8" }}>{`${site.location} · ${site.url.replace("https://", "")}`}</div>
          <div style={{ display: "flex", padding: "14px 28px", borderRadius: 999, background: "#3B6CFF", color: "#121212", fontSize: 22, fontWeight: 600 }}>
            Disponible pour vos projets
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: poppins ? [{ name: "Poppins", data: poppins, weight: 600, style: "normal" }] : undefined,
    }
  )
}
