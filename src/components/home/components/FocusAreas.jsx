import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Landmark,
  BookOpen,
  Sprout,
  Cpu,
  Plus,
} from 'lucide-react'
import { focusAreasData } from '../../../data/focusAreasData'

const iconMap = {
  Landmark: Landmark,
  BookOpen: BookOpen,
  Sprout: Sprout,
  Cpu: Cpu,
  Plus: Plus,
}

export default function FocusAreas() {
  const { title, description, cta, quote, sectors } = focusAreasData
  const [activeSlide, setActiveSlide] = useState(0)
  const scrollContainerRef = useRef(null)

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
    setActiveSlide((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
    setActiveSlide((prev) => Math.min(sectors.length - 1, prev + 1))
  }

  return (
    <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 bg-[#FAF7F2] overflow-hidden border-t border-black/5">
      {/* Cultural Heritage Texture: Mithila / Madhubani Sun Motif & Setu Architectural Lines */}
      <div className="absolute top-0 right-0 w-[420px] lg:w-[540px] h-[360px] pointer-events-none select-none overflow-hidden z-0 opacity-40">
        <svg
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#C67D33]"
        >
          {/* Mithila Mandala Sunburst & Setu Bridge Cable Radiations */}
          <circle cx="340" cy="60" r="160" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.4" />
          <circle cx="340" cy="60" r="120" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <circle cx="340" cy="60" r="85" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.3" />
          <circle cx="340" cy="60" r="50" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
          <circle cx="340" cy="60" r="25" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />

          {/* Radiating Setu Cable Rays / Sunrays */}
          <line x1="340" y1="60" x2="160" y2="180" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
          <line x1="340" y1="60" x2="190" y2="230" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
          <line x1="340" y1="60" x2="230" y2="270" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
          <line x1="340" y1="60" x2="280" y2="290" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
          <line x1="340" y1="60" x2="140" y2="120" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
          <line x1="340" y1="60" x2="150" y2="60" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />

          {/* Traditional Mithila Petal / Triangle Geo Pattern around rim */}
          <path
            d="M220,60 L240,48 L240,72 Z M235,115 L255,100 L262,122 Z M265,160 L280,140 L295,158 Z"
            fill="currentColor"
            opacity="0.25"
          />
        </svg>
      </div>

      {/* Subtle Architectural Blueprint Micro-Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C67D33_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-[0.12] pointer-events-none z-0" />

      {/* Subtle Bihar State Map Watermark in Background on Right */}
      <div className="absolute right-6 lg:right-16 bottom-6 w-64 lg:w-80 h-64 lg:h-80 pointer-events-none opacity-[0.05] select-none z-0">
        <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#C67D33]">
          <path
            d="M50,80 Q120,40 220,60 Q320,50 360,110 Q390,170 340,240 Q290,300 200,320 Q120,310 70,250 Q20,180 50,80 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Content Container: Wider max-width (1600px) to prevent empty side space */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row with Title & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-medium text-[#111827] leading-[1.16] tracking-[-0.015em] font-serif">
              {title.line1}
              <br />
              {title.line2}
            </h2>

            {/* Description */}
            <p className="mt-2 text-xs sm:text-[13.5px] text-[#4B5565] max-w-xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* Navigation Controls on Right */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-white border border-slate-200/90 flex items-center justify-center text-slate-700 hover:text-black hover:border-slate-400 shadow-2xs transition-all active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2]" />
              </button>

              <div className="flex items-center gap-1.5 px-1">
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeSlide === 0 ? 'bg-[#17382E]' : 'bg-slate-300'
                  }`}
                />
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    activeSlide > 0 ? 'bg-[#17382E]' : 'bg-slate-300'
                  }`}
                />
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-white border border-[#17382E]/40 flex items-center justify-center text-[#17382E] hover:bg-[#17382E] hover:text-white shadow-2xs transition-all active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>

            {/* Divider */}
            <span className="hidden sm:block w-[1px] h-5 bg-slate-300" />

            {/* Explore Link */}
            <Link
              to={cta.path}
              className="text-xs sm:text-[13px] font-semibold text-[#111827] hover:text-[#17382E] transition-colors"
            >
              {cta.label}
            </Link>
          </div>
        </div>

        {/* Sectors Grid: 6 equal columns (5 sector cards + 1 quote card) filling the full width */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3.5 sm:gap-4 w-full items-stretch"
        >
          {sectors.map((sector) => {
            const IconComp = iconMap[sector.icon] || Landmark

            return (
              <Link
                key={sector.id}
                to={sector.link}
                className={`group relative rounded-2xl ${sector.bgTint} border ${sector.borderColor} p-3.5 sm:p-4 flex flex-col justify-between hover:shadow-lg hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1 h-full`}
              >
                {/* Top Header inside card */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    {/* Round Icon Badge */}
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0 shadow-xs"
                      style={{ backgroundColor: sector.color }}
                    >
                      <IconComp className="w-4 h-4 stroke-[2.2]" />
                    </div>

                    {/* Small Round Arrow Button */}
                    <div
                      className="w-7 h-7 rounded-full border border-slate-300/80 bg-white/80 group-hover:bg-white flex items-center justify-center transition-all group-hover:scale-105"
                      style={{ color: sector.color }}
                    >
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.2] transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  {/* Sector Title */}
                  <h3 className="text-sm sm:text-[15px] font-bold text-[#111827] tracking-tight">
                    {sector.title}
                  </h3>

                  {/* Sector Description */}
                  <p className="text-[11px] sm:text-[11.5px] text-[#526071] leading-snug line-clamp-2 mt-0.5">
                    {sector.description}
                  </p>
                </div>

                {/* Sector Image on Bottom */}
                <div className="mt-3.5 rounded-xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
            )
          })}

          {/* Inspirational Quote Card: Takes the 6th equal column */}
          <div className="flex flex-col justify-center items-start p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white/90 to-[#FAF7F2]/80 border border-slate-200/80 relative overflow-hidden shadow-xs h-full">
            {/* Soft decorative contour in background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FAF2E8] via-transparent to-transparent pointer-events-none" />

            {/* Giant Primary Quotation Mark */}
            <span className="text-4xl sm:text-5xl font-serif text-[#17382E]/45 leading-none select-none mb-1">
              &ldquo;
            </span>

            {/* Quote Text */}
            <p className="text-sm sm:text-base font-serif italic text-[#1F2937] leading-[1.38] relative z-10">
              {quote.text}
            </p>

            {/* Small Primary Accent Line */}
            <span className="w-8 h-[2.5px] bg-[#17382E] rounded-full mt-4 relative z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
