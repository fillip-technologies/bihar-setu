import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar,
  MapPin,
  ArrowRight,
  TrendingUp,
  Tag,
  Sparkles,
} from 'lucide-react'

export default function InitiativesGrid({ categories, items }) {
  const [selectedCategory, setSelectedCategory] = useState('All Initiatives')

  const filteredItems =
    selectedCategory === 'All Initiatives'
      ? items
      : items.filter((item) => item.category === selectedCategory)

  return (
    <section id="initiatives-catalog" className="py-16 sm:py-20 bg-[#FAF7F2] text-slate-900 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17382E]/10 border border-[#17382E]/20 text-[#17382E] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E06222]" />
            <span>Statewide Portfolios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-4">
            Active & Upcoming <span className="text-[#17382E]">Initiatives</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every initiative is designed with measurable milestones, multi-stakeholder participation, and deep regional resonance across Bihar’s 38 districts.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#17382E] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-[#17382E]/30 transition-all duration-300"
            >
              <div>
                {/* Status & Category Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#17382E] bg-[#EAF5F1] px-2.5 py-1 rounded-md border border-[#C5E5D8]">
                    {item.category}
                  </span>
                  <span
                    className={`text-[10.5px] font-bold px-2 py-0.5 rounded-full ${
                      item.status === 'Active'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : item.status === 'Upcoming'
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : 'bg-cyan-100 text-cyan-800 border border-cyan-200'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#17382E] transition-colors leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Metadata */}
                <div className="space-y-1.5 text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#E06222] shrink-0" />
                    <span>{item.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Impact Highlight */}
                <div className="p-3 rounded-xl bg-[#F6FAF8] border border-[#D5EAE0] mb-5">
                  <div className="flex items-start gap-2 text-xs text-[#17382E] font-medium leading-relaxed">
                    <TrendingUp className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span><strong>Projected Impact:</strong> {item.impact}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Tags & CTA */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[10.5px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md font-medium"
                    >
                      <Tag className="w-2.5 h-2.5 text-slate-400" />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>

                <Link
                  to="/partner-with-us"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-[#17382E] text-slate-700 hover:text-white border border-slate-200 hover:border-[#17382E] text-xs font-bold transition-all group/btn"
                >
                  <span>Support or Participate</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
