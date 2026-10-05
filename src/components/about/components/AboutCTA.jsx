import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Handshake, Compass } from 'lucide-react'

export default function AboutCTA({ data }) {
  const { eyebrow, title, description, primaryAction, secondaryAction } = data

  return (
    <section id="join-us" className="relative w-full bg-[#FAF7F2] py-16 sm:py-20 overflow-hidden">
      {/* ── Background Aesthetics ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute -top-20 right-10 w-[500px] h-[400px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(224, 98, 34, 0.12) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute bottom-0 -left-10 w-[500px] h-[400px] rounded-full blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(23, 56, 46, 0.1) 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#17382E] via-[#112B23] to-[#0A1813] text-white p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">

          {/* Background Motif lines */}
          <div className="absolute right-0 bottom-0 w-96 h-96 opacity-10 pointer-events-none">
            <svg viewBox="0 0 400 400" fill="none" className="w-full h-full text-white">
              <path d="M 0 350 Q 200 150 400 350" stroke="currentColor" strokeWidth="2" />
              <path d="M 0 370 Q 200 190 400 370" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="200" y1="50" x2="200" y2="400" strokeWidth="3" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E06222] border border-white/15 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-white">
                {eyebrow}
              </span>
            </div>

            <h2 className="text-[30px] sm:text-[42px] lg:text-[48px] font-serif font-bold text-white leading-[1.12] tracking-tight">
              {title}
            </h2>

            <p className="mt-4 text-[14.5px] sm:text-[16px] text-white/85 leading-relaxed max-w-2xl">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to={primaryAction.path}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#E06222] hover:bg-[#EA580C] text-white font-bold text-[13.5px] shadow-lg shadow-[#E06222]/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Compass className="w-4 h-4 stroke-[2.2]" />
                <span>{primaryAction.label}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </Link>

              <Link
                to={secondaryAction.path}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-[13.5px] backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5"
              >
                <Handshake className="w-4 h-4 stroke-[2.2]" />
                <span>{secondaryAction.label}</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
