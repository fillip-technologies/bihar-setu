import {
  Clock,
  Calendar,
  CheckCircle2,
  Tv,
  UtensilsCrossed,
  Music,
  Video,
  BookOpen,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

export default function SummitSchedule({ data }) {
  const {
    eyebrow,
    headline,
    day1,
    day2,
    eveningProgramme,
    moderationNote,
  } = data

  const launchIcons = [
    Video,
    Music,
    BookOpen,
    UtensilsCrossed,
    Sparkles,
  ]

  return (
    <section id="summit-schedule" className="relative w-full bg-[#F2EADD] py-16 sm:py-20 lg:py-24 border-b border-[#E8DCCF] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute -top-32 left-1/3 w-[600px] h-[500px] rounded-full blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(195, 139, 52, 0.15) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute -bottom-32 right-10 w-[550px] h-[450px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(55, 12, 1, 0.12) 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-6 h-[2px] bg-[#370C01] rounded-full shrink-0" />
            <span className="text-[10.5px] font-extrabold tracking-[0.22em] text-[#C38B34] uppercase">
              {eyebrow}
            </span>
            <span className="w-6 h-[2px] bg-[#370C01] rounded-full shrink-0" />
          </div>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-serif font-bold text-[#231515] leading-[1.12] tracking-[-0.02em]">
            {headline}
          </h2>
          <p className="mt-3 text-[14.5px] sm:text-[15.5px] text-[#5C443C] leading-relaxed max-w-2xl mx-auto">
            Two days of rigorous moderated deliberations, inter-departmental alignments, and landmark statewide launches.
          </p>
        </div>

        {/* Day 1 & Day 2 Columns (Image 3 layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* DAY 1 COLUMN */}
          <div className="rounded-2xl bg-white border border-[#E8DCCF] p-6 sm:p-8 shadow-xs flex flex-col justify-between h-full relative overflow-hidden">
            {/* Top Amber line */}
            <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#370C01]" />

            <div>
              {/* Day Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-200/80 mb-5">
                <div>
                  <span className="px-2.5 py-1 rounded-md bg-[#370C01] text-white text-[11px] font-bold uppercase tracking-wider">
                    {day1.tag}
                  </span>
                  <h3 className="text-[19px] sm:text-[21px] font-serif font-bold text-[#231515] mt-2">
                    {day1.date}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] text-[#C38B34] font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>10:45 AM – 4:45 PM</span>
                </div>
              </div>

              {/* Day Subtitle */}
              <p className="text-[12.5px] text-[#5C443C] mb-6 leading-relaxed bg-[#FAF6EE] p-3 rounded-xl border border-[#E8DCCF]">
                {day1.timing}
              </p>

              {/* 4 Panels */}
              <div className="space-y-4">
                {day1.panels.map((p, idx) => (
                  <div
                    key={p.num}
                    className="p-4 rounded-xl bg-[#FAF6EE] hover:bg-[#F2EADD] border border-[#E8DCCF] transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#370C01]">
                        {p.num}
                      </span>
                      <span className="text-[10.5px] font-semibold text-[#8A7268]">
                        60 Minutes
                      </span>
                    </div>
                    <h4 className="text-[14.5px] font-bold text-[#231515] leading-snug group-hover:text-[#370C01] transition-colors">
                      {p.title}
                    </h4>
                    <p className="mt-1.5 text-[12px] text-[#5C443C] leading-[1.6]">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-[11.5px] text-[#8A7268]">
              <span>Plenary Stage · Urja Auditorium</span>
              <span className="font-semibold text-[#370C01]">4 Moderated Panels</span>
            </div>
          </div>

          {/* DAY 2 COLUMN */}
          <div className="rounded-2xl bg-white border border-[#E8DCCF] p-6 sm:p-8 shadow-xs flex flex-col justify-between h-full relative overflow-hidden">
            {/* Top Gold line */}
            <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#C38B34]" />

            <div>
              {/* Day Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-200/80 mb-5">
                <div>
                  <span className="px-2.5 py-1 rounded-md bg-[#C38B34] text-white text-[11px] font-bold uppercase tracking-wider">
                    {day2.tag}
                  </span>
                  <h3 className="text-[19px] sm:text-[21px] font-serif font-bold text-[#231515] mt-2">
                    {day2.date}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] text-[#C38B34] font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>10:45 AM – 4:45 PM</span>
                </div>
              </div>

              {/* Day Subtitle */}
              <p className="text-[12.5px] text-[#5C443C] mb-6 leading-relaxed bg-[#FAF6EE] p-3 rounded-xl border border-[#E8DCCF]">
                {day2.timing}
              </p>

              {/* 4 Panels */}
              <div className="space-y-4">
                {day2.panels.map((p, idx) => (
                  <div
                    key={p.num}
                    className="p-4 rounded-xl bg-[#FAF6EE] hover:bg-[#F2EADD] border border-[#E8DCCF] transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#C38B34]">
                        {p.num}
                      </span>
                      <span className="text-[10.5px] font-semibold text-[#8A7268]">
                        60 Minutes
                      </span>
                    </div>
                    <h4 className="text-[14.5px] font-bold text-[#231515] leading-snug group-hover:text-[#370C01] transition-colors">
                      {p.title}
                    </h4>
                    <p className="mt-1.5 text-[12px] text-[#5C443C] leading-[1.6]">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-[11.5px] text-[#8A7268]">
              <span>Plenary Stage · Urja Auditorium</span>
              <span className="font-semibold text-[#C38B34]">4 Moderated Panels</span>
            </div>
          </div>

        </div>

        {/* EVENING PROGRAMME AND LAUNCHES (Matching Image 3 Bottom Banner) */}
        <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#370C01] via-[#260800] to-[#100502] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-[#C38B34]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C38B34]/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C38B34]/20 border border-[#C38B34]/40 text-[#E0A34B] text-[10.5px] font-extrabold tracking-[0.2em] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C38B34]" />
              SPECIAL EVENINGS
            </span>

            <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-serif font-bold text-white">
              {eveningProgramme.title}
            </h3>

            <p className="mt-3 text-[14px] sm:text-[15px] text-[#C7B5A7] leading-relaxed max-w-4xl">
              {eveningProgramme.desc}
            </p>

            {/* Launch Badges Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {eveningProgramme.launches.map((item, idx) => {
                const IconC = launchIcons[idx] || Sparkles
                return (
                  <div
                    key={item}
                    className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 flex items-center gap-3 transition-colors"
                  >
                    <IconC className="w-4 h-4 text-[#E0A34B] shrink-0" />
                    <span className="text-[12px] font-semibold text-white/95 leading-snug">
                      {item}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Moderation Format Footnote */}
        <div className="mt-6 p-4 rounded-xl bg-white/80 border border-[#E8DCCF] flex items-start gap-3 text-[12px] text-[#5C443C]">
          <Tv className="w-4 h-4 text-[#370C01] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {moderationNote}
          </p>
        </div>

      </div>
    </section>
  )
}

