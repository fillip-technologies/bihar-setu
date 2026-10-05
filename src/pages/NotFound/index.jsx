import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-ivory px-4 py-20">
      <div className="text-center">
        <p className="font-serif text-7xl sm:text-8xl font-medium text-primary/20 leading-none">404</p>
        <h1 className="mt-4 font-serif text-2xl sm:text-3xl font-medium text-ink">
          This page is still being built
        </h1>
        <p className="mt-2 max-w-md mx-auto text-sm text-ink-soft">
          The page you are looking for doesn&apos;t exist yet or has moved.
        </p>
        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm hover:bg-primary-hover transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
      </div>
    </section>
  )
}
