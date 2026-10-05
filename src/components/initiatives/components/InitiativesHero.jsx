import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Compass } from 'lucide-react'
import { gsap } from 'gsap'
import heroBgImg from '../../../assets/innovaties/innovaties.png'

export default function InitiativesHero({ data }) {
  const { titleLine1, titleLine2, desc, primaryCta, secondaryCta, stats } = data

  const sectionRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Background entrance
      if (bgRef.current) {
        tl.fromTo(
          bgRef.current,
          { scale: 1.05, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
          0
        )
      }

      // Title
      tl.fromTo(
        '[data-init="title"]',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.15
      )

      // Description
      tl.fromTo(
        '[data-init="desc"]',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.3
      )

      // Action CTAs
      tl.fromTo(
        '[data-init="ctas"]',
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.45
      )

      // Stats strip
      tl.fromTo(
        '[data-init="stats"]',
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.55
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleScrollTo = (e, targetHref) => {
    if (targetHref && targetHref.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(targetHref)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="initiatives-hero-heading"
      className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[450px] flex flex-col justify-center overflow-hidden bg-[#07130F] text-white"
    >
      {/* ── Background Image Layer (Full Cover) ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
      >
        <img
          src={heroBgImg}
          alt="Bihar Setu Initiatives - Turning Ideas Into Action"
          className="w-full h-full object-cover object-center lg:object-right scale-100"
        />

        {/* Gradient Scrims: Ensure 100% crisp typography on the left while showcasing the glowing globe on the right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(7, 19, 15, 0.95) 0%, rgba(7, 19, 15, 0.82) 42%, rgba(7, 19, 15, 0.45) 70%, rgba(7, 19, 15, 0.25) 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(7, 19, 15, 0.95) 0%, transparent 40%, rgba(7, 19, 15, 0.6) 100%)',
          }}
        />
        {/* Subtle radial cyan light accent */}
        <div
          className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-[#06B6D4]/15 blur-[100px] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* ── Hero Foreground Content ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Main Title */}
          <h1
            id="initiatives-hero-heading"
            data-init="title"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-3.5"
          >
            {titleLine1} <span className="text-[#34D399]">{titleLine2}</span>
          </h1>

          {/* Subtitle / Description */}
          <p
            data-init="desc"
            className="text-sm sm:text-base lg:text-[16.5px] text-[#CBD5E1] leading-relaxed font-normal max-w-2xl mb-6"
          >
            {desc}
          </p>

          {/* Action CTAs */}
          <div
            data-init="ctas"
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6"
          >
            <a
              href={primaryCta.href}
              onClick={(e) => handleScrollTo(e, primaryCta.href)}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl bg-[#E06222] hover:bg-[#EA580C] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#E06222]/30 transition-all hover:scale-[1.02] active:scale-95 text-center"
            >
              <Compass className="w-4 h-4 text-white" />
              <span>{primaryCta.label}</span>
            </a>

            <Link
              to={secondaryCta.to}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-95 text-center group"
            >
              <span>{secondaryCta.label}</span>
              <ArrowRight className="w-4 h-4 text-[#34D399] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Stats Bar */}
          {stats && stats.length > 0 && (
            <div
              data-init="stats"
              className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-8"
            >
              {stats.map((st, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {st.value}
                  </div>
                  <div className="text-[11px] text-[#94A3B8] font-medium leading-tight max-w-[85px]">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
