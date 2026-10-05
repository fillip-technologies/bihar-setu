import { Link } from 'react-router-dom'
import { ArrowRight, Lightbulb } from 'lucide-react'

export default function InitiativesCTA() {
  return (
    <section className="relative py-20 bg-[#0B1E18] text-white overflow-hidden border-t border-[#17382E]">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#06B6D4]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#E06222]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17382E] border border-[#34D399]/40 text-[#34D399] text-xs font-bold uppercase tracking-wider mb-6">
          <Lightbulb className="w-3.5 h-3.5 text-[#F5A623]" />
          <span>Propose a New Initiative</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
          Have an Idea That Can Empower <span className="text-[#34D399]">Bihar</span>?
        </h2>

        <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
          Whether you are developing a community project, a rural technology tool, or an educational intervention, Bihar Setu provides the collaborative framework to scale your vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/partner-with-us"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#E06222] hover:bg-[#EA580C] text-white font-bold text-sm tracking-wide shadow-xl shadow-[#E06222]/30 transition-all hover:scale-[1.02] active:scale-95 text-center"
          >
            <span>Submit Your Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all hover:scale-[1.02] active:scale-95 text-center"
          >
            <span>Connect with Secretariat</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
