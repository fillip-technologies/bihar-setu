import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import partnerHeroBg from '../../../assets/partner/partner-with.png'

function MandalaIcon({ className = 'w-4 h-4 text-[#C67D33]' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
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

export default function PartnerHero({ data }) {
  const {
    eyebrow,
    titleLine1,
    titleLine2,
    titleHighlight,
    leadP1,
    leadP2,
    ctaPrimary,
    ctaSecondary,
  } = data

  const sectionRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Background subtle scale entrance
      if (bgRef.current) {
        tl.fromTo(
          bgRef.current,
          { scale: 1.04, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.1, ease: 'power2.out' },
          0
        )
      }

      tl.fromTo(
        '[data-ph="eyebrow"]',
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45 },
        0.15
      )

      tl.fromTo(
        '[data-ph="title"]',
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65 },
        0.25
      )

      tl.fromTo(
        '[data-ph="lead"]',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.4
      )

      tl.fromTo(
        '[data-ph="actions"]',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.55
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
      aria-labelledby="partner-hero-heading"
      className="relative min-h-[460px] sm:min-h-[500px] lg:min-h-[530px] xl:min-h-[560px] flex flex-col justify-center overflow-hidden border-b border-stone-200/80 bg-[#FAF7F2]"
    >
      {/* ── Background Image Layer (Full Background) ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <img
          src={partnerHeroBg}
          alt="Let Us Build the Bridge Together - Bihar Setu partnership panorama with sunrise, bridge, and handshake"
          className="w-full h-full object-cover object-[78%_center] sm:object-[82%_center] lg:object-[86%_center]"
        />

        {/* Desktop scrim: soft feather on the left to keep text ultra-crisp while handshake & temple stay vibrant */}
        <div
          className="hidden sm:block absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(250, 247, 242, 0.95) 0%, rgba(250, 247, 242, 0.85) 34%, rgba(250, 247, 242, 0.3) 54%, transparent 70%)',
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

      {/* ── Foreground Content Container (Decreased Height & Tightened Spacing) ── */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-12 lg:pb-14">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow */}
          <div data-ph="eyebrow" className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="w-6 sm:w-8 h-[1.5px] bg-[#C67D33]/60" />
            <div className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11.5px] font-extrabold tracking-[0.2em] text-[#8C5E35] uppercase">
              <MandalaIcon className="w-3.5 h-3.5 text-[#C67D33]" />
              <span>{eyebrow}</span>
            </div>
            <span className="w-6 sm:w-8 h-[1.5px] bg-[#C67D33]/60" />
          </div>

          {/* Main Headline */}
          <h1
            id="partner-hero-heading"
            data-ph="title"
            className="text-[30px] sm:text-[38px] lg:text-[44px] font-serif font-bold text-[#111827] leading-[1.1] tracking-[-0.025em]"
          >
            {titleLine1} <br />
            {titleLine2}{' '}
            <span className="text-[#A15D1C] font-serif font-bold">
              {titleHighlight}
            </span>
          </h1>

          {/* Lead Narrative */}
          <div data-ph="lead" className="mt-3.5 space-y-2 max-w-xl">
            <p className="text-[13.5px] sm:text-[14.5px] text-[#374151] leading-[1.65] font-normal">
              {leadP1}
            </p>
            <p className="text-[13px] sm:text-[14px] text-[#475569] leading-[1.65] font-normal">
              {leadP2}
            </p>
          </div>

          {/* CTAs */}
          <div
            data-ph="actions"
            className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 pt-0.5"
          >
            <a
              href={ctaPrimary.targetId}
              onClick={(e) => handleScrollTo(e, ctaPrimary.targetId)}
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-[#A15D1C] hover:bg-[#8B4D14] active:bg-[#733F10] text-white text-[13px] sm:text-[13.5px] font-bold shadow-md shadow-[#A15D1C]/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>{ctaPrimary.label}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2] group-hover:translate-x-0.5 transition-transform" />
            </a>

            <Link
              to={ctaSecondary.path || '/initiatives#summit-registration-form'}
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-white/90 backdrop-blur-xs border border-stone-300 hover:border-stone-400 text-[#111827] text-[13px] sm:text-[13.5px] font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-2xs hover:bg-white cursor-pointer group"
            >
              <span>{ctaSecondary.label}</span>
              <ArrowRight className="w-4 h-4 stroke-[2] text-[#8C5E35] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
