import {
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export default function SummitExperience({ data }) {
  const {
    eyebrow,
    headline,
    subtitle,
    spaces,
    reservationNote,
  } = data

  return (
    <section id="summit-experience" className="relative w-full bg-[#FAF6EE] py-16 sm:py-20 lg:py-24 border-b border-[#E8DCCF] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute -top-24 right-1/4 w-[500px] h-[400px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(195, 139, 52, 0.15) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute -bottom-24 left-10 w-[450px] h-[350px] rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(55, 12, 1, 0.1) 0%, transparent 65%)',
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
            {subtitle}
          </p>
        </div>

        {/* 6 Visual Cards Grid (Matching Image 4 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {spaces.map((sp, idx) => (
            <div
              key={sp.id}
              className="group rounded-2xl bg-white border border-[#E8DCCF] overflow-hidden hover:border-[#C38B34] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={sp.image}
                  alt={sp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Number Badge */}
                <div className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-[#370C01]/90 backdrop-blur-xs text-[#E0A34B] text-[11px] font-bold flex items-center justify-center shadow-xs">
                  0{idx + 1}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-[#231515] leading-snug group-hover:text-[#370C01] transition-colors">
                    {sp.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] text-[#5C443C] leading-[1.65]">
                    {sp.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8DCCF] flex items-center justify-between text-[11.5px] text-[#C38B34] font-semibold">
                  <span>Urja Auditorium Campus</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Sponsorship Zone</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reservation Notice Card */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white border border-[#E8DCCF] flex items-start gap-3.5 shadow-xs">
          <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] text-[#C38B34] flex items-center justify-center shrink-0 border border-[#E8DCCF]">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-[13.5px] font-bold text-[#231515]">
              Sponsor Category Allocations
            </h4>
            <p className="mt-1 text-[12px] sm:text-[12.5px] text-[#5C443C] leading-relaxed">
              {reservationNote}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

