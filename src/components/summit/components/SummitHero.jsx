import {
  Calendar,
  MapPin,
  ArrowRight,
  Building2,
  CheckCircle2,
} from 'lucide-react'
import tourismHomeBg from '../../../assets/tourism-home.png'

export default function SummitHero({ data }) {
  const {
    title,
    summitTitle,
    tagline,
    dates,
    dayNotice,
    venue,
    organizer,
    association,
    stats,
  } = data

  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full bg-[#100502] text-white overflow-hidden border-b border-[#370C01]">
      {/* ── Background Image & Ambience ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* User-provided Tourism Summit Hero Background */}
        <img
          src={tourismHomeBg}
          alt="Bihar Setu Tourism Summit 2026 Background"
          className="w-full h-full object-cover object-center"
        />

        {/* Cinematic gradient overlays for optimal text legibility and rich atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#100502]/95 via-[#100502]/65 via-50% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#100502] via-transparent to-[#100502]/70" />

        {/* Amber radial glow top left */}
        <div
          className="absolute -top-32 -left-20 w-[600px] h-[500px] rounded-full blur-3xl opacity-35"
          style={{
            background: 'radial-gradient(circle, rgba(195, 139, 52, 0.3) 0%, transparent 65%)',
          }}
        />
        {/* Mahogany glow bottom right */}
        <div
          className="absolute -bottom-32 right-0 w-[550px] h-[500px] rounded-full blur-3xl opacity-30"
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

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Summit Info & Pitch (tightly contained to prevent overlap with background archway) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center max-w-[560px]">

            {/* Main Title & Subtitle */}
            <div className="space-y-1">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[46px] xl:text-[50px] font-serif font-bold text-white leading-[1.08] tracking-[-0.02em]">
                {title}
              </h1>
              <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] xl:text-[42px] font-serif font-bold text-[#C38B34] leading-[1.12]">
                {summitTitle}
              </h2>
            </div>

            {/* Summit Motto / Tagline */}
            <p className="mt-3.5 text-[15px] sm:text-[17px] lg:text-[18px] font-serif italic text-[#E0A34B] leading-relaxed max-w-lg">
              &ldquo;{tagline}&rdquo;
            </p>

            {/* Date & Venue Bar */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] sm:text-[13px] text-[#C7B5A7]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C38B34] shrink-0" />
                <span className="font-semibold text-white">{dates}</span>
                <span className="text-[#A89688] text-[11.5px]">({dayNotice})</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E0A34B] shrink-0" />
                <span className="font-semibold text-white">{venue}</span>
              </div>
            </div>

            {/* Key Stats Counter Strip (3 compact boxes aligned within bounds) */}
            <div className="mt-6 grid grid-cols-3 gap-2.5 sm:gap-3 max-w-[500px]">
              {stats.map((st) => (
                <div
                  key={st.label}
                  className="p-3 sm:p-3.5 rounded-xl bg-[#1D0A04]/90 border border-[#370C01] hover:border-[#C38B34]/60 transition-all duration-200"
                >
                  <p className="text-xl sm:text-2xl font-black text-[#E0A34B] tracking-tight font-serif">
                    {st.value}
                  </p>
                  <p className="text-[10.5px] sm:text-[11px] font-bold text-white uppercase tracking-wider mt-0.5 leading-tight">
                    {st.label}
                  </p>
                  <p className="text-[9.5px] text-[#A89688] mt-1 leading-tight line-clamp-1">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleScrollTo('summit-registration')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C38B34] hover:bg-[#AF7625] text-white font-bold text-[13px] shadow-lg shadow-[#C38B34]/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Register as Delegate / Partner</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('summit-schedule')}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-[12.5px] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore 2-Day Schedule</span>
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('summit-experience')}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-[#C7B5A7] hover:text-white text-[12px] font-medium transition-colors"
              >
                <span>Brand Experiences</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Organizer & Association Credit */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-[11.5px] text-[#A89688]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C38B34]" />
                <span className="font-semibold text-white/90">{organizer}</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#E0A34B]" />
                <span className="font-semibold text-[#E0A34B]">{association}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Kept clear so the entrance archway in the background image shines through */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-6 pointer-events-none" />

        </div>
      </div>
    </section>
  )
}

