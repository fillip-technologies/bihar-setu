import AboutHero from './components/AboutHero'
import AboutWhyBiharSetu from './components/AboutWhyBiharSetu'
import AboutVision from './components/AboutVision'
import AboutMission from './components/AboutMission'
import AboutCTA from './components/AboutCTA'
import { aboutPageData } from '../../data/aboutData'

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[#FAF7F2]">
      {/* ── Section 1: Hero Section ── */}
      <AboutHero data={aboutPageData.hero} />

      {/* ── Section 2: Why Bihar Setu (Every Gap Needs a Bridge & The 6 Bridges) ── */}
      <AboutWhyBiharSetu data={aboutPageData.whyBiharSetu} />

      {/* ── Section 3: Our Vision (Connected, Collaborative, Opportunity-Driven Bihar) ── */}
      <AboutVision data={aboutPageData.vision} />

      {/* ── Section 4: Our Mission (Turning Connections Into Meaningful Action - 7 Action Pillars) ── */}
      <AboutMission data={aboutPageData.mission} />

      {/* ── Section 5: Call to Action / Bridge the Gap ── */}
      <AboutCTA data={aboutPageData.cta} />
    </div>
  )
}
