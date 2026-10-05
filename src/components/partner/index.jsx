import { useState } from 'react'
import PartnerHero from './components/PartnerHero'
import PartnerPillars from './components/PartnerPillars'
import PartnerCategories from './components/PartnerCategories'
import PartnerWhy from './components/PartnerWhy'
import PartnerForm from './components/PartnerForm'
import PartnerSubmitIdea from './components/PartnerSubmitIdea'
import { partnerPageData } from '../../data/partnerData'

export default function PartnerPage() {
  const [selectedCategory, setSelectedCategory] = useState('')

  return (
    <div className="flex flex-col w-full bg-[#FAF7F2] min-h-screen">
      {/* ── Section 1: Hero Section ── */}
      <PartnerHero data={partnerPageData.hero} />

      {/* ── Section 2: 4 Key Value Pillars Strip ── */}
      <PartnerPillars pillars={partnerPageData.pillars} />

      {/* ── Section 3: Explore Partnership Opportunities (9 Categories) ── */}
      <PartnerCategories
        sectionData={partnerPageData.categoriesSection}
        categories={partnerPageData.partnershipCategories}
        onSelectCategory={setSelectedCategory}
      />

      {/* ── Section 4: Why Partner with Bihar Setu? ── */}
      <PartnerWhy data={partnerPageData.whyPartner} />

      {/* ── Section 5: Partnership Interest Form (Let's Collaborate) ── */}
      <PartnerForm
        formDataProp={partnerPageData.form}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* ── Section 6: Submit an Idea Banner ── */}
      <PartnerSubmitIdea data={partnerPageData.submitIdea} />
    </div>
  )
}
