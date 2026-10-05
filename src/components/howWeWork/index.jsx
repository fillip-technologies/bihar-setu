import HowWeWorkHero from './components/HowWeWorkHero'
import HowWeWorkPillars from './components/HowWeWorkPillars'
import HowWeWorkProcess from './components/HowWeWorkProcess'
import HowWeWorkCTA from './components/HowWeWorkCTA'
import { howWeWorkData } from '../../data/howWeWorkData'

export default function HowWeWorkPage() {
  return (
    <div className="flex flex-col w-full bg-[#FAF7F2] min-h-screen">
      {/* ── Section 1: Hero ── */}
      <HowWeWorkHero data={howWeWorkData.hero} />

      {/* ── Section 2: Operational Highlights Strip ── */}
      <HowWeWorkPillars metrics={howWeWorkData.hero.metrics} />

      {/* ── Section 3: A Clear and Collaborative Process (Zigzag) ── */}
      <HowWeWorkProcess data={howWeWorkData.process} />

      {/* ── Section 4: CTA Banner ── */}
      <HowWeWorkCTA data={howWeWorkData.cta} />
    </div>
  )
}
