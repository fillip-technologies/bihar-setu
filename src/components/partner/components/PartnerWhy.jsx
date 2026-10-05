import {
  TrendingUp,
  Handshake,
  Share2,
  Compass,
  Coins,
  ShieldCheck,
  Quote,
} from 'lucide-react'
import biharBridgeImg from '../../../assets/partner/bihar-bridge.jpg'

const iconMap = {
  TrendingUp,
  Handshake,
  Network: Share2,
  Compass,
  Coins,
  ShieldCheck,
}

export default function PartnerWhy({ data }) {
  const { heading, highlight, subtitle, quote, points } = data

  return (
    <section
      id="why-partner"
      aria-labelledby="why-partner-heading"
      className="relative pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 bg-[#FAF7F2] border-t border-stone-200/80"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Authentic Gandhi Setu & Ganga River Photo with Floating Quote */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200/90 bg-white group">
              <img
                src={biharBridgeImg}
                alt="Scenic Gandhi Setu over the Ganga river in Bihar at golden hour sunrise with traditional boats"
                className="w-full h-[400px] sm:h-[460px] lg:h-[500px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />

              {/* Gentle gradient scrim to frame the quote */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Quote Box on Bottom-Left */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/80">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#C67D33]/40 flex items-center justify-center text-[#A15D1C] shrink-0 mt-0.5 shadow-2xs">
                    <Quote className="w-4 h-4 fill-current stroke-none" />
                  </div>
                  <div>
                    <p className="text-[13.5px] sm:text-[14.5px] font-medium text-[#111827] leading-snug font-sans">
                      &ldquo;{quote}&rdquo;
                    </p>
                    <div className="w-12 h-[2.5px] bg-[#A15D1C] rounded-full mt-2.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading & Unified Value Propositions Panel */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="mb-5 sm:mb-6">
              <h2
                id="why-partner-heading"
                className="text-[30px] sm:text-[38px] lg:text-[44px] font-serif font-bold text-[#111827] leading-[1.12] tracking-[-0.02em]"
              >
                {heading}{' '}
                <span className="text-[#A15D1C] font-serif font-bold">
                  {highlight}
                </span>
              </h2>
              {subtitle && (
                <p className="mt-2 text-[13.5px] sm:text-[14.5px] text-[#64748B] leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Unified Elevated List Container */}
            <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-3 sm:p-4 divide-y divide-stone-100">
              {points.map((pt, idx) => {
                const Icon = iconMap[pt.icon] || TrendingUp
                return (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 flex items-start gap-3.5 rounded-2xl hover:bg-[#FAF7F2] transition-colors group cursor-default"
                  >
                    {/* Golden Icon Badge */}
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#C67D33]/30 flex items-center justify-center text-[#A15D1C] shrink-0 group-hover:bg-[#A15D1C] group-hover:text-white transition-colors duration-200 shadow-2xs mt-0.5">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>

                    {/* Point Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[14px] sm:text-[14.5px] font-bold text-[#111827] leading-snug group-hover:text-[#A15D1C] transition-colors">
                        {pt.text}
                      </h3>
                      {pt.desc && (
                        <p className="mt-0.5 text-[12px] sm:text-[12.5px] text-[#64748B] leading-relaxed">
                          {pt.desc}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
