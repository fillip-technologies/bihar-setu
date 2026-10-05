import { Link } from 'react-router-dom'
import {
  Lightbulb,
  ShieldCheck,
  Users,
  Briefcase,
  Cpu,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import patnaMapImg from '../../../assets/about/patna-removebg.png'

const iconMap = {
  Lightbulb,
  ShieldCheck,
  Users,
  Briefcase,
  Cpu,
  TrendingUp,
}

export default function AboutWhyBiharSetu({ data }) {
  const { eyebrow, headline, definition, bridges, quote } = data

  return (
    <section id="why-bihar-setu" className="relative w-full bg-white border-b border-stone-200/70 overflow-hidden pt-6 sm:pt-10 pb-14 sm:pb-18">
      {/* ── Subtle Background Elements ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Saffron glow top left */}
        <div
          className="absolute -top-32 -left-20 w-[600px] h-[500px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(224, 98, 34, 0.12) 0%, transparent 65%)',
          }}
        />
        {/* Forest green glow bottom right */}
        <div
          className="absolute -bottom-32 right-0 w-[550px] h-[500px] rounded-full blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(23, 56, 46, 0.08) 0%, transparent 65%)',
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(#17382E 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top Header & Conceptual Bridge Banner ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-10 sm:pb-12 border-b border-stone-200/80">

          {/* Left Text: Eyebrow + Headline + Definition */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2px] bg-[#E06222] rounded-full shrink-0" />
              <span className="text-[10.5px] font-extrabold tracking-[0.22em] text-[#8C5E35] uppercase">
                {eyebrow}
              </span>
            </div>

            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-serif font-bold text-[#111827] leading-[1.12] tracking-[-0.02em]">
              {headline.replace('Bridge', '')}
              <span className="text-[#E06222] italic font-serif">Bridge</span>
            </h2>

            <div className="mt-4 space-y-3.5 text-[15px] sm:text-[16px] text-[#475569] leading-[1.8] max-w-2xl">
              {Array.isArray(definition) ? (
                definition.map((para, i) => (
                  <p key={i}>
                    {para}
                  </p>
                ))
              ) : (
                <p>{definition}</p>
              )}
            </div>

            {/* Micro Pillars Highlight */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {['Challenges → Solutions', 'Ideas → Implementation', 'Institutions → Communities', 'Potential → Progress'].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full bg-[#FAF7F2] text-[12px] font-semibold text-[#17382E] border border-stone-200/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Visual: Pure PNG image with increased size */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <img
              src={patnaMapImg}
              alt="Bihar State Map featuring Buddha Smriti Park Patna"
              className="w-full max-w-[400px] sm:max-w-[460px] lg:max-w-[520px] xl:max-w-[560px] h-auto object-contain hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

        </div>

        {/* ── 6 Bridges Interactive Grid ── */}
        <div className="pt-12 sm:pt-16">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#E06222]">
              The Six Bridges
            </span>
            <h3 className="text-[24px] sm:text-[30px] font-serif font-bold text-[#111827] mt-1.5">
              Transforming Every Dimension of Bihar
            </h3>
            <p className="text-[13.5px] text-[#64748B] mt-2">
              Structured pathways connecting foundational challenges to sustainable development outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {bridges.map((bridge) => {
              const IconComp = iconMap[bridge.icon] || Lightbulb
              return (
                <div
                  key={bridge.id}
                  className="group relative bg-[#FAF7F2] hover:bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top indicator bar */}
                  <div
                    className="absolute top-0 inset-x-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: bridge.color }}
                  />

                  <div>
                    {/* Header Row: Number + Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center ${bridge.bgTint} group-hover:scale-105 transition-transform duration-200`}
                        style={{ color: bridge.color }}
                      >
                        <IconComp className="w-5 h-5 stroke-[2.2]" />
                      </div>

                      <span className="text-[12px] font-black tracking-widest text-[#94A3B8] group-hover:text-[#111827] transition-colors">
                        STEP {bridge.step}
                      </span>
                    </div>

                    {/* From → To Pill Pathway */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white group-hover:bg-[#FAF7F2] border border-stone-200 text-[11px] font-bold text-[#475569] mb-3">
                      <span>{bridge.from}</span>
                      <ArrowRight className="w-3 h-3 text-[#E06222]" />
                      <span style={{ color: bridge.color }}>{bridge.to}</span>
                    </div>

                    {/* Bridge Title */}
                    <h4 className="text-[17px] sm:text-[18px] font-bold text-[#111827] leading-snug tracking-tight">
                      {bridge.title}
                    </h4>

                    {/* Bridge Description */}
                    <p className="mt-2.5 text-[13px] text-[#475569] leading-[1.7]">
                      {bridge.description}
                    </p>
                  </div>

                  {/* Bottom Interactive CTA Link */}
                  {bridge.path && bridge.path.startsWith('#') ? (
                    <a
                      href={bridge.path}
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(bridge.path)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-bold text-[#64748B] group-hover:text-[#111827] transition-colors cursor-pointer"
                    >
                      <span className="font-semibold">{bridge.ctaLabel || 'Core Pathway'}</span>
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 group-hover:translate-x-1"
                        style={{ color: bridge.color, borderColor: `${bridge.color}60` }}
                      >
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
                      </span>
                    </a>
                  ) : (
                    <Link
                      to={bridge.path || '#'}
                      className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-bold text-[#64748B] group-hover:text-[#111827] transition-colors"
                    >
                      <span className="font-semibold">{bridge.ctaLabel || 'Core Pathway'}</span>
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 group-hover:translate-x-1"
                        style={{ color: bridge.color, borderColor: `${bridge.color}60` }}
                      >
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
                      </span>
                    </Link>
                  )}
                </div>
              )
            })}
          </div>

          {/* ── Concluding Statement Banner (Compact Sleek Showcase) ── */}
          <div className="mt-8 sm:mt-10 relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#17382E] via-[#0E241E] to-[#081511] text-white py-5 sm:py-6 lg:py-7 px-6 sm:px-10 lg:px-12 shadow-xl border border-white/10 group">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
              {/* Warm saffron ambient light */}
              <div
                className="absolute -top-20 left-1/4 w-[420px] h-[240px] rounded-full blur-3xl opacity-25"
                style={{
                  background: 'radial-gradient(circle, rgba(224, 98, 34, 0.4) 0%, transparent 70%)',
                }}
              />
              {/* Cyan / Ganga mist on bottom right */}
              <div
                className="absolute -bottom-20 right-0 w-[380px] h-[220px] rounded-full blur-3xl opacity-20"
                style={{
                  background: 'radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, transparent 70%)',
                }}
              />

              {/* Watermark quote mark */}
              <span className="absolute -top-4 left-6 sm:left-10 font-serif text-[90px] sm:text-[120px] text-white/[0.04] leading-none select-none pointer-events-none">
                “
              </span>

              {/* Bridge cables & river flow wave contours */}
              <svg
                className="absolute right-0 bottom-0 w-[440px] h-full opacity-[0.06] stroke-white"
                viewBox="0 0 520 220"
                fill="none"
              >
                <path d="M 0 190 Q 260 70 520 190" strokeWidth="2" />
                <path d="M 0 205 Q 260 100 520 205" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="380" y1="20" x2="380" y2="220" strokeWidth="2" />
                <line x1="380" y1="40" x2="200" y2="210" strokeWidth="1" />
                <line x1="380" y1="70" x2="260" y2="210" strokeWidth="1" />
                <line x1="380" y1="100" x2="320" y2="210" strokeWidth="1" />
                <line x1="380" y1="40" x2="500" y2="210" strokeWidth="1" />
                <line x1="380" y1="80" x2="500" y2="210" strokeWidth="1" />
              </svg>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
              {/* Compact Editorial Quote */}
              <blockquote aria-label={quote}>
                <p className="font-serif text-[18px] sm:text-[23px] lg:text-[26px] text-white leading-[1.28] tracking-[-0.01em] font-normal max-w-3xl">
                  &ldquo;Bihar Setu is where{' '}
                  <span className="italic text-[#F5A623] font-serif font-medium">connections begin</span>{' '}
                  and{' '}
                  <span className="text-white font-serif italic">collective progress</span>{' '}
                  becomes{' '}
                  <span className="text-[#38BDF8] italic font-serif font-medium">possible.&rdquo;</span>
                </p>
              </blockquote>

              {/* Strategic CTA Buttons */}
              <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#our-vision"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('our-vision')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-[#E06222] hover:bg-[#EA580C] text-white text-[12px] font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Explore The 4 Vision Pillars</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
                </a>

                <a
                  href="#our-mission"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('our-mission')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-[12px] font-semibold transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>View 7 Action Missions</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                </a>
              </div>

              {/* Bottom Row */}
              <div className="mt-4 pt-3.5 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between gap-2.5">
                {/* Brand Signature */}
                <div className="flex items-center gap-2">
                  <span className="w-5 h-[2px] bg-[#E06222] rounded-full" />
                  <span className="text-[10.5px] font-bold tracking-[0.2em] uppercase text-white/90">
                    Bihar Setu Foundation
                  </span>
                </div>

                {/* 3 Value Badges */}
                <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap justify-center text-[10.5px] text-white/75">
                  <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                    38 Districts
                  </span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                    9 Sectors
                  </span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                    1 Common Platform
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
