import {
  Building2,
  Mail,
  Phone,
  Globe,
  Clock,
  CheckCircle,
  HelpCircle,
  ArrowUpRight,
} from 'lucide-react'

const iconMap = {
  Building2,
  Mail,
  Phone,
  Globe,
}

export default function ContactInfo({ contactInfo, categories }) {
  return (
    <div className="space-y-6">
      {/* ── Official Contact Channels Card ── */}
      <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-6 sm:p-7">
        <div className="flex items-center gap-2 mb-5 pb-3 border-b border-stone-100">
          <span className="w-2 h-2 rounded-full bg-[#E06222]" />
          <h3 className="text-[17px] font-serif font-bold text-[#111827]">
            Direct State Desks
          </h3>
        </div>

        <div className="space-y-5">
          {contactInfo.map((item, idx) => {
            const Icon = iconMap[item.icon] || Building2
            return (
              <div key={idx} className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-stone-200 flex items-center justify-center text-[#17382E] shrink-0 group-hover:bg-[#17382E] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-[13.5px] font-bold text-[#111827]">
                      {item.title}
                    </h4>
                    {item.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C5E35] bg-[#FAF7F2] border border-stone-200 px-2 py-0.5 rounded-full shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[13px] text-[#475569] leading-relaxed break-words">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Turnaround Badge */}
        <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-[12px] text-[#64748B]">
          <Clock className="w-4 h-4 text-[#E06222] shrink-0" />
          <span>Operational Hours: Monday – Saturday (9:00 AM to 6:00 PM IST)</span>
        </div>
      </div>

      {/* ── Enquiry Categories Explainer Card ── */}
      <div className="bg-[#FAF7F2] rounded-2xl border border-stone-200/90 p-6 sm:p-7">
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="w-4 h-4 text-[#17382E]" />
          <h3 className="text-[15px] font-serif font-bold text-[#111827]">
            Enquiry Streams We Handle
          </h3>
        </div>
        <p className="text-[12.5px] text-[#64748B] mb-4">
          Select the category best aligned with your requirement to expedite routing to the correct state cell:
        </p>

        <ul className="space-y-2 text-[12.5px] text-[#374151]">
          {categories.map((cat, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
              <span className="font-medium text-[#111827]">{cat}</span>
            </li>
          ))}
        </ul>

        {/* Knowledge & Documentation note */}
        <div className="mt-5 pt-4 border-t border-stone-200/80">
          <a
            href="mailto:connect@biharsetu.in"
            className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#17382E] hover:text-[#E06222] transition-colors"
          >
            <span>Have an institutional pitch deck? Email us directly</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
