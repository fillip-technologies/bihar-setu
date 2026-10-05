import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import cultureImg from '../../../assets/focus-areas/culture.jpg'

export default function FocusCulture({ data }) {
  const {
    num,
    title,
    description,
    ctaAction,
  } = data

  const keyPoints = [
    {
      title: 'Heritage Preservation',
      desc: 'Restoring historical monuments, sacred pilgrimage sites, ancient stupas, and state cultural archives.',
    },
    {
      title: 'Linguistic Heritage',
      desc: 'Celebrating and revitalizing regional languages including Bhojpuri, Maithili, Magahi, and Angika.',
    },
    {
      title: 'Traditional Arts & Crafts',
      desc: 'Supporting artisan guilds for Madhubani painting, Tikuli art, Sikki grass weaving, and stone carving.',
    },
    {
      title: 'Festivals & Living Traditions',
      desc: 'Global promotion of Chhath Puja, Rajgir Mahotsav, classical folk traditions, and sacred seasonal rituals.',
    },
    {
      title: 'Culinary & Folk Literature',
      desc: 'Documenting indigenous Bihari cuisine, oral folk histories, rural theatre, and literary renaissance.',
    },
  ]

  return (
    <section
      id="culture-heritage"
      className="relative w-full bg-[#FAF7F2] border-b border-stone-200/80 py-14 sm:py-18 lg:py-22 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ── Left Side: Image (Alternating Layout) ── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[460px] sm:max-w-[480px] lg:max-w-[500px]">
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D97706]/15 to-[#17382E]/15 rounded-[32px] blur-xl opacity-60 pointer-events-none" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200/90 aspect-[16/11] sm:aspect-[4/3] w-full bg-stone-100 group">
                <img
                  src={cultureImg}
                  alt="Traditional cultural pilgrimage and folk celebration at sunrise in Bihar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* ── Right Side: Topic Title & Little Describe ── */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            {/* Sector Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#D97706] rounded-full shrink-0" />
              <span className="text-[11px] font-extrabold tracking-[0.22em] text-[#8C5E35] uppercase font-sans">
                Sector {num || '08'} • Priority Focus Area
              </span>
            </div>

            {/* Topic Title */}
            <h2 className="text-[30px] sm:text-[40px] lg:text-[44px] font-serif font-bold text-[#111827] leading-[1.15] tracking-[-0.02em]">
              {title}
            </h2>

            {/* Little Describe (Core Mission Copy) */}
            <p className="mt-4 text-[15.5px] sm:text-[16.5px] text-[#374151] leading-[1.75] font-normal">
              {description}
            </p>

            {/* Concise Bullet Highlights */}
            <div className="mt-6 space-y-3.5 pt-2">
              {keyPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#D97706]/10 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <div className="text-[13.5px] sm:text-[14px] leading-snug">
                    <span className="font-bold text-[#111827]">{point.title}: </span>
                    <span className="text-[#556376]">{point.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-6 border-t border-stone-200/80 flex items-center">
              <Link
                to={ctaAction?.path || '/initiatives#summit-registration-form'}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#17382E] text-white text-[13px] sm:text-[13.5px] font-bold hover:bg-[#D97706] transition-colors duration-200 shadow-sm"
              >
                <span>{ctaAction?.label || 'Register for Cultural Summit'}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
