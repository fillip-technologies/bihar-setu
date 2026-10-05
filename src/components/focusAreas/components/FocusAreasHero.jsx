import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, Handshake } from 'lucide-react'
import { gsap } from 'gsap'
import focusAreaHeroBg from '../../../assets/focus-areas/focus-area-hero.png'

export default function FocusAreasHero({ data }) {
  const {
    eyebrow,
    titleLine1,
    titleLine2,
    lead,
    stats,
    ctaPrimary,
    ctaSecondary,
  } = data

  const sectionRef = useRef(null)
  const bgRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Background subtle scale entrance
      tl.fromTo(
        bgRef.current,
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
        0
      )

      // Eyebrow badge
      tl.fromTo(
        '[data-fah="eyebrow"]',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.2
      )

      // Headline
      tl.fromTo(
        '[data-fah="headline"]',
        { y: 28, opacity: 0, filter: 'blur(4px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.75 },
        0.3
      )

      // Lead Paragraph
      tl.fromTo(
        '[data-fah="lead"]',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65 },
        0.5
      )

      // Stats Pills
      tl.fromTo(
        '[data-fah="stats"]',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5 },
        0.65
      )

      // Action Buttons
      tl.fromTo(
        '[data-fah="actions"]',
        { y: 14, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5 },
        0.8
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleScrollTo = (e, targetId) => {
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="focus-areas-hero-heading"
      className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] xl:min-h-[740px] flex flex-col justify-center overflow-hidden border-b border-stone-200/80 bg-[#FAF7F2]"
    >
      {/* ── Background Image Layer (Showcasing Sector Montage & Bodh Gaya) ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{ opacity: 0 }}
      >
        <img
          src={focusAreaHeroBg}
          alt="Bihar Setu multi-sector panorama with Buddha, sunrise and developmental pillars"
          className="w-full h-full object-cover object-[78%_center] sm:object-[82%_center] lg:object-[86%_center]"
        />

        {/* Desktop scrim: soft feather on the left to keep text ultra-crisp while sector montage stays vibrant */}
        <div
          className="hidden sm:block absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(250, 247, 242, 0.94) 0%, rgba(250, 247, 242, 0.82) 32%, rgba(250, 247, 242, 0.35) 54%, transparent 68%)',
          }}
        />

        {/* Mobile scrim: soft top-to-bottom tint */}
        <div
          className="sm:hidden absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(250, 247, 242, 0.95) 0%, rgba(250, 247, 242, 0.8) 55%, rgba(250, 247, 242, 0.25) 100%)',
          }}
        />
      </div>

      {/* ── Foreground Content Container (Shifted slightly upward for visual harmony) ── */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14 pb-14 sm:pb-20 -translate-y-3 sm:-translate-y-7 lg:-translate-y-9"
      >
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow Label */}
          <div data-fah="eyebrow" className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#E06222] rounded-full shrink-0" />
            <span className="text-[11px] font-extrabold tracking-[0.22em] text-[#8C5E35] uppercase font-sans">
              {eyebrow}
            </span>
          </div>

          {/* Main Headline */}
          <h1
            id="focus-areas-hero-heading"
            data-fah="headline"
            className="text-[34px] sm:text-[46px] lg:text-[54px] font-serif font-bold text-[#111827] leading-[1.12] tracking-[-0.025em]"
          >
            {titleLine1} <br />
            <span className="text-[#17382E] italic font-serif font-medium">
              {titleLine2}
            </span>
          </h1>

          {/* Core Lead Narrative */}
          <p
            data-fah="lead"
            className="mt-4 text-[15px] sm:text-[16.5px] text-[#374151] leading-[1.78] font-normal"
          >
            {lead}
          </p>

          {/* Stats & Scope Indicators */}
          {stats && stats.length > 0 && (
            <div data-fah="stats" className="mt-5 sm:mt-6 pt-4 sm:pt-4.5 border-t border-stone-200/80">
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[24px] sm:text-[30px] font-serif font-black text-[#17382E] tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[11.5px] sm:text-[12.5px] font-bold text-[#111827] leading-tight mt-0.5">
                      {stat.label}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#64748B] mt-0.5 hidden sm:block">
                      {stat.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div
            data-fah="actions"
            className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3.5 pt-1"
          >
            {ctaPrimary && (
              <a
                href={ctaPrimary.targetId}
                onClick={(e) => handleScrollTo(e, ctaPrimary.targetId)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#17382E] text-white text-[13.5px] sm:text-[14px] font-bold shadow-md hover:bg-[#E06222] transition-colors duration-200 group"
              >
                <span>{ctaPrimary.label}</span>
                <ArrowDown className="w-4 h-4 stroke-[2.2] group-hover:translate-y-0.5 transition-transform" />
              </a>
            )}

            {ctaSecondary && (
              <Link
                to={ctaSecondary.path}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-stone-300/80 text-[#17382E] text-[13.5px] sm:text-[14px] font-bold hover:bg-white hover:border-[#17382E]/40 transition-all duration-200 shadow-xs"
              >
                <Handshake className="w-4 h-4 text-[#E06222]" />
                <span>{ctaSecondary.label}</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Bottom subtle indicator line */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E06222]/30 to-transparent pointer-events-none" />
    </section>
  )
}
