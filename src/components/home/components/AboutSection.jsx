import { Link } from 'react-router-dom'
import {
  Users,
  TrendingUp,
  MapPin,
  ArrowRight,
  LayoutGrid,
  Target,
  Infinity as InfinityIcon,
} from 'lucide-react'
import { aboutData } from '../../../data/aboutData'
import stupaImage from '../../../assets/about_stupa.jpg'

const highlightIconMap = {
  Users: Users,
  TrendingUp: TrendingUp,
  MapPin: MapPin,
}

export default function AboutSection() {
  const { about, impact } = aboutData

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* ── Part 1: Top 3-column About Banner ── */}
      <div className="flex flex-col lg:flex-row items-stretch border-b border-slate-100">

        {/* LEFT: Stupa image with arch-rounded top-right, padded inside white bg */}
        <div className="relative w-full lg:w-[36%] xl:w-[38%] shrink-0 bg-white px-6 pt-6 pb-0 lg:px-8 lg:pt-8 lg:pb-0 flex items-end">
          {/* Topographic ripple arcs watermark */}
          <div className="absolute top-0 left-0 w-48 h-48 pointer-events-none opacity-40 select-none">
            <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="15" cy="15" r="50"  stroke="#C67D33" strokeWidth="0.7" strokeDasharray="3 3" />
              <circle cx="15" cy="15" r="85"  stroke="#C67D33" strokeWidth="0.7" />
              <circle cx="15" cy="15" r="120" stroke="#C67D33" strokeWidth="0.7" strokeDasharray="4 4" />
              <circle cx="15" cy="15" r="160" stroke="#C67D33" strokeWidth="0.7" />
              <circle cx="15" cy="15" r="200" stroke="#C67D33" strokeWidth="0.7" strokeDasharray="3 4" />
            </svg>
          </div>

          {/* Image with arch clip — rounded on top-right */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              borderRadius: '120px 12px 0 0',
              minHeight: '280px',
              maxHeight: '360px',
            }}
          >
            <img
              src={stupaImage}
              alt="Ancient Great Stupa with Carved Torana Gateway"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: '280px', maxHeight: '360px' }}
            />
          </div>
        </div>

        {/* CENTER: Eyebrow + Headline + Description + CTA */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-10 xl:px-14 py-10 lg:py-12 bg-white">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-7 h-[2px] bg-[#17382E] rounded-full shrink-0" />
            <span className="text-[10.5px] font-extrabold tracking-[0.22em] text-[#17382E] uppercase">
              {about.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[26px] sm:text-[30px] lg:text-[34px] xl:text-[38px] font-bold text-[#111827] leading-[1.18] tracking-[-0.02em]">
            <span>{about.title.line1}</span>
            <br />
            <span>{about.title.line2}</span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-[13px] sm:text-[13.5px] lg:text-[14px] text-[#475569] leading-[1.75] max-w-md">
            {about.description}
          </p>

          {/* CTA Button */}
          <div className="mt-7">
            <Link
              to={about.cta.path}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#17382E] hover:bg-[#112B23] text-white font-semibold text-[12.5px] rounded-full shadow-sm shadow-[#17382E]/20 transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <span>{about.cta.label}</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* RIGHT: 3 highlight pillars with left border */}
        <div className="w-full lg:w-[26%] xl:w-[24%] shrink-0 px-8 py-10 lg:pl-8 lg:pr-8 lg:py-12 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-center gap-7 bg-white">
          {about.highlights.map((item) => {
            const IconComp = highlightIconMap[item.icon] || Users
            return (
              <div key={item.id} className="flex items-start gap-3.5 group">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${item.bgTint}`}
                  style={{ color: item.color }}
                >
                  <IconComp className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-[13.5px] font-bold text-[#111827] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#64748B] leading-snug mt-1 max-w-[190px]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Part 2: Bottom Impact Bar ── */}
      <div className="relative overflow-hidden">
        {/* Faint bridge/spire watermark — far right */}
        <div className="absolute right-0 bottom-0 w-72 h-28 opacity-[0.13] pointer-events-none select-none">
          <svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#B45309]">
            <path d="M270,135 L270,75 L276,75 L276,55 L282,55 L282,35 L286,35 L286,18 L287,12 L288,18 L288,35 L292,35 L292,55 L298,55 L298,75 L304,75 L304,135 Z"
              stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08" />
            <line x1="276" y1="75" x2="298" y2="75" stroke="currentColor" strokeWidth="0.8" />
            <line x1="282" y1="55" x2="292" y2="55" stroke="currentColor" strokeWidth="0.8" />
            <line x1="240" y1="90" x2="240" y2="135" stroke="currentColor" strokeWidth="2" />
            <path d="M220,135 L240,90 L260,135" stroke="currentColor" strokeWidth="1.2" />
            <line x1="180" y1="125" x2="350" y2="125" stroke="currentColor" strokeWidth="1.5" />
            <line x1="240" y1="95" x2="200" y2="125" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" />
            <line x1="240" y1="95" x2="280" y2="125" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" />
          </svg>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0 px-6 sm:px-8 lg:px-10 xl:px-14 py-8 lg:py-10 relative z-10">
          {/* Left: OUR IMPACT title */}
          <div className="shrink-0 lg:w-[26%] xl:w-[28%] lg:pr-10">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-6 h-[2px] bg-[#17382E] rounded-full" />
              <span className="text-[10.5px] font-extrabold tracking-[0.22em] text-[#17382E] uppercase">
                {impact.eyebrow}
              </span>
            </div>
            <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] xl:text-[32px] font-bold text-[#111827] leading-[1.2] tracking-[-0.015em]">
              <span>{impact.title.line1}</span>
              <br />
              <span>{impact.title.line2}</span>
            </h2>
          </div>

          {/* Right: 4 stats with vertical dividers */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200 gap-6 lg:gap-0">
            {/* Stat 1 */}
            <div className="lg:px-8">
              <div className="flex items-center gap-2 mb-1">
                <LayoutGrid className="w-5 h-5 text-[#E06222] shrink-0 stroke-[2.2]" />
                <span className="text-[28px] sm:text-[32px] font-bold text-[#111827] tracking-tight leading-none">9+</span>
              </div>
              <div className="text-[13px] font-bold text-[#111827]">Focus Areas</div>
              <div className="text-[11px] text-[#64748B] mt-0.5 leading-snug">Key sectors for inclusive growth</div>
            </div>

            {/* Stat 2 */}
            <div className="lg:px-8">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-5 h-5 text-[#E06222] shrink-0 stroke-[2.2]" />
                <span className="text-[28px] sm:text-[32px] font-bold text-[#111827] tracking-tight leading-none">100+</span>
              </div>
              <div className="text-[13px] font-bold text-[#111827]">Stakeholders</div>
              <div className="text-[11px] text-[#64748B] mt-0.5 leading-snug">Institutions, industries and communities</div>
            </div>

            {/* Stat 3 */}
            <div className="lg:px-8">
              <div className="flex items-center gap-2 mb-1">
                <Target className="w-5 h-5 text-[#E06222] shrink-0 stroke-[2.2]" />
                <span className="text-[28px] sm:text-[32px] font-bold text-[#111827] tracking-tight leading-none">1</span>
              </div>
              <div className="text-[13px] font-bold text-[#111827]">Shared Purpose</div>
              <div className="text-[11px] text-[#64748B] mt-0.5 leading-snug">Sustainable development for all</div>
            </div>

            {/* Stat 4 */}
            <div className="lg:px-8">
              <div className="flex items-center gap-2 mb-1">
                <InfinityIcon className="w-6 h-6 text-[#E06222] shrink-0 stroke-[2.2]" />
                <span className="text-[18px] sm:text-[20px] font-bold text-[#111827] tracking-tight leading-none">Opportunities</span>
              </div>
              <div className="text-[11px] text-[#64748B] mt-0.5 leading-snug">For a stronger<br />and brighter Bihar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
