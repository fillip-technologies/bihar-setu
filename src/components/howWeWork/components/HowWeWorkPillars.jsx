import { Workflow, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react'

const iconMap = [Workflow, MapPin, ShieldCheck]

export default function HowWeWorkPillars({ metrics }) {
  if (!metrics || metrics.length === 0) return null

  return (
    <section className="relative z-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-md shadow-stone-900/5 p-5 sm:p-6 lg:p-7">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
          {metrics.map((item, idx) => {
            const Icon = iconMap[idx] || Workflow
            return (
              <div
                key={idx}
                className={`flex items-center gap-4 ${
                  idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                } group cursor-default`}
              >
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-stone-200 flex items-center justify-center text-[#A15D1C] shrink-0 group-hover:bg-[#A15D1C] group-hover:text-white transition-all duration-300 shadow-2xs">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Metric Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[20px] sm:text-[22px] font-bold text-[#111827] leading-none tracking-tight">
                      {item.value}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#A15D1C] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="mt-1 text-[12.5px] sm:text-[13px] text-[#64748B] font-medium leading-snug">
                    {item.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
