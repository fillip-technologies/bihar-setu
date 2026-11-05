import { Link } from 'react-router-dom'
import {
  Users,
  Building2,
  Landmark,
  Handshake,
  GraduationCap,
  Network,
  MapPin,
  Lightbulb,
  Globe,
  ArrowRight,
} from 'lucide-react'
import bridgeImage from '../../../assets/why_bridge.jpg'

const bridgeCards = [
  {
    id: 'people-opportunities',
    number: '01',
    from: 'People',
    to: 'Opportunities',
    title: ['People and', 'Opportunities'],
    description:
      'Connecting regional talent, citizens and professionals with meaningful socio-economic and career opportunities.',
    icon: Users,
    color: '#370C01',
    bgTint: 'bg-[#FAF2E8]',
    link: '/focus-areas',
  },
  {
    id: 'businesses-markets',
    number: '02',
    from: 'Businesses',
    to: 'Markets',
    title: ['Businesses and', 'Markets'],
    description:
      'Linking Bihar’s local enterprises, manufacturers and service providers with broader regional, national and global markets.',
    icon: Building2,
    color: '#2563EB',
    bgTint: 'bg-[#EBF3FE]',
    link: '/focus-areas',
  },
  {
    id: 'government-industry',
    number: '03',
    from: 'Government',
    to: 'Industry',
    title: ['Government and', 'Industry'],
    description:
      'Facilitating collaborative dialogue, public policy alignment and proactive partnerships for state-wide industrial growth.',
    icon: Landmark,
    color: '#16A34A',
    bgTint: 'bg-[#EAF7EE]',
    link: '/how-we-work',
  },
  {
    id: 'entrepreneurs-institutions',
    number: '04',
    from: 'Entrepreneurs',
    to: 'Institutions',
    title: ['Entrepreneurs and', 'Institutions'],
    description:
      'Connecting grassroots innovators and founders with incubators, research bodies and financial institutions.',
    icon: Handshake,
    color: '#7C3AED',
    bgTint: 'bg-[#F4F0FD]',
    link: '/partner-with-us',
  },
  {
    id: 'youth-opportunities',
    number: '05',
    from: 'Youth',
    to: 'Opportunities',
    title: ['Youth and', 'Opportunities'],
    description:
      'Empowering Bihar’s youth through modern vocational skills, digital readiness, mentorship and career avenues.',
    icon: GraduationCap,
    color: '#D97706',
    bgTint: 'bg-[#FEF3E7]',
    link: '/focus-areas',
  },
  {
    id: 'local-businesses-networks',
    number: '06',
    from: 'Local Businesses',
    to: 'Larger Networks',
    title: ['Local Businesses &', 'Larger Networks'],
    description:
      'Integrating district-level MSMEs and traditional ventures into established supply chains and trade networks.',
    icon: Network,
    color: '#0D9488',
    bgTint: 'bg-[#E6F7F5]',
    link: '/partner-with-us',
  },
  {
    id: 'districts-ecosystem',
    number: '07',
    from: 'Districts',
    to: 'Bihar Ecosystem',
    title: ['Districts & the Wider', 'Bihar Ecosystem'],
    description:
      'Connecting all 38 districts with centralized resources, state initiatives and inclusive developmental tracking.',
    icon: MapPin,
    color: '#0284C7',
    bgTint: 'bg-[#E0F2FE]',
    link: '/about',
  },
  {
    id: 'ideas-implementation',
    number: '08',
    from: 'Ideas',
    to: 'Implementation',
    title: ['Ideas and', 'Implementation'],
    description:
      'Connecting innovative ideas with the people, institutions and resources required to implement them on ground.',
    icon: Lightbulb,
    color: '#C38B34',
    bgTint: 'bg-[#FAF2E8]',
    link: '/initiatives',
  },
  {
    id: 'local-stories-audiences',
    number: '09',
    from: 'Local Stories',
    to: 'Wider Audiences',
    title: ['Local Stories &', 'Wider Audiences'],
    description:
      'Documenting and sharing authentic stories of Bihar’s talent, culture, heritage and transformation with wider audiences.',
    icon: Globe,
    color: '#DC2626',
    bgTint: 'bg-[#FEE2E2]',
    link: '/about',
  },
]

export default function WhyBiharSetu() {
  return (
    <section className="relative w-full bg-[#FAF6EE] overflow-hidden border-t border-b border-stone-200/70">
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
          className="absolute right-0 top-0 w-[780px] h-full opacity-[0.065] stroke-[#370C01]"
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
              'radial-gradient(#370C01 1px, transparent 1px)',
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
                fill="#FAF6EE"
                fillOpacity="0.4"
              />
              <path
                d="M30,0 C100,130 20,270 100,400 L120,400 L120,0 Z"
                fill="#FAF6EE"
              />
            </svg>
          </div>
          {/* Mobile bottom fade */}
          <div className="lg:hidden absolute inset-x-0 bottom-0 h-10 pointer-events-none">
            <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,30 C120,10 280,40 400,20 L400,40 L0,40 Z" fill="#FAF6EE" />
            </svg>
          </div>
        </div>

        {/* CENTER: Eyebrow + Headline + Description */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-10 xl:px-14 py-8 lg:py-0">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-7 h-[2px] bg-[#370C01] rounded-full shrink-0" />
            <span className="text-[10.5px] font-extrabold tracking-[0.22em] text-[#7A3F16] uppercase">
              WHY BIHAR SETU
            </span>
          </div>

          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] xl:text-[42px] font-bold text-[#231515] leading-[1.15] tracking-[-0.02em]">
            Every Gap Needs a{' '}
            <span className="text-[#C38B34]">Bridge</span>
          </h2>

          <p className="mt-3.5 text-[13px] sm:text-[13.5px] lg:text-[14px] text-[#5C443C] leading-[1.75] max-w-xl">
            The word Setu means a bridge. Bihar Setu represents a bridge between
            challenges and solutions, ideas and implementation, institutions and
            communities, and Bihar&apos;s potential and its future.
          </p>

          <div className="mt-5">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#370C01] hover:bg-[#260800] text-white font-semibold text-xs rounded-lg shadow-sm transition-all duration-200 hover:-translate-y-0.5 group w-fit"
            >
              <span>Explore The Bihar Setu Vision</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
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
              <span className="w-6 h-[2.5px] bg-[#C38B34] rounded-full" />
              <span className="w-2 h-[2.5px] bg-[#370C01] rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Strip: 9 Bridges Grid ── */}
      <div className="relative z-10 border-t border-stone-200/80 bg-stone-200/70">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200/70">
          {bridgeCards.map((card) => {
            const IconComponent = card.icon
            return (
              <Link
                key={card.id}
                to={card.link}
                className="group px-6 py-6 sm:py-7 bg-[#FAF6EE] hover:bg-white flex flex-col justify-between gap-3 transition-all duration-200 relative overflow-hidden"
              >
                {/* Subtle top indicator hover line */}
                <div
                  className="absolute top-0 inset-x-0 h-[2.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ backgroundColor: card.color }}
                />

                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    {/* Icon badge */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 ${card.bgTint}`}
                      style={{ color: card.color }}
                    >
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    <span className="text-[11px] font-black tracking-widest text-stone-400 group-hover:text-[#370C01] transition-colors">
                      {card.number}
                    </span>
                  </div>

                  {/* Two-line bold title */}
                  <h3 className="text-[14px] sm:text-[15px] font-bold text-[#231515] leading-snug flex items-center justify-between gap-1">
                    <span>
                      {card.title[0]}
                      <br />
                      <span style={{ color: card.color }}>{card.title[1]}</span>
                    </span>
                    <ArrowRight
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0"
                      style={{ color: card.color }}
                    />
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[12px] sm:text-[12.5px] text-[#64748B] leading-[1.65]">
                    {card.description}
                  </p>
                </div>

                <div className="pt-2 text-[11px] font-bold tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: card.color }}>
                  Explore Pathway →
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
