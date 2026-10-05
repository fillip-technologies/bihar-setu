import {
  Search,
  BookOpen,
  Users,
  Lightbulb,
  Handshake,
  Settings2,
  BarChart3,
  Sun,
} from 'lucide-react'

// Static imports — required for Vite HMR to work correctly
import step1 from '../../../assets/howwework/step-1.jpg'
import step2 from '../../../assets/howwework/step-2.jpg'
import step3 from '../../../assets/howwework/step-3.jpg'
import step4 from '../../../assets/howwework/step-4.jpg'
import step5 from '../../../assets/howwework/step-5.jpg'
import step6 from '../../../assets/howwework/step-6.jpg'
import step7 from '../../../assets/howwework/step-7.jpg'

// Map icon strings to Lucide components
const iconMap = {
  Search,
  BookOpen,
  Users,
  Lightbulb,
  Handshake,
  Settings2,
  BarChart3,
}

// Static image lookup
const stepImages = {
  'step-1.jpg': step1,
  'step-2.jpg': step2,
  'step-3.jpg': step3,
  'step-4.jpg': step4,
  'step-5.jpg': step5,
  'step-6.jpg': step6,
  'step-7.jpg': step7,
}

export default function HowWeWorkProcess({ data }) {
  const { eyebrow, title, highlight, subtitle, steps } = data

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] overflow-hidden"
    >
      {/* ── Faint heritage architectural background silhouettes ── */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect x='50' y='300' width='60' height='200' fill='%2317382E' rx='4'/%3E%3Crect x='60' y='280' width='40' height='30' fill='%2317382E' rx='2'/%3E%3Cpolygon points='80,230 120,280 40,280' fill='%2317382E'/%3E%3Ccircle cx='80' cy='220' r='12' fill='%2317382E'/%3E%3Crect x='680' y='300' width='60' height='200' fill='%2317382E' rx='4'/%3E%3Crect x='690' y='280' width='40' height='30' fill='%2317382E' rx='2'/%3E%3Cpolygon points='710,230 750,280 670,280' fill='%2317382E'/%3E%3Ccircle cx='710' cy='220' r='12' fill='%2317382E'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 border-t border-[#A15D1C]/40" />
            <Sun className="w-4 h-4 text-[#A15D1C]" />
            <span className="text-[11.5px] font-bold tracking-[0.2em] uppercase text-[#A15D1C]">
              {eyebrow}
            </span>
            <Sun className="w-4 h-4 text-[#A15D1C]" />
            <span className="w-8 border-t border-[#A15D1C]/40" />
          </div>

          {/* Title */}
          <h2
            id="process-heading"
            className="text-[30px] sm:text-[38px] lg:text-[44px] font-serif font-bold text-[#0B192C] leading-tight tracking-[-0.02em]"
          >
            {title}{' '}
            <span className="text-[#A15D1C] italic">{highlight}</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-[14px] sm:text-[15px] text-[#64748B] max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* ── Zigzag Steps ── */}
        <div className="relative">
          {steps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Search
            const imgSrc = stepImages[step.image]
            const isLeft = step.align === 'left'
            const isLast = idx === steps.length - 1

            return (
              <div key={step.number} className="relative mb-0">
                {/* Step Row */}
                <div
                  className={`relative flex items-center gap-6 sm:gap-10 lg:gap-16 ${
                    isLeft ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* ── Text Side ── */}
                  <div
                    className={`flex-1 min-w-0 flex flex-col ${
                      isLeft ? 'items-start text-left' : 'items-end text-right'
                    } py-8 sm:py-10 lg:py-12`}
                  >
                    {/* Step Number + Icon Row */}
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        isLeft ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      {/* Bold Number */}
                      <span
                        className="text-[56px] sm:text-[64px] lg:text-[72px] font-black text-[#17382E] leading-none select-none"
                        style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}
                      >
                        {step.number}
                      </span>

                      {/* Icon Square */}
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#C67D33]/30 flex items-center justify-center text-[#A15D1C] shadow-sm">
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#0B192C] leading-snug mb-2">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p
                      className={`text-[13.5px] sm:text-[14px] text-[#64748B] leading-relaxed max-w-[280px] sm:max-w-[300px] ${
                        isLeft ? '' : 'ml-auto'
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>

                  {/* ── Image Side ── */}
                  <div className="flex-1 min-w-0 flex items-center justify-center py-4 sm:py-6">
                    <div
                      className={`relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[400px] overflow-hidden shadow-xl ${
                        isLeft
                          ? 'rounded-[40%_60%_60%_40%_/_40%_40%_60%_60%]'
                          : 'rounded-[60%_40%_40%_60%_/_60%_60%_40%_40%]'
                      }`}
                      style={{ aspectRatio: '4/3' }}
                    >
                      <img
                        src={imgSrc}
                        alt={step.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* ── S-Curve Connector (between steps, not after last) ── */}
                {!isLast && (
                  <div
                    className={`relative flex ${
                      isLeft ? 'justify-end pr-[5%] sm:pr-[8%]' : 'justify-start pl-[5%] sm:pl-[8%]'
                    } -mt-4 pointer-events-none`}
                    aria-hidden="true"
                  >
                    <svg
                      width="110"
                      height="64"
                      viewBox="0 0 110 64"
                      fill="none"
                      className="text-[#A15D1C] opacity-55"
                    >
                      {isLeft ? (
                        <>
                          <path
                            d="M12 6 C12 6, 98 6, 98 32 C98 58, 12 58, 12 58"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeDasharray="5 4"
                            fill="none"
                            strokeLinecap="round"
                          />
                          <polygon points="5,54 15,54 12,64" fill="currentColor" />
                        </>
                      ) : (
                        <>
                          <path
                            d="M98 6 C98 6, 12 6, 12 32 C12 58, 98 58, 98 58"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeDasharray="5 4"
                            fill="none"
                            strokeLinecap="round"
                          />
                          <polygon points="95,54 105,54 98,64" fill="currentColor" />
                        </>
                      )}
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
