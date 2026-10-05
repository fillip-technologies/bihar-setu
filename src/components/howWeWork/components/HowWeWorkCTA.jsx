import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import aboutBg from '../../../assets/about/about-bg.png'

function MandalaIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <circle cx="12" cy="12" r="9.5" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.5" strokeWidth="1.5" />
      <line x1="12" y1="2.5" x2="12" y2="8.5" strokeWidth="1.4" />
      <line x1="12" y1="15.5" x2="12" y2="21.5" strokeWidth="1.4" />
      <line x1="2.5" y1="12" x2="8.5" y2="12" strokeWidth="1.4" />
      <line x1="15.5" y1="12" x2="21.5" y2="12" strokeWidth="1.4" />
      <line x1="5.3" y1="5.3" x2="9.5" y2="9.5" strokeWidth="1.4" />
      <line x1="14.5" y1="14.5" x2="18.7" y2="18.7" strokeWidth="1.4" />
      <line x1="5.3" y1="18.7" x2="9.5" y2="14.5" strokeWidth="1.4" />
      <line x1="14.5" y1="9.5" x2="18.7" y2="5.3" strokeWidth="1.4" />
    </svg>
  )
}

export default function HowWeWorkCTA({ data }) {
  const { eyebrow, title, highlight, desc, primaryCta, secondaryCta } = data

  return (
    <section
      id="how-we-work-cta"
      aria-labelledby="hww-cta-heading"
      className="relative overflow-hidden py-8 sm:py-10 lg:py-12 bg-[#0B1E18]"
    >
      {/* ── Background Image Layer ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={aboutBg}
          alt="Scenic Bihar panorama with sunset"
          className="w-full h-full object-cover object-[80%_35%] opacity-45"
        />
        {/* Gradient scrim — crisp contrast on left, scenic reveal on right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(11, 30, 24, 0.95) 0%, rgba(11, 30, 24, 0.85) 45%, rgba(11, 30, 24, 0.4) 100%)',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-1.5">
            <MandalaIcon className="w-3.5 h-3.5 text-[#F5A623]" />
            <span className="text-[11px] font-extrabold tracking-[0.22em] text-[#F5A623] uppercase">
              {eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2
            id="hww-cta-heading"
            className="text-[26px] sm:text-[32px] lg:text-[36px] font-serif font-bold text-white leading-tight tracking-[-0.02em]"
          >
            {title}{' '}
            <span className="text-[#F5A623] italic">{highlight}</span>
          </h2>

          {/* Description */}
          <p className="mt-2 text-[13.5px] sm:text-[14.5px] text-stone-200 leading-relaxed font-normal max-w-xl">
            {desc}
          </p>

          {/* CTA Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {/* Primary — white pill (same as PartnerSubmitIdea) */}
            {primaryCta && (
              <Link
                to={primaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-white hover:bg-stone-100 text-[#111827] text-[13px] sm:text-[13.5px] font-bold shadow-md transition-all duration-200 hover:-translate-y-0.5 group"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.2] text-[#A15D1C] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            )}

            {/* Secondary — outline ghost */}
            {secondaryCta && (
              <Link
                to={secondaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full border border-white/30 text-white text-[13px] sm:text-[13.5px] font-bold hover:bg-white/10 transition-all duration-200"
              >
                <span>{secondaryCta.label}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
