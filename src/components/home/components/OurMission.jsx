import {
  Users,
  Lightbulb,
  Settings2,
  Handshake,
  Sparkles,
  TrendingUp,
  Target,
  ArrowRight,
} from 'lucide-react'

import tourismImg from '../../../assets/sectors/tourism.jpg'
import educationImg from '../../../assets/sectors/education.jpg'
import agricultureImg from '../../../assets/sectors/agriculture.jpg'
import technologyImg from '../../../assets/sectors/technology.jpg'
import healthcareImg from '../../../assets/sectors/healthcare.jpg'
import aboutImg from '../../../assets/about_stupa.jpg'

// ─────────────────────────────────────────────
// Inline data — 7 mission cards
// ─────────────────────────────────────────────
const missionCards = [
  {
    id: 'connections',
    number: '01',
    icon: Users,
    title: 'Build Meaningful Connections',
    description:
      'Connect institutions, industries, professionals, experts, communities and emerging talent.',
    image: tourismImg,
    color: '#E06222',
    bgTint: 'bg-[#FDF0E6]',
  },
  {
    id: 'opportunities',
    number: '02',
    icon: Lightbulb,
    title: 'Identify Real Opportunities',
    description:
      'Understand sector-specific challenges and identify practical opportunities for growth and development.',
    image: educationImg,
    color: '#2563EB',
    bgTint: 'bg-[#EBF3FE]',
  },
  {
    id: 'initiatives',
    number: '03',
    icon: Settings2,
    title: 'Develop Implementable Initiatives',
    description:
      'Create structured programmes, campaigns, summits and digital platforms with clear objectives.',
    image: technologyImg,
    color: '#16A34A',
    bgTint: 'bg-[#EAF7EE]',
  },
  {
    id: 'collaboration',
    number: '04',
    icon: Handshake,
    title: 'Encourage Collaboration',
    description:
      'Promote meaningful collaboration between public institutions, private organisations, professionals and communities.',
    image: agricultureImg,
    color: '#7C3AED',
    bgTint: 'bg-[#F4F0FD]',
  },
  {
    id: 'local-potential',
    number: '05',
    icon: Sparkles,
    title: 'Support Local Potential',
    description:
      "Provide visibility and opportunities to Bihar's districts, businesses, professionals, entrepreneurs and communities.",
    image: healthcareImg,
    color: '#D97706',
    bgTint: 'bg-[#FEF3E7]',
  },
  {
    id: 'entrepreneurship',
    number: '06',
    icon: TrendingUp,
    title: 'Promote Skills and Entrepreneurship',
    description:
      'Encourage professional development, employment, innovation, business growth and entrepreneurship.',
    image: aboutImg,
    color: '#0284C7',
    bgTint: 'bg-[#E0F2FE]',
  },
  {
    id: 'impact',
    number: '07',
    icon: Target,
    title: 'Create Measurable Impact',
    description:
      'Focus on outcomes that create long-term social, professional and economic value for Bihar.',
    image: tourismImg,
    color: '#DC2626',
    bgTint: 'bg-[#FEE2E2]',
  },
]

// ─────────────────────────────────────────────
// Single Mission Card
// ─────────────────────────────────────────────
function MissionCard({ card }) {
  const IconComp = card.icon
  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-stone-200/60 overflow-hidden hover:shadow-xl hover:shadow-black/8 hover:-translate-y-1 transition-all duration-300 cursor-default">

      {/* ── Top: Image with overlaid number + icon ── */}
      <div className="relative w-full h-[110px] overflow-hidden shrink-0">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
        />
        {/* dark gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

        {/* Number — top-left */}
        <span
          className="absolute top-2.5 left-3 text-[11px] font-extrabold tracking-widest text-white"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
        >
          {card.number}
        </span>

        {/* Icon circle — top-right */}
        <div
          className={`absolute top-2 right-2.5 w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${card.bgTint} shadow-sm group-hover:scale-110 transition-transform duration-200`}
          style={{ color: card.color }}
        >
          <IconComp className="w-3.5 h-3.5 stroke-[2.3]" />
        </div>

        {/* Colored accent line at bottom of image */}
        <div
          className="absolute bottom-0 inset-x-0 h-[3px]"
          style={{ backgroundColor: card.color }}
        />
      </div>

      {/* ── Bottom: Content ── */}
      <div className="flex flex-col flex-1 px-3.5 pt-3 pb-3.5">
        <h3 className="text-[12.5px] sm:text-[13px] font-bold text-[#111827] leading-snug tracking-tight">
          {card.title}
        </h3>

        <p className="mt-1.5 text-[10.5px] sm:text-[11px] text-[#64748B] leading-[1.65] line-clamp-3 flex-1">
          {card.description}
        </p>

        <div className="mt-2.5 flex items-center">
          <span
            className="w-5 h-5 rounded-full flex items-center justify-center border transition-all group-hover:translate-x-0.5"
            style={{ color: card.color, borderColor: `${card.color}50` }}
          >
            <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
          </span>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Main Section
// ─────────────────────────────────────────────
export default function OurMission() {
  const row1 = missionCards.slice(0, 4)
  const row2 = missionCards.slice(4)

  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-hidden border-t border-b border-stone-200/70">
      {/* ── Background Ambience ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Warm saffron ambient wash top-left */}
        <div
          className="absolute -top-24 -left-20 w-[560px] h-[420px] rounded-full blur-3xl opacity-40"
          style={{
            background:
              'radial-gradient(circle, rgba(249,115,22,0.10) 0%, rgba(245,158,11,0.04) 50%, transparent 70%)',
          }}
        />
        {/* Deep forest wash bottom-right */}
        <div
          className="absolute -bottom-20 right-0 w-[480px] h-[400px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              'radial-gradient(circle, rgba(23,56,46,0.08) 0%, transparent 65%)',
          }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#17382E 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* ── TOP BANNER: Headline (left) + Hero Image (right) ── */}
      <div className="relative z-10 flex flex-col lg:flex-row items-stretch">

        {/* LEFT: Eyebrow + Headline + Description */}
        <div className="flex-1 flex flex-col justify-center px-10 sm:px-14 lg:px-16 xl:px-20 py-4 lg:py-5">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[2px] bg-[#E06222] rounded-full shrink-0" />
            <span className="text-[9.5px] font-extrabold tracking-[0.22em] text-[#8C5E35] uppercase">
              Our Mission
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[20px] sm:text-[24px] lg:text-[27px] xl:text-[30px] font-bold text-[#111827] leading-[1.15] tracking-[-0.02em]">
            Turning Connections
            <br />
            <span className="text-[#E06222]">Into Meaningful Action</span>
          </h2>

          {/* Description */}
          <p className="mt-1.5 text-[11px] sm:text-[11.5px] text-[#475569] leading-[1.6] max-w-sm lg:max-w-md">
            We bring together stakeholders, create opportunities, address key
            challenges and support initiatives that drive long-term, inclusive
            and impact-oriented development across Bihar.
          </p>
        </div>

        {/* RIGHT: Hero image with editorial tag overlay */}
        <div className="relative w-full lg:w-[46%] xl:w-[50%] shrink-0 min-h-[100px] lg:min-h-0 overflow-hidden" style={{ maxHeight: '200px' }}>
          <img
            src={tourismImg}
            alt="Bihar heritage temple — our mission visual"
            className="w-full h-full object-cover object-center"
          />
          {/* Curved ivory fade on left edge (desktop) */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-32 xl:w-44 pointer-events-none">
            <svg
              viewBox="0 0 120 400"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M120,0 C60,120 110,280 40,400 L0,400 L0,0 Z"
                fill="#FAF7F2"
                fillOpacity="0.45"
              />
              <path
                d="M90,0 C20,130 100,270 20,400 L0,400 L0,0 Z"
                fill="#FAF7F2"
              />
            </svg>
          </div>
          {/* Mobile bottom fade */}
          <div className="lg:hidden absolute inset-x-0 bottom-0 h-10 pointer-events-none">
            <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,30 C120,10 280,40 400,20 L400,40 L0,40 Z" fill="#FAF7F2" />
            </svg>
          </div>

          {/* Editorial calligraphy tag — top-right corner */}
          <div className="absolute top-5 right-5 text-right pointer-events-none select-none">
            <p
              className="font-serif italic text-[13px] sm:text-[14px] text-white/90 leading-[1.55] drop-shadow-sm"
              style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}
            >
              Explore
              <br />
              Experience
              <br />
              Grow
              <br />
              Bihar
            </p>
            {/* decorative curve */}
            <svg
              viewBox="0 0 80 12"
              className="w-16 h-3 mt-1 ml-auto opacity-70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10 C20 2, 60 2, 78 10"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ── CARDS GRID ── */}
      <div className="relative z-10 border-t border-stone-200/80 bg-white/40 backdrop-blur-xs px-5 sm:px-8 lg:px-10 xl:px-14 py-6 sm:py-8">
        {/* Row 1 — 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {row1.map((card) => (
            <MissionCard key={card.id} card={card} />
          ))}
        </div>

        {/* Row 2 — 3 cards (centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
          {row2.map((card) => (
            <MissionCard key={card.id} card={card} />
          ))}
          {/* Decorative quote placeholder card on the 4th slot */}
          <div className="hidden xl:flex flex-col justify-center items-start p-5 rounded-2xl bg-gradient-to-b from-white/90 to-[#FAF7F2]/80 border border-slate-200/80 relative overflow-hidden shadow-xs">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FAF2E8] via-transparent to-transparent pointer-events-none" />
            <span className="text-4xl font-serif text-[#17382E]/40 leading-none select-none mb-1">
              &ldquo;
            </span>
            <p className="text-sm font-serif italic text-[#1F2937] leading-[1.4] relative z-10">
              Building Bihar&apos;s
              <br />
              Future Together
            </p>
            <span className="w-8 h-[2.5px] bg-[#E06222] rounded-full mt-4 relative z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
