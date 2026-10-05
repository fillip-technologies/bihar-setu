import {
  UtensilsCrossed,
  Hotel,
  ShieldCheck,
  TrendingUp,
  Camera,
  Users,
} from 'lucide-react'
import summitMapImg from '../../../assets/innovaties/summit.png'
import nalandaImg from '../../../assets/sectors/tourism.jpg'
import cultureImg from '../../../assets/focus-areas/culture.jpg'
import spiritualImg from '../../../assets/innovaties/spiritual.jpg'
import culinaryImg from '../../../assets/innovaties/culinary.jpg'

const summitPillars = [
  {
    icon: ShieldCheck,
    title: 'Tourism Preparedness',
    desc: 'Setting the foundation with readiness, safety, and operational standards before statewide campaigns.',
  },
  {
    icon: Hotel,
    title: 'Hospitality Standards',
    desc: 'Enhancing guest experience, hygiene benchmark, and service training across hotels, homestays, and resorts.',
  },
  {
    icon: Users,
    title: 'Stakeholder Coordination',
    desc: 'Uniting tour operators, transport unions, district administrations, and cultural bodies on one platform.',
  },
  {
    icon: UtensilsCrossed,
    title: "Bihar's Culinary Identity",
    desc: 'Celebrating regional gastronomy, traditional recipes, and food trails across Magadh, Mithila, and Anga.',
  },
  {
    icon: Camera,
    title: 'Destination Promotion',
    desc: 'Showcasing hidden eco-circuits, archaeological wonders, and spiritual journeys beyond traditional circuits.',
  },
  {
    icon: TrendingUp,
    title: 'Business & Investment Opportunities',
    desc: 'Creating viable ventures, rural entrepreneurship, and public-private investments in Bihar’s tourism sector.',
  },
]

const summitHighlights = [
  {
    image: nalandaImg,
    alt: 'Ancient Nalanda Heritage Circuit',
    title: 'Heritage & Stupa Circuits',
  },
  {
    image: cultureImg,
    alt: 'Cultural & Living Traditions of Bihar',
    title: 'Culture & Living Traditions',
  },
  {
    image: spiritualImg,
    alt: 'Bodh Gaya & Spiritual Circuits',
    title: 'Spiritual & Peace Circuits',
  },
  {
    image: culinaryImg,
    alt: 'Bihar Culinary & Gastronomy Trails',
    title: "Bihar's Culinary Identity",
  },
]

export default function InitiativesTourismSummit() {
  return (
    <section
      id="tourism-summit-section"
      className="relative py-16 sm:py-20 lg:py-24 bg-white text-slate-900 overflow-hidden font-sans border-b border-slate-200"
    >
      <div id="tourism-summit" className="absolute -top-16 left-0 pointer-events-none" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (7 cols): Narrative & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-2">
              Bihar Setu <span className="text-[#17382E]">Tourism Summit 2026</span>
            </h2>

            <div className="text-base sm:text-lg font-bold text-[#E06222] mb-3">
              Season 1
            </div>

            <p className="text-lg sm:text-xl font-bold text-[#17382E] tracking-tight mb-6">
              Tourism Preparedness Before Tourism Promotion
            </p>

            {/* Narrative Paragraphs */}
            <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
              <p>
                The <strong className="text-slate-900 font-semibold">Bihar Setu Tourism Summit 2026</strong> is the first major sector-focused initiative of Bihar Setu.
              </p>
              <p>
                The Summit has been created to connect Bihar’s tourism, hospitality, travel, culture, food, technology and allied industries through a common platform.
              </p>
              <p>
                It will focus on tourism preparedness, stakeholder coordination, hospitality standards, visitor experience, destination promotion, Bihar’s culinary identity and tourism-related business opportunities.
              </p>
            </div>

            {/* Summit Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {summitPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-[#17382E]/40 hover:shadow-xs transition-all"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded-md bg-[#EAF5F1] text-[#17382E] flex items-center justify-center shrink-0">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed pl-8">
                      {pillar.desc}
                    </p>
                  </div>
                )
              })}
            </div>



          </div>

          {/* Right Column (5 cols): Pure PNG Map Graphic + 2 Rectangle Images below */}
          <div className="lg:col-span-5 flex flex-col items-center justify-start lg:-mt-4">
            <div className="w-full flex flex-col items-center justify-start">
              {/* Pure PNG map with natural realistic drop-shadow */}
              <img
                src={summitMapImg}
                alt="Bihar Setu Tourism Summit 2026 - 38 Districts Heritage and Culture Map"
                className="w-full max-w-[560px] h-auto object-contain filter drop-shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:scale-[1.03]"
              />

              {/* Minimal caption below PNG */}
              <div className="mt-3 text-center">
                <span className="text-[11.5px] font-semibold text-slate-500 tracking-wide">
                  All 38 Districts Heritage & Tourism Ecosystem
                </span>
              </div>

              {/* Four Rectangular Images filling the 2x2 grid */}
              <div className="grid grid-cols-2 gap-3.5 w-full mt-5">
                {summitHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200/90 aspect-[16/10] bg-slate-100 transition-all"
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-2.5 sm:p-3">
                      <span className="text-[11px] sm:text-xs font-bold text-white drop-shadow-sm leading-tight">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
