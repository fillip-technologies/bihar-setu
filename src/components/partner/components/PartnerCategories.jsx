import {
  Landmark,
  GraduationCap,
  Briefcase,
  Cpu,
  FileSearch,
  ClipboardCheck,
  Video,
  Users2,
  Sprout,
  ArrowRight,
} from 'lucide-react'

import institutionsImg from '../../../assets/stakeholders/institutions.jpg'
import knowledgeImg from '../../../assets/stakeholders/professionals.jpg'
import corporateImg from '../../../assets/stakeholders/businesses.jpg'
import technologyImg from '../../../assets/sectors/technology.jpg'
import researchImg from '../../../assets/stakeholders/researchers.jpg'
import implementationImg from '../../../assets/focus-areas/women.jpg'
import mediaImg from '../../../assets/stakeholders/media.jpg'
import communityImg from '../../../assets/stakeholders/community.jpg'
import csrImg from '../../../assets/partner/csr-partner.jpg'

const imageMap = {
  institutional: institutionsImg,
  knowledge: knowledgeImg,
  corporate: corporateImg,
  technology: technologyImg,
  research: researchImg,
  implementation: implementationImg,
  media: mediaImg,
  community: communityImg,
  csr: csrImg,
}

const iconMap = {
  Landmark,
  GraduationCap,
  Briefcase,
  Cpu,
  FileSearch,
  ClipboardCheck,
  Video,
  Users2,
  Sprout,
}

export default function PartnerCategories({
  sectionData,
  categories,
  onSelectCategory,
}) {
  const { title, highlight, subtitle } = sectionData

  const handleCardClick = (catTitle) => {
    if (onSelectCategory) {
      onSelectCategory(catTitle)
    }
    const element = document.querySelector('#partnership-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="partnership-categories"
      aria-labelledby="partner-categories-heading"
      className="relative py-12 sm:py-16 bg-[#FAF7F2]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Eyebrow removed) */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <h2
            id="partner-categories-heading"
            className="text-[28px] sm:text-[36px] lg:text-[42px] font-serif font-bold text-[#111827] leading-[1.15] tracking-[-0.02em]"
          >
            {title}{' '}
            <span className="text-[#A15D1C] font-serif font-bold">
              {highlight}
            </span>
          </h2>

          <p className="mt-2.5 text-[14px] sm:text-[15px] text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
            {subtitle}
          </p>
        </div>

        {/* 3x3 Cards Grid (Decreased Card Height) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Landmark
            const imgSrc = imageMap[cat.id]

            return (
              <div
                key={cat.id}
                onClick={() => handleCardClick(cat.title)}
                className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Photo Container (Reduced height from h-48/52 to h-36/40) */}
                  <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-stone-100">
                    <img
                      src={imgSrc}
                      alt={cat.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Overlapping Floating Icon Badge */}
                  <div className="-mt-5 ml-5 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-md border border-stone-100 flex items-center justify-center text-[#17382E] group-hover:bg-[#17382E] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-4.5 h-4.5 stroke-[2]" />
                    </div>
                  </div>

                  {/* Content with Aligned Arrow */}
                  <div className="p-5 pt-2.5 pb-4">
                    <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-[#111827] group-hover:text-[#A15D1C] transition-colors leading-snug">
                      {cat.title}
                    </h3>
                    <div className="mt-1.5 flex items-end justify-between gap-3">
                      <p className="text-[12.5px] text-[#64748B] leading-relaxed flex-1">
                        {cat.desc}
                      </p>
                      <div className="w-7 h-7 rounded-full bg-[#FAF7F2] border border-stone-200 flex items-center justify-center text-[#8C5E35] group-hover:bg-[#A15D1C] group-hover:text-white group-hover:border-[#A15D1C] transition-all duration-200 shadow-2xs shrink-0 mb-0.5">
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.2] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
