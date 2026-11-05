import {
  Calendar,
  MapPin,
  Users,
  ShieldCheck,
  CheckCircle2,
  Building,
  Sparkles,
  Hotel,
  Compass,
  Utensils,
  TrendingUp,
  GraduationCap,
  Tv,
} from 'lucide-react'

const stakeholderIcons = {
  'Hotels & Resorts': Hotel,
  'Travel Agencies & Tour Operators': Compass,
  'DMCs': Building,
  'Government & Districts': ShieldCheck,
  'Chefs & F&B Teams': Utensils,
  'Investors': TrendingUp,
  'Institutes': GraduationCap,
  'Media': Tv,
}

export default function SummitOverview({ data }) {
  const {
    eyebrow,
    headline,
    lead,
    coreIdea,
    quickFacts,
    whoIsInTheRoom,
    invitationNotice,
  } = data

  const iconMap = {
    Calendar,
    MapPin,
    Users,
    ShieldCheck,
  }

  return (
    <section id="summit-overview" className="relative w-full bg-[#FAF6EE] py-16 sm:py-20 lg:py-24 border-b border-[#E8DCCF] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute -top-24 right-1/4 w-[500px] h-[400px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(195, 139, 52, 0.18) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute bottom-0 left-10 w-[450px] h-[350px] rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(55, 12, 1, 0.12) 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-6 h-[2px] bg-[#370C01] rounded-full shrink-0" />
            <span className="text-[10.5px] font-extrabold tracking-[0.22em] text-[#C38B34] uppercase">
              {eyebrow}
            </span>
          </div>
          <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-serif font-bold text-[#231515] leading-[1.12] tracking-[-0.02em]">
            {headline}
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#5C443C] leading-relaxed">
            {lead}
          </p>
        </div>

        {/* Core Idea Box + 4 Quick Fact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* THE CORE IDEA Callout Box (Left) */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-[#F2EADD] via-[#FAF6EE] to-white border border-[#E8DCCF] p-7 sm:p-8 shadow-xs flex flex-col justify-between relative overflow-hidden">
            {/* Top Amber Accent Bar */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#370C01] via-[#C38B34] to-[#E0A34B]" />

            <div>
              <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#370C01] uppercase block mb-3">
                {coreIdea.title}
              </span>

              <h3 className="text-[20px] sm:text-[24px] font-serif font-bold text-[#370C01] leading-snug">
                &ldquo;{coreIdea.quote}&rdquo;
              </h3>

              <p className="mt-4 text-[14px] sm:text-[15px] text-[#5C443C] leading-[1.75]">
                {coreIdea.body}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[#E8DCCF] flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[12.5px] font-bold text-[#231515]">
                Focus on Execution & Practical Solutions · Not Speeches Alone
              </span>
            </div>
          </div>

          {/* 4 Quick Facts Cards (Right 2x2 grid) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickFacts.map((fact) => {
              const IconComp = iconMap[fact.icon] || Calendar
              return (
                <div
                  key={fact.title}
                  className="p-5 rounded-2xl bg-white border border-[#E8DCCF] hover:border-[#C38B34] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] text-[#370C01] flex items-center justify-center mb-4 border border-[#E8DCCF]">
                    <IconComp className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-[15px] sm:text-[16px] font-bold text-[#231515] tracking-tight">
                      {fact.title}
                    </h4>
                    <p className="text-[12px] text-[#5C443C] mt-1 leading-snug">
                      {fact.subtitle}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

        {/* WHO IS IN THE ROOM Box (Full width bottom container matching Image 2) */}
        <div className="mt-8 rounded-2xl bg-white border border-[#E8DCCF] p-6 sm:p-7 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-stone-200/80">
            <div>
              <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#C38B34] uppercase block">
                STAKEHOLDER ECOSYSTEM
              </span>
              <h4 className="text-[18px] sm:text-[20px] font-serif font-bold text-[#231515] mt-0.5">
                Who Is in the Room
              </h4>
            </div>
            <span className="text-[12px] font-medium text-[#5C443C]">
              Connecting the entire tourism and hospitality value chain
            </span>
          </div>

          {/* 8 Stakeholder Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {whoIsInTheRoom.map((item) => {
              const IconComponent = stakeholderIcons[item] || CheckCircle2
              return (
                <div
                  key={item}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF6EE] hover:bg-[#F2EADD] border border-[#E8DCCF] transition-colors"
                >
                  <IconComponent className="w-4 h-4 text-[#C38B34] shrink-0" />
                  <span className="text-[12.5px] font-bold text-[#231515] leading-snug">
                    {item}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Official Invitation Footnote */}
          <div className="mt-5 pt-4 border-t border-stone-200/60 flex items-start gap-2.5 text-[11.5px] text-[#5C443C]">
            <Sparkles className="w-4 h-4 text-[#C38B34] shrink-0 mt-0.5" />
            <p>
              {invitationNotice}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

