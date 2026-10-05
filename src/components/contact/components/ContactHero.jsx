import { useEffect, useRef } from 'react'
import { MessageSquare, ShieldCheck, Clock, MapPin } from 'lucide-react'
import { gsap } from 'gsap'
import aboutHeroBg from '../../../assets/about/about-bg.png'

export default function ContactHero({ data }) {
  const { eyebrow, title, headline, lead } = data
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

      // Eyebrow badge
      tl.fromTo(
        '[data-ch="eyebrow"]',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45 },
        0.1
      )

      // Title & Headline
      tl.fromTo(
        '[data-ch="title"]',
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.2
      )

      tl.fromTo(
        '[data-ch="headline"]',
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65 },
        0.3
      )

      // Lead Paragraph
      tl.fromTo(
        '[data-ch="lead"]',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.45
      )

      // Stats pills
      tl.fromTo(
        '[data-ch="pill"]',
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.45 },
        0.55
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="contact-hero-heading"
      className="relative overflow-hidden bg-[#FAF7F2] border-b border-stone-200/80 pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      {/* ── Background Image Layer (Matching About Page Hero) ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <img
          src={aboutHeroBg}
          alt="Bihar Setu digital connectivity and heritage sunrise"
          className="w-full h-full object-cover object-[80%_center] sm:object-[84%_center] lg:object-[88%_center]"
        />

        {/* Desktop scrim: soft feather on the left to keep text ultra-crisp while heritage art stays vibrant */}
        <div
          className="hidden sm:block absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(250, 247, 242, 0.94) 0%, rgba(250, 247, 242, 0.82) 32%, rgba(250, 247, 242, 0.25) 54%, transparent 68%)',
          }}
        />

        {/* Mobile scrim: soft top-to-bottom tint */}
        <div
          className="sm:hidden absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(250, 247, 242, 0.92) 0%, rgba(250, 247, 242, 0.7) 50%, rgba(250, 247, 242, 0.2) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div data-ch="eyebrow" className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-6 h-[2px] bg-[#E06222] rounded-full shrink-0" />
            <span className="text-[11.5px] font-extrabold tracking-[0.22em] text-[#8C5E35] uppercase font-sans">
              {eyebrow}
            </span>
          </div>

          {/* Main Title */}
          <h1
            id="contact-hero-heading"
            data-ch="title"
            className="text-[32px] sm:text-[44px] lg:text-[52px] font-serif font-bold text-[#111827] leading-[1.12] tracking-[-0.025em]"
          >
            {title}
          </h1>

          {/* Headline */}
          <p
            data-ch="headline"
            className="mt-2 text-[20px] sm:text-[24px] lg:text-[28px] font-serif font-medium text-[#17382E] leading-snug"
          >
            {headline}
          </p>

          {/* Lead Copy */}
          <p
            data-ch="lead"
            className="mt-4 text-[15px] sm:text-[17px] text-[#475569] leading-[1.75] font-normal max-w-2xl"
          >
            {lead}
          </p>

          {/* Key Assurance Indicators */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <div
              data-ch="pill"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-xs text-[12px] font-semibold text-[#17382E]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#E06222]" />
              <span>8 Dedicated Streams</span>
            </div>

            <div
              data-ch="pill"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-xs text-[12px] font-semibold text-[#17382E]"
            >
              <MapPin className="w-3.5 h-3.5 text-[#17382E]" />
              <span>All 38 Districts Covered</span>
            </div>

            <div
              data-ch="pill"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-xs text-[12px] font-semibold text-[#17382E]"
            >
              <Clock className="w-3.5 h-3.5 text-[#E06222]" />
              <span>24 - 48h Response Commitment</span>
            </div>

            <div
              data-ch="pill"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-xs text-[12px] font-semibold text-[#17382E]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Official State Portal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom subtle indicator line */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E06222]/30 to-transparent pointer-events-none" />
    </section>
  )
}
