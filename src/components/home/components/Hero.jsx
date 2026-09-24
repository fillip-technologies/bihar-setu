import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Calendar,
} from 'lucide-react'
import { gsap } from 'gsap'
import { heroData } from '../../../data/heroData'
import heroBackground from '../../../assets/home/hero-section-1.png'

export default function Hero() {
  const { eyebrow, heading, description, actions } = heroData

  // Refs for animation targets
  const bgRef       = useRef(null)
  const eyebrowRef  = useRef(null)
  const headlineRef = useRef(null)
  const descRef     = useRef(null)
  const btnsRef     = useRef(null)

  useEffect(() => {
    // ── Master timeline: cinematic page-load entrance ──
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // 1. Background: Ken Burns subtle scale from 1.08 → 1
      tl.fromTo(
        bgRef.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out' },
        0
      )

      // 2. Eyebrow line + text
      tl.fromTo(
        eyebrowRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.4
      )

      // 3. Headline: each child span slides up with stagger
      tl.fromTo(
        headlineRef.current.querySelectorAll('.hero-line'),
        { y: 36, opacity: 0, filter: 'blur(4px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, stagger: 0.12 },
        0.65
      )

      // 4. Description
      tl.fromTo(
        descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65 },
        0.95
      )

      // 5. Buttons: stagger pop
      tl.fromTo(
        btnsRef.current.querySelectorAll('a'),
        { y: 16, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.1 },
        1.1
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-0 sm:min-h-[calc(100vh-5rem)] flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ opacity: 0 }}>
        <img
          src={heroBackground}
          alt="Bihar Setu Landscape & Initiatives"
          className="w-full h-full object-cover object-[75%_center] sm:object-center"
        />
        {/* Soft mobile readability scrim so text never clashes with graphics */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/90 via-[#FAF7F2]/65 via-60% to-transparent sm:hidden" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-7 sm:pt-24 lg:pt-28 pb-8 sm:pb-16">
        <div className="max-w-[320px] sm:max-w-lg lg:max-w-xl">

          {/* Eyebrow */}
          <div ref={eyebrowRef} className="flex items-center gap-2 mb-2 sm:mb-3" style={{ opacity: 0 }}>
            <span className="w-5 sm:w-6 h-[2px] bg-[#17382E] rounded-full" />
            <span className="text-[9px] sm:text-[10.5px] font-bold tracking-[0.18em] sm:tracking-[0.2em] text-[#17382E] uppercase drop-shadow-xs">
              {eyebrow}
            </span>
          </div>

          {/* Headline + Description */}
          <div className="space-y-2.5 sm:space-y-3">
            <h1
              ref={headlineRef}
              className="text-[22px] sm:text-3xl lg:text-[40px] xl:text-[44px] font-medium text-[#111827] leading-[1.2] sm:leading-[1.18] tracking-[-0.01em] font-serif"
            >
              <span className="hero-line inline-block" style={{ opacity: 0 }}>
                {heading.line1Prefix}
                <span className="text-[#17382E] italic font-medium ml-1">
                  {heading.line1Highlight}
                </span>
              </span>
              <br />
              <span className="hero-line inline-block" style={{ opacity: 0 }}>
                {heading.line2}
              </span>
            </h1>

            <p
              ref={descRef}
              className="text-[12px] sm:text-[14px] text-[#334155] sm:text-[#475569] max-w-sm sm:max-w-lg leading-relaxed font-normal"
              style={{ opacity: 0 }}
            >
              {description}
            </p>
          </div>

          {/* Action Buttons */}
          <div ref={btnsRef} className="flex flex-wrap items-center gap-2 pt-3 sm:pt-5">
            {actions.map((act) => {
              if (act.variant === 'primary') {
                return (
                  <Link
                    key={act.label}
                    to={act.path}
                    style={{ opacity: 0 }}
                    className="inline-flex items-center gap-2 px-4.5 py-2 sm:px-5 sm:py-2.5 bg-[#17382E] hover:bg-[#112B23] active:bg-[#0B1E18] text-white font-semibold text-xs rounded-lg shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>{act.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
                  </Link>
                )
              }

              if (act.variant === 'secondary') {
                return (
                  <Link
                    key={act.label}
                    to={act.path}
                    style={{ opacity: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 bg-white/90 hover:bg-white text-[#1B2533] border border-slate-300/80 hover:border-slate-400 font-semibold text-xs rounded-lg shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>{act.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                  </Link>
                )
              }

              return (
                <Link
                  key={act.label}
                  to={act.path}
                  style={{ opacity: 0 }}
                  className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 bg-[#E6ECE3]/90 hover:bg-[#D9E2D5] text-[#1B2533] border border-[#CBD7C6]/80 font-semibold text-xs rounded-lg shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  {act.hasCalendar && <Calendar className="w-3.5 h-3.5 text-[#2D3748] stroke-[2]" />}
                  <span>{act.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>


    </section>
  )
}
