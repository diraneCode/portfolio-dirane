import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="container-x flex min-h-screen flex-col items-center justify-center py-32 text-center">
      <p className="eyebrow text-brand-light">Erreur 404</p>
      <h1 className="mt-4 font-display text-brush-xl text-paper">Cette page n&apos;existe pas</h1>
      <p className="mt-6 max-w-md text-ash">
        Le lien que vous avez suivi est peut-être cassé ou la page a été déplacée. Retournez à l&apos;accueil pour
        découvrir mon portfolio.
      </p>
      <Button asChild size="lg" className="mt-10">
        <Link href="/">
          <ArrowLeft /> Retour à l&apos;accueil
        </Link>
      </Button>
    </main>
  )
}
