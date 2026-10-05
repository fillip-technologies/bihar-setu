import { Link } from 'react-router-dom'
import {
  Handshake,
  Award,
  Sparkles,
  Compass,
  ArrowUpRight,
  ArrowRight,
  Shield,
  Target,
} from 'lucide-react'
import heritageSkyline from '../../../assets/about/bg-images.png'

const iconMap = {
  Handshake,
  Award,
  Sparkles,
  Compass,
}


export default function AboutVision({ data }) {
  const { eyebrow, headline, tagline, description1, description2, pillars } = data

  return (
    <section id="our-vision" className="relative w-full bg-[#FAF7F2] border-b border-stone-200/70 overflow-hidden py-14 sm:py-18">
      {/* ── Background Aesthetics ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Deep emerald ambient glow */}
        <div
          className="absolute -top-24 right-1/4 w-[650px] h-[550px] rounded-full blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(23, 56, 46, 0.15) 0%, transparent 65%)',
          }}
        />
        {/* Saffron accent bottom-left */}
        <div
          className="absolute -bottom-28 left-0 w-[550px] h-[500px] rounded-full blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(224, 98, 34, 0.12) 0%, transparent 65%)',
          }}
        />
        {/* Sacred geometry / Mandala watermarks */}
        <div className="absolute top-10 right-10 w-96 h-96 opacity-[0.035] pointer-events-none">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#17382E]">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1.2" />
            <polygon points="100,20 180,140 20,140" stroke="currentColor" strokeWidth="1" />
            <polygon points="100,180 180,60 20,60" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#E06222] rounded-full shrink-0" />
            <span className="text-[10.5px] font-extrabold tracking-[0.24em] text-[#8C5E35] uppercase">
              {eyebrow}
            </span>
            <span className="w-6 h-[2px] bg-[#E06222] rounded-full shrink-0" />
          </div>

          <h2 className="text-[32px] sm:text-[44px] lg:text-[50px] font-serif font-bold text-[#111827] leading-[1.12] tracking-[-0.02em]">
            {headline}
          </h2>

          <p className="mt-3 text-[14px] sm:text-[15px] font-medium text-[#E06222]">
            {tagline}
          </p>
        </div>

        {/* ── Core Vision Narrative Cards (Dual Column) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Card 1: Trusted Multi-Sector Platform */}
          <div className="relative bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#17382E]/10 text-[#17382E] flex items-center justify-center mb-5">
                <Shield className="w-6 h-6 stroke-[2.2]" />
              </div>

              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8C5E35]">
                Core Foundation
              </span>
              <h3 className="text-[20px] sm:text-[22px] font-serif font-bold text-[#111827] mt-1 mb-3">
                A Trusted Bridge for Bihar
              </h3>

              <p className="text-[15px] sm:text-[16px] text-[#374151] leading-[1.8] font-medium">
                &ldquo;{description1}&rdquo;
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-stone-200/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#17382E]" />
                <span className="text-[12px] font-semibold text-[#17382E]">
                  Inclusive & Sustainable Development
                </span>
              </div>
              <a
                href="#our-mission"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('our-mission')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-[#17382E] hover:text-[#E06222] transition-colors cursor-pointer"
              >
                <span>View Mission Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Collective Progress & Future Envisioned */}
          <div className="relative bg-gradient-to-br from-[#17382E] to-[#0E241E] text-white rounded-3xl p-8 sm:p-10 shadow-xl overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-white/10 to-transparent pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#E06222] flex items-center justify-center mb-5 border border-white/10">
                <Target className="w-6 h-6 stroke-[2.2]" />
              </div>

              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E06222]">
                The Horizon We Envision
              </span>
              <h3 className="text-[20px] sm:text-[22px] font-serif font-bold text-white mt-1 mb-3">
                Empowerment Through Collaboration
              </h3>

              <p className="text-[15px] sm:text-[16px] text-white/90 leading-[1.8] font-medium">
                &ldquo;{description2}&rdquo;
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/15">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E06222]" />
                <span className="text-[12px] font-semibold text-white/80">
                  Youth · Opportunities · Long-term Impact
                </span>
              </div>
              <Link
                to="/#focus-areas"
                className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-[#F5A623] hover:text-white transition-colors"
              >
                <span>Explore Sectors</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── 4 Strategic Vision Pillars Container ── */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4 relative z-10">
            <div>
              <h3 className="text-[20px] sm:text-[24px] font-serif font-bold text-[#111827]">
                The Four Pillars of Our Vision
              </h3>
              <p className="text-[13px] text-[#64748B] mt-1">
                How Bihar Setu structures long-term transformation across sectors
              </p>
            </div>
            <span className="text-[12px] font-bold text-[#17382E] bg-white border border-stone-200 px-3.5 py-1.5 rounded-full">
              Statewide Horizon
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {pillars.map((pillar, idx) => {
              const IconComp = iconMap[pillar.icon] || Sparkles
              return (
                <div
                  key={pillar.id}
                  className="group relative bg-white rounded-2xl border border-stone-200/90 p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Heritage Landmark Silhouette inside card background (Soft watermark anchored at bottom) */}
                  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden rounded-2xl">
                    {/* Top protective white canvas */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/60 pointer-events-none z-0" />

                    {/* Bottom-anchored landmark skyline watermark */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-32 sm:h-36 transition-opacity duration-300 opacity-20 group-hover:opacity-30"
                      style={{
                        backgroundImage: `url(${heritageSkyline})`,
                        backgroundSize: '400% auto',
                        backgroundPosition: `${(idx / 3) * 100}% bottom`,
                        backgroundRepeat: 'no-repeat',
                      }}
                    />

                    {/* Gentle gradient fade at the top of the skyline to keep text 100% clear */}
                    <div className="absolute inset-x-0 bottom-0 h-32 sm:h-36 bg-gradient-to-t from-transparent via-white/40 to-white pointer-events-none" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs"
                        style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                      >
                        <IconComp className="w-5 h-5 stroke-[2.2]" />
                      </span>
                      <span className="text-[11px] font-black text-stone-400 group-hover:text-[#17382E] transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    <h4 className="text-[15.5px] font-bold text-[#111827] leading-snug group-hover:text-[#17382E] transition-colors">
                      {pillar.title}
                    </h4>

                    {/* Highly legible, crisp contrast paragraph */}
                    <p className="mt-2.5 text-[13px] sm:text-[13.5px] font-medium text-[#334155] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Interactive Pillar Navigation Target */}
                  {pillar.path && pillar.path.startsWith('#') ? (
                    <a
                      href={pillar.path}
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(pillar.path)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="mt-6 pt-3.5 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-[#8C5E35] group-hover:text-[#17382E] transition-colors relative z-10 cursor-pointer"
                    >
                      <span>{pillar.actionLabel || 'Vision Goal'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      to={pillar.path || '#'}
                      className="mt-6 pt-3.5 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-[#8C5E35] group-hover:text-[#17382E] transition-colors relative z-10"
                    >
                      <span>{pillar.actionLabel || 'Vision Goal'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              )
            })}
          </div>


        </div>

      </div>
    </section>
  )
}
