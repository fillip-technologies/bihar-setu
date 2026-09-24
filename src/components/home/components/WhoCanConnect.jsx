import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// High-resolution realistic images generated specifically for each stakeholder category
import institutionsImg from '../../../assets/stakeholders/institutions.jpg'
import businessesImg from '../../../assets/stakeholders/businesses.jpg'
import professionalsImg from '../../../assets/stakeholders/professionals.jpg'
import entrepreneursImg from '../../../assets/stakeholders/entrepreneurs.jpg'
import studentsImg from '../../../assets/stakeholders/students.jpg'
import communityImg from '../../../assets/stakeholders/community.jpg'
import researchersImg from '../../../assets/stakeholders/researchers.jpg'
import mediaImg from '../../../assets/stakeholders/media.jpg'
import leafShadowImg from '../../../assets/leaf_shadow.jpg'

// ─────────────────────────────────────────────
// 8 Stakeholder Categories Data
// ─────────────────────────────────────────────
const stakeholderCategories = [
  {
    id: 'institutions',
    title: 'Institutions',
    description:
      'Educational, professional, social and development-focused institutions seeking meaningful collaboration.',
    image: institutionsImg,
    tag: 'Education & Civil',
  },
  {
    id: 'businesses',
    title: 'Businesses and Industries',
    description:
      'Companies, MSMEs, start-ups and business organisations interested in sector development and partnership opportunities.',
    image: businessesImg,
    tag: 'Commerce & Industry',
  },
  {
    id: 'professionals',
    title: 'Professionals and Experts',
    description:
      'Industry professionals, consultants, subject experts and experienced individuals willing to contribute knowledge.',
    image: professionalsImg,
    tag: 'Domain Expertise',
  },
  {
    id: 'entrepreneurs',
    title: 'Entrepreneurs',
    description:
      'Existing and aspiring entrepreneurs looking for connections, guidance, visibility and opportunities.',
    image: entrepreneursImg,
    tag: 'Startups & MSME',
  },
  {
    id: 'students',
    title: 'Students and Young Professionals',
    description:
      'Young people interested in learning, volunteering, building skills and contributing to Bihar’s future.',
    image: studentsImg,
    tag: 'Youth & Skills',
  },
  {
    id: 'community',
    title: 'Community Organisations',
    description:
      'Organisations and groups working at the district, town, village or community level.',
    image: communityImg,
    tag: 'Grassroots Impact',
  },
  {
    id: 'researchers',
    title: 'Researchers and Knowledge Partners',
    description:
      'Individuals and institutions interested in research, documentation, knowledge sharing and sector development.',
    image: researchersImg,
    tag: 'Policy & Insights',
  },
  {
    id: 'media',
    title: 'Media and Content Professionals',
    description:
      'Media organisations, journalists, creators and communication professionals interested in development stories and initiatives.',
    image: mediaImg,
    tag: 'Narrative & Media',
  },
]

export default function WhoCanConnect() {
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="relative pt-2 sm:pt-4 lg:pt-5 pb-12 sm:pb-16 lg:pb-20 bg-[#FAF7F2] overflow-hidden">
      {/* Delicate, organic dappled leaf shadow in top-right corner (smoothly masked, no box edges) */}
      <div
        className="absolute top-0 right-0 w-[320px] sm:w-[420px] md:w-[480px] h-[190px] sm:h-[230px] md:h-[270px] pointer-events-none select-none z-0 overflow-hidden mix-blend-multiply opacity-30 [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_75%)]"
        aria-hidden="true"
      >
        <img
          src={leafShadowImg}
          alt=""
          className="w-full h-full object-cover object-right-top filter blur-[0.4px] contrast-95"
        />
      </div>

      {/* Subtle background ambient wash */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#17382E]/5 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── HEADER WITH ARTISTIC BRUSH UNDERLINE (MATCHING REFERENCE UI) ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 sm:mb-8">
          <div className="max-w-2xl">
            {/* Title with decorative brush stroke underline */}
            <div className="relative inline-block pb-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141A24] tracking-tight leading-tight">
                Who Can Connect With <span className="text-[#17382E]">Bihar Setu</span>
              </h2>

              {/* Hand-drawn yellow/orange brush underline from reference design */}
              <svg
                className="absolute -bottom-1 left-0 w-44 sm:w-56 h-3 text-[#F5A623] pointer-events-none"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8 C 50 2, 120 11, 197 5"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M15 10 C 65 5, 140 10, 185 7"
                  stroke="#E06222"
                  strokeWidth="1.5"
                  strokeOpacity="0.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Sub-headline & Description */}
            <p className="mt-3 text-[13px] sm:text-[14px] font-semibold text-[#17382E]">
              A Platform for People and Organisations Creating Meaningful Impact
            </p>
            <p className="mt-1 text-[12px] sm:text-[13px] text-[#64748B] leading-relaxed max-w-xl">
              Here are the key groups and stakeholders driving practical, collaborative progress across Bihar.
            </p>
          </div>

          {/* Navigation Scroll Buttons */}
          <div className="flex items-center gap-2 self-start md:self-end z-10">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full bg-white border border-slate-200 text-[#17382E] shadow-xs flex items-center justify-center hover:bg-[#17382E] hover:text-white hover:border-[#17382E] transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full bg-white border border-slate-200 text-[#17382E] shadow-xs flex items-center justify-center hover:bg-[#17382E] hover:text-white hover:border-[#17382E] transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── CAPSULE PILL CARDS (EXACT REFERENCE UI DESIGN) ── */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto lg:grid lg:grid-cols-8 gap-4 sm:gap-5 pb-6 pt-2 scroll-smooth no-scrollbar snap-x"
        >
          {stakeholderCategories.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-center shrink-0 w-[150px] sm:w-[165px] lg:w-auto snap-start cursor-pointer select-none"
            >
              {/* Stadium / Capsule Shaped Pill Image */}
              <div className="relative w-full aspect-[1/1.7] rounded-full overflow-hidden bg-[#E8E4DC] shadow-md group-hover:shadow-xl transition-all duration-300 ring-1 ring-black/5 group-hover:-translate-y-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Subtle soft vignette on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Hover overlay hint badge */}
                <div className="absolute inset-x-2 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[9px] font-bold text-[#17382E] shadow-xs truncate max-w-[120px]">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Topic Title (Centered below each capsule, per reference UI) */}
              <h3 className="mt-3.5 text-[12.5px] sm:text-[13px] lg:text-[13.5px] font-bold text-[#141A24] text-center group-hover:text-[#17382E] transition-colors leading-tight px-1 min-h-[34px] flex items-center justify-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
