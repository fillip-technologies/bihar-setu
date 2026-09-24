import {
  Search,
  BookOpen,
  Link2,
  PenTool,
  Handshake,
  Rocket,
  BarChart2,
  ArrowRight,
} from 'lucide-react'

// ─────────────────────────────────────────────
// Inline data — 7 process steps
// ─────────────────────────────────────────────
const steps = [
  {
    id: 'identify',
    number: '01',
    label: 'Identify',
    icon: Search,
    color: '#E06222',
    bgTint: 'bg-[#FDF0E6]',
    borderColor: 'border-[#F9C49A]',
    description:
      'We identify a challenge, opportunity or development requirement within a particular sector or community.',
  },
  {
    id: 'understand',
    number: '02',
    label: 'Understand',
    icon: BookOpen,
    color: '#2563EB',
    bgTint: 'bg-[#EBF3FE]',
    borderColor: 'border-[#93C5FD]',
    description:
      'We collect relevant information, stakeholder perspectives and ground-level insights to understand the subject properly.',
  },
  {
    id: 'connect',
    number: '03',
    label: 'Connect',
    icon: Link2,
    color: '#16A34A',
    bgTint: 'bg-[#EAF7EE]',
    borderColor: 'border-[#86EFAC]',
    description:
      'We bring together the institutions, industries, professionals, experts and communities relevant to the initiative.',
  },
  {
    id: 'design',
    number: '04',
    label: 'Design',
    icon: PenTool,
    color: '#7C3AED',
    bgTint: 'bg-[#F4F0FD]',
    borderColor: 'border-[#C4B5FD]',
    description:
      'We develop a structured summit, campaign, programme, consultation, digital platform or implementation plan.',
  },
  {
    id: 'collaborate',
    number: '05',
    label: 'Collaborate',
    icon: Handshake,
    color: '#D97706',
    bgTint: 'bg-[#FEF3E7]',
    borderColor: 'border-[#FCD34D]',
    description:
      'We build meaningful partnerships with organisations, experts, institutions and implementation partners.',
  },
  {
    id: 'implement',
    number: '06',
    label: 'Implement',
    icon: Rocket,
    color: '#0284C7',
    bgTint: 'bg-[#E0F2FE]',
    borderColor: 'border-[#7DD3FC]',
    description:
      'We convert the plan into organised action with defined responsibilities, timelines and expected outcomes.',
  },
  {
    id: 'measure',
    number: '07',
    label: 'Measure',
    icon: BarChart2,
    color: '#17382E',
    bgTint: 'bg-[#E8F5F0]',
    borderColor: 'border-[#6EE7B7]',
    description:
      'We evaluate participation, progress, outcomes and the long-term value created through the initiative.',
  },
]

// ─────────────────────────────────────────────
// Single Step Card
// ─────────────────────────────────────────────
function StepCard({ step, index, isLast }) {
  const IconComp = step.icon
  const isEven = index % 2 === 0

  return (
    <div className={`relative flex flex-col ${isEven ? 'mt-0' : 'mt-8 xl:mt-12'}`}>
      {/* Connector line to next step (hidden on last) */}
      {!isLast && (
        <div
          className="hidden xl:block absolute top-[28px] left-[calc(100%+0px)] w-full z-0 pointer-events-none"
          style={{ width: 'calc(100% - 56px)', left: '56px' }}
        >
          <svg
            viewBox="0 0 100 12"
            preserveAspectRatio="none"
            className="w-full h-3"
          >
            <line
              x1="0"
              y1="6"
              x2="88"
              y2="6"
              stroke="#D1C9BC"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <polygon points="88,2 98,6 88,10" fill="#D1C9BC" />
          </svg>
        </div>
      )}

      {/* Card */}
      <div
        className={`group relative flex flex-col bg-white rounded-2xl border ${step.borderColor} overflow-hidden hover:shadow-lg hover:shadow-black/6 hover:-translate-y-1 transition-all duration-300 cursor-default h-full`}
      >
        {/* Colored top bar */}
        <div className="h-[3px] w-full" style={{ backgroundColor: step.color }} />

        <div className="p-4 flex flex-col gap-2.5 flex-1">
          {/* Number + Icon row */}
          <div className="flex items-center justify-between">
            {/* Large step number */}
            <span
              className="text-[28px] xl:text-[32px] font-black leading-none tracking-tight select-none"
              style={{
                color: step.color,
                opacity: 0.18,
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {step.number}
            </span>

            {/* Icon bubble */}
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${step.bgTint} group-hover:scale-110 transition-transform duration-200`}
              style={{ color: step.color }}
            >
              <IconComp className="w-4 h-4 stroke-[2.2]" />
            </div>
          </div>

          {/* Step label */}
          <div className="flex items-center gap-1.5">
            <span
              className="text-[9.5px] font-extrabold tracking-[0.18em] uppercase"
              style={{ color: step.color }}
            >
              {step.label}
            </span>
          </div>

          {/* Description */}
          <p className="text-[11px] sm:text-[11.5px] text-[#64748B] leading-[1.7] flex-1">
            {step.description}
          </p>

          {/* Arrow */}
          <div className="flex items-center mt-1">
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center border transition-all group-hover:translate-x-0.5"
              style={{ color: step.color, borderColor: `${step.color}40` }}
            >
              <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Main Section
// ─────────────────────────────────────────────
export default function HowWeWork() {
  return (
    <section className="relative w-full bg-[#F5F1EA] overflow-hidden border-t border-stone-200/70">

      {/* ── Background Decoration ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Top-left saffron wash */}
        <div
          className="absolute -top-32 -left-16 w-[500px] h-[400px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              'radial-gradient(circle, rgba(249,115,22,0.09) 0%, rgba(245,158,11,0.04) 50%, transparent 70%)',
          }}
        />
        {/* Bottom-right forest wash */}
        <div
          className="absolute -bottom-20 right-0 w-[420px] h-[360px] rounded-full blur-3xl opacity-25"
          style={{
            background:
              'radial-gradient(circle, rgba(23,56,46,0.08) 0%, transparent 65%)',
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(#17382E 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Large watermark number */}
        <span className="absolute -right-4 top-0 text-[220px] xl:text-[260px] font-black text-[#17382E]/[0.025] leading-none select-none tracking-tighter pointer-events-none">
          07
        </span>
      </div>

      {/* ── HEADER ── */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-10 pb-6 sm:pt-12 sm:pb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">

          {/* Left: eyebrow + title + description */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-5 h-[2px] bg-[#E06222] rounded-full shrink-0" />
              <span className="text-[9.5px] font-extrabold tracking-[0.22em] text-[#8C5E35] uppercase">
                How We Work
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-[#111827] leading-[1.15] tracking-[-0.02em]">
              From an Idea to{' '}
              <span className="text-[#E06222]">Measurable Impact</span>
            </h2>

            {/* Description */}
            <p className="mt-2 text-[11.5px] sm:text-[12px] text-[#475569] leading-[1.7] max-w-xl">
              Bihar Setu follows a structured approach to ensure that ideas move beyond discussion
              and develop into practical, collaborative and impact-oriented initiatives.
            </p>
          </div>

          {/* Right: step count badge */}
          <div className="hidden lg:flex items-center gap-3 shrink-0 mb-1">
            <div className="flex items-center gap-1">
              {steps.map((s) => (
                <span
                  key={s.id}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: s.color }}
                />
              ))}
            </div>
            <span className="text-[11px] font-semibold text-[#94A3B8] tracking-wide">
              7-Step Process
            </span>
          </div>
        </div>
      </div>

      {/* ── STEPS GRID ── */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pb-10 sm:pb-12">

        {/* Desktop: 7 in a single row with stagger | Mobile/tablet: 2-col grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-3.5">
          {steps.map((step, i) => (
            <StepCard
              key={step.id}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>

        {/* Flow label strip — desktop only */}
        <div className="hidden xl:flex items-center justify-between mt-4 px-1">
          <span className="text-[10px] font-semibold text-[#94A3B8] tracking-widest uppercase">
            ← Start
          </span>
          <div className="flex-1 mx-4 border-t border-dashed border-stone-300/80" />
          <span className="text-[10px] font-semibold text-[#17382E] tracking-widest uppercase">
            Impact →
          </span>
        </div>
      </div>

    </section>
  )
}
