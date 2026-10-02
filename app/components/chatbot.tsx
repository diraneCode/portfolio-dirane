"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { ArrowUpRight, Bot, Mail, MessageCircle, Send, User, X } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa6"
import { site, whatsappUrl } from "@/lib/site"
import { projectData } from "@/lib/projectData"
import { experiences } from "@/lib/experienceData"
import { cn } from "@/lib/utils"

type Action = { label: string; href: string; external?: boolean }
type Message = { id: string; from: "user" | "bot"; text: string; actions?: Action[] }

const quickReplies = ["Qui es-tu ?", "Tes services", "Tes projets", "Demander un devis", "Te contacter"]

const contactActions: Action[] = [
  { label: "WhatsApp", href: whatsappUrl, external: true },
  { label: "E-mail", href: `mailto:${site.email}`, external: true },
  { label: "Formulaire de contact", href: "/#contact" },
  { label: "LinkedIn", href: site.socials.linkedin, external: true },
]

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")

const has = (s: string, ...keys: string[]) => keys.some((k) => s.includes(k))

/** Réponses locales, sans API : basées sur les données du site. */
function reply(input: string): Omit<Message, "id" | "from"> {
  const q = norm(input)

  if (has(q, "bonjour", "salut", "hello", "hey", "bonsoir", "coucou"))
    return { text: "Bonjour ! Je suis l'assistant de Dirane. Posez-moi une question sur ses services, ses projets, son parcours ou la façon de le contacter." }

  if (has(q, "merci", "super", "parfait", "top"))
    return { text: "Avec plaisir ! Si vous avez un projet en tête, le plus simple est d'écrire directement à Dirane.", actions: contactActions.slice(0, 2) }

  if (has(q, "qui es", "qui est", "presente", "c'est qui", "toi", "dirane"))
    return {
      text: `${site.name} est ${site.role}, basé à ${site.location}. Il conçoit des applications web et mobiles avec React, Next.js, React Native et Supabase, dessine les interfaces sur Figma et partage ses coulisses en vidéo.`,
      actions: [
        { label: "En savoir plus", href: "/#a-propos" },
        { label: "Télécharger le CV", href: site.cvPath, external: true },
      ],
    }

  if (has(q, "service", "propose", "faire pour", "prestation", "aide"))
    return {
      text: "Trois expertises : développement web & mobile (React, Next.js, React Native), UI/UX design sur Figma, et IA & automatisation (workflows, assistants, intégration GPT). Chaque projet démarre par un devis gratuit.",
      actions: [
        { label: "Voir les services", href: "/#services" },
        { label: "Demander un devis", href: "/#devis" },
      ],
    }

  if (has(q, "devis", "tarif", "prix", "combien", "budget", "cout", "coût"))
    return {
      text: "Les tarifs dépendent du périmètre : type de projet, nombre d'écrans, intégrations (paiement, CRM, IA) et délais. Décrivez votre besoin via le formulaire de devis, vous recevez une première estimation sous 48 h, sans engagement.",
      actions: [
        { label: "Demander un devis gratuit", href: "/#devis" },
        { label: "Discuter sur WhatsApp", href: whatsappUrl, external: true },
      ],
    }

  if (has(q, "projet", "realisation", "portfolio", "travaux", "exemple"))
    return {
      text: `Dirane a livré ${projectData.length} projets récents : sites vitrines, applications, outils métier (CRM, ERP) et maquettes. En voici quelques-uns :`,
      actions: [
        ...projectData
          .filter((p) => p.link)
          .slice(0, 4)
          .map((p) => ({ label: p.name, href: p.link!, external: true })),
        { label: "Tous les projets", href: "/#projets" },
      ],
    }

  if (has(q, "competence", "technologie", "stack", "outil", "langage", "react", "next", "supabase", "figma"))
    return {
      text: "Front-end : React, Next.js, TypeScript, Tailwind CSS. Mobile : React Native et Expo. Back-end & data : Node.js, NestJS, Supabase, PostgreSQL, MongoDB. Design : Figma, Photoshop. Outils : Docker, Git, Notion, IA (GPT, Copilot).",
      actions: [{ label: "Voir la stack", href: "/#outils" }],
    }

  if (has(q, "parcours", "experience", "formation", "etude", "diplome", "cv", "carriere"))
    return {
      text: `Parcours : ${experiences.map((e) => `${e.title} chez ${e.organization} (${e.start} – ${e.end})`).join(" ; ")}. Formation en informatique (Université de Dschang, IUC, IUT).`,
      actions: [
        { label: "Voir le parcours", href: "/#parcours" },
        { label: "Télécharger le CV", href: site.cvPath, external: true },
      ],
    }

  if (has(q, "disponible", "dispo", "delai", "quand", "libre", "freelance"))
    return {
      text: site.available
        ? "Dirane est disponible pour de nouveaux projets, à Douala ou à distance. Les délais dépendent du périmètre : un site vitrine se livre généralement en 2 à 4 semaines, une application en plusieurs sprints."
        : "Dirane n'est pas disponible pour le moment, mais vous pouvez laisser un message pour être recontacté.",
      actions: [{ label: "Prendre contact", href: "/#contact" }],
    }

  if (has(q, "ou ", "localis", "adresse", "ville", "pays", "douala", "cameroun", "distance", "remote"))
    return { text: `Dirane est basé à ${site.location} et travaille aussi à distance avec des clients en Afrique et en Europe.`, actions: [{ label: "Me contacter", href: "/#contact" }] }

  if (has(q, "blog", "article", "lire", "tuto"))
    return { text: "Le blog rassemble des retours d'expérience concrets : performance Next.js, design system Figma, Supabase pour un CRM…", actions: [{ label: "Lire le blog", href: "/blog" }] }

  if (has(q, "video", "tiktok", "contenu", "photo", "art", "dessin", "youtube", "reseaux", "instagram"))
    return {
      text: `Dirane est aussi créateur de contenu tech : ${site.content.pitch}`,
      actions: [
        { label: `${site.content.handle} sur ${site.content.platform}`, href: site.content.url, external: true },
        { label: "Instagram", href: site.socials.instagram, external: true },
        { label: "Galerie", href: "/#art" },
      ],
    }

  if (has(q, "contact", "mail", "email", "telephone", "whatsapp", "appel", "joindre", "ecrire", "numero"))
    return { text: `Vous pouvez joindre Dirane par WhatsApp (${site.phoneDisplay}), par e-mail (${site.email}) ou via le formulaire du site.`, actions: contactActions }

  return {
    text: "Je n'ai pas bien compris. Je peux vous renseigner sur les services, les projets, les tarifs, le parcours, la disponibilité ou les moyens de contact de Dirane.",
    actions: [
      { label: "Services", href: "/#services" },
      { label: "Projets", href: "/#projets" },
      { label: "Contact", href: "/#contact" },
    ],
  }
}

let counter = 0
const id = () => `${Date.now()}-${counter++}`

export default function Chatbot() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: id(),
      from: "bot",
      text: "Bonjour ! Je suis l'assistant de Dirane. Comment puis-je vous aider ?",
      actions: [
        { label: "Discuter sur WhatsApp", href: whatsappUrl, external: true },
        { label: "Demander un devis", href: "/#devis" },
      ],
    },
  ])
  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" })
  }, [messages, typing, reduce])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const send = (text: string) => {
    const content = text.trim()
    if (!content) return
    setMessages((m) => [...m, { id: id(), from: "user", text: content }])
    setInput("")
    setTyping(true)
    window.setTimeout(() => {
      setMessages((m) => [...m, { id: id(), from: "bot", ...reply(content) }])
      setTyping(false)
    }, 600)
  }

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      <AnimatePresence>
        {open && (
          <motion.section
            key="panel"
            role="dialog"
            aria-label="Assistant de Dirane"
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 flex h-[min(560px,calc(100dvh-7rem))] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-night-2 text-paper shadow-lift"
          >
            <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-brand text-white">
                  <Bot className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Assistant de Dirane</p>
                  <p className="flex items-center gap-1.5 text-[0.68rem] text-ash">
                    <span className="size-1.5 rounded-full bg-emerald-400" /> Répond instantanément
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer l'assistant"
                className="flex size-9 items-center justify-center rounded-full text-ash transition-colors hover:bg-white/10 hover:text-paper"
              >
                <X className="size-4" />
              </button>
            </header>

            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4" aria-live="polite">
              {messages.map((m) => (
                <div key={m.id} className={cn("flex gap-2", m.from === "user" ? "justify-end" : "justify-start")}>
                  {m.from === "bot" && (
                    <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-ash">
                      <Bot className="size-3" />
                    </span>
                  )}
                  <div className={cn("max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed", m.from === "user" ? "bg-brand text-white" : "bg-white/[0.07] text-paper")}>
                    <p>{m.text}</p>
                    {m.actions && (
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {m.actions.map((a) => (
                          <li key={a.label}>
                            <a
                              href={a.href}
                              target={a.external ? "_blank" : undefined}
                              rel={a.external ? "noopener noreferrer" : undefined}
                              onClick={() => !a.external && setOpen(false)}
                              className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-night px-2.5 py-1 text-xs text-paper transition-colors hover:border-brand-light hover:text-brand-light"
                            >
                              {a.label} <ArrowUpRight className="size-3" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {m.from === "user" && (
                    <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/30 text-brand-light">
                      <User className="size-3" />
                    </span>
                  )}
                </div>
              ))}
              {typing && (
                <div className="flex items-center gap-1 pl-8" aria-label="L'assistant écrit">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="size-1.5 animate-bounce rounded-full bg-ash" style={{ animationDelay: `${i * 120}ms` }} />
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none]">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="shrink-0 rounded-full border border-white/15 px-3 py-1.5 text-xs text-ash transition-colors hover:border-brand-light hover:text-paper"
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <label htmlFor="chat-input" className="sr-only">
                Votre message
              </label>
              <input
                id="chat-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écrivez votre question…"
                autoComplete="off"
                className="h-10 flex-1 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-paper placeholder:text-white/55 focus-visible:border-brand-light focus-visible:outline-none"
              />
              <button
                type="submit"
                aria-label="Envoyer"
                disabled={!input.trim()}
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-600 disabled:opacity-40"
              >
                <Send className="size-4" />
              </button>
            </form>
            <div className="flex items-center justify-center gap-4 border-t border-white/10 px-4 py-2 text-[0.68rem] text-ash">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-paper">
                <FaWhatsapp className="size-3.5 text-[#25D366]" /> WhatsApp
              </a>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1 hover:text-paper">
                <Mail className="size-3.5" /> E-mail
              </a>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Fermer l'assistant" : "Ouvrir l'assistant"}
        className="ml-auto flex size-14 items-center justify-center rounded-full bg-brand text-white shadow-glow transition-all duration-300 hover:scale-105 hover:bg-brand-600"
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-6" />}
      </button>
    </div>
  )
}
