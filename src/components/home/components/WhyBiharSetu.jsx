import {
  Lightbulb,
  Settings,
  Users,
  BarChart3,
  Leaf,
  TrendingUp,
} from 'lucide-react'
import bridgeImage from '../../../assets/why_bridge.jpg'

const bridgeCards = [
  {
    id: 'ideas',
    title: ['Ideas to', 'Implementation'],
    description:
      'Connecting innovative ideas with the right people, institutions and resources to implement them.',
    icon: Lightbulb,
    color: '#E06222',
    bgTint: 'bg-[#FDF0E6]',
  },
  {
    id: 'challenges',
    title: ['Challenges', 'to Solutions'],
    description:
      'Identifying real challenges and bringing relevant stakeholders together to develop practical solutions.',
    icon: Settings,
    color: '#2563EB',
    bgTint: 'bg-[#EBF3FE]',
  },
  {
    id: 'institutions',
    title: ['Institutions', 'to Communities'],
    description:
      'Creating stronger connections between organisations, professionals and the communities they serve.',
    icon: Users,
    color: '#16A34A',
    bgTint: 'bg-[#EAF7EE]',
  },
  {
    id: 'skills',
    title: ['Skills to', 'Opportunities'],
    description:
      'Connecting talent, experience and knowledge with employment, entrepreneurship and development opportunities.',
    icon: BarChart3,
    color: '#D97706',
    bgTint: 'bg-[#FEF3E7]',
  },
  {
    id: 'tradition',
    title: ['Tradition', 'to Technology'],
    description:
      "Preserving Bihar's cultural identity while encouraging innovation, technology and modern development.",
    icon: Leaf,
    color: '#059669',
    bgTint: 'bg-[#E8F8EE]',
  },
  {
    id: 'potential',
    title: ['Potential', 'to Progress'],
    description:
      "Transforming Bihar's natural, cultural, human and economic potential into measurable progress.",
    icon: TrendingUp,
    color: '#0284C7',
    bgTint: 'bg-[#E0F2FE]',
  },
]

export default function WhyBiharSetu() {
  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-hidden border-t border-b border-stone-200/70">
      {/* ── Background Ambience & Symbolic Bridge Motifs ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Soft golden sunset ambient wash blending from the bridge photo */}
        <div
          className="absolute -top-20 left-[22%] w-[640px] h-[480px] rounded-full blur-3xl opacity-50"
          style={{
            background:
              'radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, rgba(245, 158, 11, 0.05) 45%, transparent 70%)',
          }}
        />

        {/* Deep forest subtle ambient wash on bottom right */}
        <div
          className="absolute -bottom-24 right-0 w-[520px] h-[460px] rounded-full blur-3xl opacity-35"
          style={{
            background:
              'radial-gradient(circle, rgba(23, 56, 46, 0.09) 0%, transparent 65%)',
          }}
        />

        {/* Cable-stayed bridge suspension curves watermark */}
        <svg
          className="absolute right-0 top-0 w-[780px] h-full opacity-[0.065] stroke-[#17382E]"
          viewBox="0 0 850 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main pylon tower */}
          <line x1="620" y1="10" x2="620" y2="400" strokeWidth="2.5" />
          <line x1="600" y1="180" x2="640" y2="180" strokeWidth="2" />

          {/* Suspension cables radiating outward */}
          <line x1="620" y1="50" x2="160" y2="380" strokeWidth="1.2" />
          <line x1="620" y1="80" x2="230" y2="380" strokeWidth="1.2" />
          <line x1="620" y1="110" x2="300" y2="380" strokeWidth="1.2" />
          <line x1="620" y1="140" x2="370" y2="380" strokeWidth="1.2" />
          <line x1="620" y1="170" x2="440" y2="380" strokeWidth="1.2" />
          <line x1="620" y1="200" x2="510" y2="380" strokeWidth="1.2" />
          <line x1="620" y1="230" x2="570" y2="380" strokeWidth="1.2" />

          {/* Backstay cables to right */}
          <line x1="620" y1="50" x2="840" y2="270" strokeWidth="1.2" />
          <line x1="620" y1="90" x2="840" y2="315" strokeWidth="1.2" />
          <line x1="620" y1="130" x2="840" y2="360" strokeWidth="1.2" />

          {/* River flow wave contours */}
          <path
            d="M 50 370 C 180 350, 320 390, 460 370 C 600 350, 720 380, 850 365"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path
            d="M 80 390 C 220 375, 360 405, 500 385 C 640 370, 750 395, 850 385"
            strokeWidth="1.5"
          />
        </svg>

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(#17382E 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* ── Top Banner: edge-bleed bridge photo + headline + editorial quote ── */}
      <div className="relative z-10 flex flex-col lg:flex-row items-stretch min-h-[220px] lg:min-h-[260px]">

        {/* LEFT: Bridge photo — full bleed to left viewport edge */}
        <div className="relative w-full lg:w-[36%] xl:w-[38%] shrink-0 min-h-[220px] lg:min-h-0 overflow-hidden">
          <img
            src={bridgeImage}
            alt="Cable-stayed bridge over Ganga river at golden hour"
            className="w-full h-full object-cover object-center"
          />
          {/* Smooth curved fade-to-ivory on right edge (desktop) */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-32 xl:w-44 pointer-events-none">
            <svg
              viewBox="0 0 120 400"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M0,0 C60,120 10,280 80,400 L120,400 L120,0 Z"
                fill="#FAF7F2"
                fillOpacity="0.4"
              />
              <path
                d="M30,0 C100,130 20,270 100,400 L120,400 L120,0 Z"
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
        </div>

        {/* CENTER: Eyebrow + Headline + Description */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-10 xl:px-14 py-8 lg:py-0">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-7 h-[2px] bg-[#E06222] rounded-full shrink-0" />
            <span className="text-[10.5px] font-extrabold tracking-[0.22em] text-[#8C5E35] uppercase">
              WHY BIHAR SETU
            </span>
          </div>

          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] xl:text-[42px] font-bold text-[#111827] leading-[1.15] tracking-[-0.02em]">
            Every Gap Needs a{' '}
            <span className="text-[#E06222]">Bridge</span>
          </h2>

          <p className="mt-3.5 text-[13px] sm:text-[13.5px] lg:text-[14px] text-[#475569] leading-[1.75] max-w-xl">
            The word Setu means a bridge. Bihar Setu represents a bridge between
            challenges and solutions, ideas and implementation, institutions and
            communities, and Bihar&apos;s potential and its future.
          </p>
        </div>

        {/* RIGHT: Editorial quotation card */}
        <div className="shrink-0 hidden lg:flex items-center px-8 xl:px-12 border-l border-stone-200/70">
          <div className="relative p-5 xl:p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/80 shadow-xs flex flex-col items-start group hover:bg-white/90 hover:shadow transition-all duration-300">
            {/* Soft decorative quotation mark watermark */}
            <span className="absolute -top-1 right-2 text-stone-300/60 font-serif text-5xl select-none pointer-events-none leading-none">
              “
            </span>
            <p className="font-serif italic text-[17px] xl:text-[20px] text-[#141A24] leading-[1.3] tracking-tight relative z-10">
              From
              <br />
              Challenges
              <br />
              to Opportunities
            </p>
            <div className="flex items-center gap-1.5 mt-3 relative z-10">
              <span className="w-6 h-[2.5px] bg-[#E06222] rounded-full" />
              <span className="w-2 h-[2.5px] bg-[#17382E] rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Strip: 6 flat columns with refined card interaction ── */}
      <div className="relative z-10 border-t border-stone-200/80 bg-white/50 backdrop-blur-xs">
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 divide-x divide-stone-200/70">
          {bridgeCards.map((card) => {
            const IconComponent = card.icon
            return (
              <div
                key={card.id}
                className="group px-5 sm:px-6 py-6 xl:py-7 flex flex-col gap-2.5 hover:bg-white/90 hover:shadow-xs transition-all duration-200 cursor-default relative overflow-hidden"
              >
                {/* Subtle top indicator hover line */}
                <div
                  className="absolute top-0 inset-x-0 h-[2.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ backgroundColor: card.color }}
                />

                {/* Icon circle */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200 ${card.bgTint}`}
                  style={{ color: card.color }}
                >
                  <IconComponent className="w-[18px] h-[18px] stroke-[2.2]" />
                </div>

                {/* Two-line bold title */}
                <h3 className="text-[12.5px] sm:text-[13px] font-bold text-[#111827] leading-snug">
                  {card.title[0]}
                  <br />
                  <span style={{ color: card.color }}>{card.title[1]}</span>
                </h3>

                {/* Description */}
                <p className="text-[11px] sm:text-[11.5px] text-[#64748B] leading-[1.65]">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
