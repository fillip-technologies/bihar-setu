import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import heroBgImg from '../../../assets/howwework/howwework-bg.jpg'

export default function HowWeWorkHero({ data }) {
  const { badge, title, highlight, desc, primaryCta, secondaryCta } = data

  const sectionRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Background subtle entrance
      tl.fromTo(
        bgRef.current,
        { scale: 1.03, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.0, ease: 'power2.out' },
        0
      )

      // Eyebrow badge
      tl.fromTo(
        '[data-hw="badge"]',
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.15
      )

      // Headline
      tl.fromTo(
        '[data-hw="title"]',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65 },
        0.25
      )

      // Description
      tl.fromTo(
        '[data-hw="desc"]',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55 },
        0.35
      )

      // CTAs
      tl.fromTo(
        '[data-hw="ctas"]',
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.45
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleScrollTo = (e, targetHref) => {
    if (targetHref && targetHref.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(targetHref)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="how-we-work-hero-heading"
      style={{ backgroundColor: '#CED3D7' }}
      className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] xl:min-h-[480px] flex flex-col justify-center overflow-hidden border-b border-stone-300/80"
    >
      {/* ── Background Image Layer (Full Image Visibility) ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <img
          src={heroBgImg}
          alt="How Bihar Setu Works - Collaborative Mosaic"
          className="w-full h-full object-cover object-[75%_center] lg:object-contain lg:object-right"
        />

        {/* Desktop left-side feather gradient scrim: preserves sharp text readability while keeping full mosaic 100% visible */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(206, 211, 215, 0.98) 0%, rgba(206, 211, 215, 0.88) 32%, rgba(206, 211, 215, 0.2) 48%, transparent 60%)',
          }}
        />

        {/* Mobile/Tablet gradient scrim */}
        <div
          className="lg:hidden absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(206, 211, 215, 0.94) 0%, rgba(206, 211, 215, 0.88) 60%, rgba(206, 211, 215, 0.7) 100%)',
          }}
        />
      </div>

      {/* ── Foreground Content ── */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow Badge */}
          {badge && (
            <div data-hw="badge" className="inline-flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 border border-stone-300/90 text-[#8B4D14] text-[11px] sm:text-[12px] font-bold tracking-wide uppercase shadow-2xs backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#A15D1C]" />
                {badge}
              </span>
            </div>
          )}

          {/* Heading */}
          <h1
            id="how-we-work-hero-heading"
            data-hw="title"
            className="text-[30px] sm:text-[40px] lg:text-[46px] xl:text-[50px] font-serif font-bold text-[#111827] leading-[1.1] tracking-[-0.02em]"
          >
            {title}{' '}
            <span className="text-[#A15D1C] font-serif font-bold">
              {highlight}
            </span>
          </h1>

          {/* Description */}
          <p
            data-hw="desc"
            className="mt-3.5 text-[14.5px] sm:text-[15.5px] text-[#243242] leading-relaxed max-w-lg font-normal"
          >
            {desc}
          </p>

          {/* Action CTAs */}
          <div
            data-hw="ctas"
            className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-3.5"
          >
            {primaryCta && (
              <a
                href={primaryCta.href}
                onClick={(e) => handleScrollTo(e, primaryCta.href)}
                className="inline-flex items-center gap-2 px-5.5 py-3 rounded-full bg-[#17382E] text-white text-[13.5px] font-bold shadow-md hover:bg-[#112B23] hover:shadow-lg transition-all transform active:scale-95 group cursor-pointer"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            )}

            {secondaryCta && (
              <Link
                to={secondaryCta.href}
                className="inline-flex items-center gap-2 px-5.5 py-3 rounded-full bg-white/90 border border-stone-300 text-[#111827] text-[13.5px] font-bold hover:bg-white hover:text-[#A15D1C] transition-all shadow-2xs active:scale-95"
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
