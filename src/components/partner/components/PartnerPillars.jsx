import { Users, Target, Handshake, TrendingUp } from 'lucide-react'

const iconMap = {
  Users,
  Target,
  Handshake,
  TrendingUp,
}

export default function PartnerPillars({ pillars }) {
  return (
    <section className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-md shadow-stone-900/5 p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:divide-x lg:divide-stone-200">
          {pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Users
            return (
              <div
                key={pillar.title}
                className={`flex flex-col items-center text-center group ${
                  idx > 0 ? 'lg:pl-6' : ''
                }`}
              >
                {/* Circular Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-stone-200/80 flex items-center justify-center text-[#A15D1C] group-hover:bg-[#A15D1C] group-hover:text-white transition-all duration-300 mb-3 shadow-2xs">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="text-[15px] sm:text-[16px] font-bold text-[#111827] leading-snug">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-[12.5px] sm:text-[13px] text-[#64748B] leading-relaxed max-w-[220px]">
                  {pillar.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
