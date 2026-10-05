import { Link } from 'react-router-dom'
import {
  Users,
  Lightbulb,
  Settings2,
  Handshake,
  Sparkles,
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

const iconMap = {
  Users,
  Lightbulb,
  Settings2,
  Handshake,
  Sparkles,
  TrendingUp,
  Target,
}

export default function AboutMission({ data }) {
  const { eyebrow, headline, subtitle, items } = data

  const row1 = items.slice(0, 4)
  const row2 = items.slice(4)

  return (
    <section id="our-mission" className="relative w-full bg-white border-b border-stone-200/70 overflow-hidden py-16 sm:py-24">
      {/* ── Background Subtle Aesthetics ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute -top-24 left-1/3 w-[600px] h-[500px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(224, 98, 34, 0.1) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute bottom-0 right-10 w-[500px] h-[400px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(23, 56, 46, 0.1) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(#17382E 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-stone-200/80">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-6 h-[2px] bg-[#E06222] rounded-full shrink-0" />
              <span className="text-[10.5px] font-extrabold tracking-[0.22em] text-[#8C5E35] uppercase">
                {eyebrow}
              </span>
            </div>

            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-serif font-bold text-[#111827] leading-[1.14] tracking-[-0.02em]">
              {headline.replace('Meaningful Action', '')}
              <span className="text-[#E06222] italic font-serif">Meaningful Action</span>
            </h2>

            <p className="mt-3 text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-stone-200 text-[12px] font-bold text-[#17382E]">
              <CheckCircle className="w-3.5 h-3.5 text-[#E06222]" />
              <span>7 Action Pillars</span>
            </div>
          </div>
        </div>

        {/* ── Mission Cards: Row 1 (4 Cards) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-5 sm:gap-y-6">
          {row1.map((item) => {
            const IconComp = iconMap[item.icon] || Target
            return (
              <div
                key={item.id}
                className="group relative bg-[#FAF7F2] hover:bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image Top Thumbnail */}
                <div className="relative w-full h-[140px] overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                  {/* Number Badge */}
                  <span
                    className="absolute top-3 left-3 text-[11px] font-black tracking-widest text-white px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-xs border border-white/20"
                  >
                    MISSION {item.number}
                  </span>

                  {/* Icon Circle */}
                  <div
                    className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-md text-[#111827] group-hover:scale-110 transition-transform"
                    style={{ color: item.color }}
                  >
                    <IconComp className="w-4 h-4 stroke-[2.3]" />
                  </div>

                  {/* Tag Pill */}
                  <span className="absolute bottom-2.5 left-3 text-[10px] font-extrabold uppercase tracking-wider text-white/90">
                    {item.tag}
                  </span>
                </div>

                {/* Accent line */}
                <div className="h-[2.5px] w-full" style={{ backgroundColor: item.color }} />

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[15.5px] font-bold text-[#111827] leading-snug group-hover:text-[#17382E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] text-[#475569] leading-[1.65]">
                      {item.description}
                    </p>
                  </div>

                  {item.path && item.path.startsWith('#') ? (
                    <a
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(item.path)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-bold text-[#64748B] group-hover:text-[#111827] transition-colors cursor-pointer"
                    >
                      <span>{item.ctaText || 'Learn More'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E06222] group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      to={item.path || '#'}
                      className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-bold text-[#64748B] group-hover:text-[#111827] transition-colors"
                    >
                      <span>{item.ctaText || 'Learn More'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E06222] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Mission Cards: Row 2 (3 Cards + 1 Editorial Showcase Card) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {row2.map((item) => {
            const IconComp = iconMap[item.icon] || Target
            return (
              <div
                key={item.id}
                className="group relative bg-[#FAF7F2] hover:bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image Top Thumbnail */}
                <div className="relative w-full h-[140px] overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                  {/* Number Badge */}
                  <span
                    className="absolute top-3 left-3 text-[11px] font-black tracking-widest text-white px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-xs border border-white/20"
                  >
                    MISSION {item.number}
                  </span>

                  {/* Icon Circle */}
                  <div
                    className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-md text-[#111827] group-hover:scale-110 transition-transform"
                    style={{ color: item.color }}
                  >
                    <IconComp className="w-4 h-4 stroke-[2.3]" />
                  </div>

                  {/* Tag Pill */}
                  <span className="absolute bottom-2.5 left-3 text-[10px] font-extrabold uppercase tracking-wider text-white/90">
                    {item.tag}
                  </span>
                </div>

                {/* Accent line */}
                <div className="h-[2.5px] w-full" style={{ backgroundColor: item.color }} />

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[15.5px] font-bold text-[#111827] leading-snug group-hover:text-[#17382E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] text-[#475569] leading-[1.65]">
                      {item.description}
                    </p>
                  </div>

                  {item.path && item.path.startsWith('#') ? (
                    <a
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(item.path)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-bold text-[#64748B] group-hover:text-[#111827] transition-colors cursor-pointer"
                    >
                      <span>{item.ctaText || 'Learn More'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E06222] group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      to={item.path || '#'}
                      className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-bold text-[#64748B] group-hover:text-[#111827] transition-colors"
                    >
                      <span>{item.ctaText || 'Learn More'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E06222] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            )
          })}

          {/* 4th Slot: Editorial Mission Showcase Card */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#17382E] via-[#112B23] to-[#0A1813] text-white p-7 flex flex-col justify-between shadow-md border border-[#17382E]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />

            <div>
              <span className="px-2.5 py-1 rounded-full bg-[#E06222] text-[10px] font-bold tracking-wider uppercase text-white inline-block mb-3">
                Measurable Value
              </span>
              <p className="text-[17px] font-serif italic text-white/95 leading-snug">
                &ldquo;Meaningful progress requires the right people, resources, knowledge and opportunities to be connected through a common platform.&rdquo;
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 flex flex-col gap-3">
              <div>
                <p className="text-[12px] font-bold text-white tracking-wide">
                  Bihar Setu Platform
                </p>
                <p className="text-[11px] text-white/70 mt-0.5">
                  38 Districts · 9 Sectors · 1 Mission
                </p>
              </div>

              <a
                href="#join-us"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('join-us')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#E06222] hover:bg-[#EA580C] text-white text-[12px] font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Get Involved With Us</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
