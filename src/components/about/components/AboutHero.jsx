import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import aboutHeroBg from '../../../assets/about/about-bg.png'

export default function AboutHero({ data }) {
  const {
    heading,
    paragraphs,
    actions,
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

      // Headline
      tl.fromTo(
        '[data-ah="headline"]',
        { y: 26, opacity: 0, filter: 'blur(4px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.75 },
        0.3
      )

      // Subtitle
      tl.fromTo(
        '[data-ah="subtitle"]',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.45
      )

      // Description
      tl.fromTo(
        '[data-ah="desc"]',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65 },
        0.6
      )

      // Action buttons
      tl.fromTo(
        '[data-ah="actions"]',
        { y: 14, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5 },
        0.75
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleScrollTo = (e, targetId) => {
    if (targetId.startsWith('#')) {
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
      aria-labelledby="about-hero-heading"
      className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] xl:min-h-[720px] flex flex-col justify-center overflow-hidden border-b border-stone-200/80 bg-[#FAF7F2]"
    >
      {/* ── Background Image Layer (High Visibility) ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <img
          src={aboutHeroBg}
          alt="Lord Buddha meditating overlooking Bihar sunrise"
          className="w-full h-full object-cover object-[80%_center] sm:object-[84%_center] lg:object-[88%_center]"
        />

        {/* Minimal feather gradient on the far left only: keeps the Buddha & scenery 100% visible */}
        <div
          className="hidden sm:block absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(250, 247, 242, 0.82) 0%, rgba(250, 247, 242, 0.5) 28%, rgba(250, 247, 242, 0.08) 46%, transparent 58%)',
          }}
        />

        {/* Mobile gradient: soft bottom and left tint */}
        <div
          className="sm:hidden absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(250, 247, 242, 0.88) 0%, rgba(250, 247, 242, 0.5) 50%, rgba(250, 247, 242, 0.1) 100%)',
          }}
        />
      </div>

      {/* ── Content Layer ── */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-22 pb-10 sm:pb-12 lg:pb-14"
      >
        <div className="max-w-xl lg:max-w-2xl">

          {/* Main Title & Subtitle */}
          <div className="space-y-2">
            <h1
              id="about-hero-heading"
              data-ah="headline"
              className="text-[38px] sm:text-[50px] lg:text-[58px] font-serif font-bold text-[#111827] leading-[1.06] tracking-[-0.025em] drop-shadow-2xs"
            >
              {heading.title}
            </h1>

            <p
              data-ah="subtitle"
              className="text-[20px] sm:text-[25px] lg:text-[28px] font-serif italic text-[#17382E] leading-[1.25]"
            >
              {heading.subtitle}
            </p>
          </div>

          {/* Minimal Lead Description */}
          <p
            data-ah="desc"
            className="mt-5 sm:mt-6 text-[15px] sm:text-[16.5px] text-[#334155] leading-[1.75] font-normal max-w-lg"
          >
            {paragraphs[0]}
          </p>

          {/* Clean Action Buttons */}
          <div data-ah="actions" className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3">
            {(actions || []).map((act) => {
              if (act.variant === 'primary') {
                return (
                  <a
                    key={act.label}
                    href={act.path}
                    onClick={(e) => handleScrollTo(e, act.path)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#17382E] hover:bg-[#112B23] text-white font-semibold text-[13px] shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>{act.label}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                  </a>
                )
              }

              if (act.variant === 'secondary') {
                return (
                  <a
                    key={act.label}
                    href={act.path}
                    onClick={(e) => handleScrollTo(e, act.path)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/95 hover:bg-white text-[#17382E] border border-stone-300 font-semibold text-[13px] shadow-2xs hover:shadow transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>{act.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2] text-[#E06222]" />
                  </a>
                )
              }

              return (
                <a
                  key={act.label}
                  href={act.path}
                  onClick={(e) => handleScrollTo(e, act.path)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FAF7F2] hover:bg-white text-[#17382E] border border-stone-300/80 font-semibold text-[13px] shadow-2xs hover:shadow transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{act.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                </a>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
