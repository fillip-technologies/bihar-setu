import { Link } from 'react-router-dom'
import {
  Calendar,
  MapPin,
  ArrowRight,
  UtensilsCrossed,
  Users,
  Compass,
} from 'lucide-react'
import summitGatewayHd from '../../../assets/summit-images/summit-6.png'

export default function HomeSummitShowcase() {
  const stats = [
    {
      value: '8',
      label: 'Panel Sessions',
      desc: '4 moderated discussions each day',
      icon: Users,
    },
    {
      value: '114',
      label: 'Dish Food Pavilion',
      desc: 'Authentic regional culinary showcase',
      icon: UtensilsCrossed,
    },
    {
      value: '~1,600',
      label: 'Delegates Expected',
      desc: 'Industry leaders, DMCs & investors',
      icon: Compass,
    },
  ]

  return (
    <section className="relative w-full bg-[#100502] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-y border-[#370C01]">
      {/* ── Background Glow & Ambience ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Amber radial glow top left */}
        <div
          className="absolute -top-32 -left-20 w-[550px] h-[450px] rounded-full blur-3xl opacity-35"
          style={{
            background: 'radial-gradient(circle, rgba(195, 139, 52, 0.28) 0%, transparent 65%)',
          }}
        />
        {/* Mahogany glow bottom right */}
        <div
          className="absolute -bottom-32 right-0 w-[550px] h-[450px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(55, 12, 1, 0.45) 0%, transparent 65%)',
          }}
        />
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#C38B34 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column (7 cols): Information, Vision, Stats & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Main Headline */}
            <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-serif font-bold text-white leading-[1.12] tracking-[-0.02em]">
              Bihar Setu{' '}
              <span className="text-[#C38B34] block sm:inline">Tourism Summit 2026</span>
            </h2>

            {/* Summit Motto */}
            <p className="mt-2 text-[16px] sm:text-[19px] font-serif italic text-[#E0A34B] leading-snug">
              &ldquo;Tourism Preparedness Before Tourism Promotion&rdquo;
            </p>

            {/* Descriptive Body */}
            <p className="mt-4 text-[13.5px] sm:text-[14.5px] text-[#C7B5A7] leading-relaxed max-w-2xl">
              A high-impact 2-day statewide summit in Patna connecting government officials,
              district administrations, hotels, travel businesses, master chefs, and investors
              to align infrastructure, hospitality readiness, and regional storytelling before
              statewide promotional campaigns.
            </p>

            {/* Date & Venue Bar */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] sm:text-[13.5px] text-[#C7B5A7]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C38B34] shrink-0" />
                <span className="font-semibold text-white">7th &amp; 8th December 2026</span>
                <span className="text-[#A89688] text-[11.5px]">(Monday &amp; Tuesday)</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E0A34B] shrink-0" />
                <span className="font-semibold text-white">Urja Auditorium, Patna, Bihar</span>
              </div>
            </div>

            {/* Key Stats Counter Strip (3 compact boxes) */}
            <div className="mt-6 grid grid-cols-3 gap-2.5 sm:gap-3.5 max-w-[560px]">
              {stats.map((st) => (
                <div
                  key={st.label}
                  className="p-3 sm:p-4 rounded-xl bg-[#1D0A04]/90 border border-[#370C01] hover:border-[#C38B34]/60 transition-all duration-200"
                >
                  <p className="text-xl sm:text-2xl lg:text-3xl font-black text-[#E0A34B] tracking-tight font-serif">
                    {st.value}
                  </p>
                  <p className="text-[11px] sm:text-[12px] font-bold text-white uppercase tracking-wider mt-0.5 leading-tight">
                    {st.label}
                  </p>
                  <p className="text-[10px] text-[#A89688] mt-1 leading-tight line-clamp-1">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                to="/tourism-summit-2026"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C38B34] hover:bg-[#AF7625] text-white font-bold text-[13px] sm:text-[13.5px] shadow-lg shadow-[#C38B34]/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Tourism Summit 2026</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </Link>

              <Link
                to="/tourism-summit-2026#summit-schedule"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-[13px] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View 2-Day Schedule</span>
              </Link>
            </div>

          </div>

          {/* Right Column (5 cols): Visual Showcase — Show ONLY the crisp HD image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Link
              to="/tourism-summit-2026"
              className="group block relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C38B34]/40 shadow-2xl shadow-black/60 bg-[#1A0500] hover:border-[#C38B34] transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={summitGatewayHd}
                alt="Bihar Setu Tourism Summit 2026 Entrance Gateway at Urja Auditorium Patna"
                className="w-full h-auto object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

