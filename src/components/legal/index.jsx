import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  ShieldCheck,
  FileText,
  Lock,
  CheckCircle2,
  Mail,
  Scale,
  ChevronRight,
  Sparkles,
} from 'lucide-react'

export default function LegalPage() {
  const location = useLocation()
  const isTermsRoute = location.pathname.includes('terms') || location.hash === '#terms'
  const [userTab, setUserTab] = useState(null)

  const activeTab = userTab ?? (isTermsRoute ? 'terms' : 'privacy')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-28 pb-20 selection:bg-[#17382E] selection:text-white">
      {/* Background subtle light ambient gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-b from-[#EBF5F0]/70 via-[#F3F9F6]/40 to-transparent rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#17382E] font-semibold">Legal & Transparency</span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5F0] border border-[#CDE5D9] text-[#17382E] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>Official Platform Policies</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Privacy Policy & <span className="text-[#17382E]">Terms of Use</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Bihar Setu operates with complete transparency, civic accountability, and respect for citizen privacy. Please review how we protect your information and govern collaborative platform use.
          </p>
          <p className="mt-2 text-xs text-slate-400 font-medium">
            Last updated: March 2026 • Valid for all 38 Districts & Partner Networks
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/90 shadow-inner">
            <button
              type="button"
              onClick={() => setUserTab('privacy')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'privacy'
                  ? 'bg-white text-[#17382E] shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
              <span>Privacy Policy</span>
            </button>
            <button
              type="button"
              onClick={() => setUserTab('terms')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'terms'
                  ? 'bg-white text-[#17382E] shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <FileText className="w-4 h-4 text-[#E06222]" />
              <span>Terms of Use</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PRIVACY POLICY CONTENT */}
        {activeTab === 'privacy' && (
          <div className="space-y-6">
            {/* Quick Summary Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F6FAF8] border border-[#D5EAE0] shadow-xs">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white text-[#0D9488] shrink-0 border border-[#D5EAE0] shadow-xs">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#17382E] mb-1.5">Our Privacy Commitment in Brief</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Bihar Setu does not sell, rent, or monetize your personal information. As an open civic bridge connecting citizens, educational institutions, grassroots changemakers, and enterprises across Bihar, data collected through forms is used solely to facilitate collaboration, inquiries, and platform security.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 mb-3">
                <span className="w-6 h-6 rounded-lg bg-[#EBF5F0] text-[#17382E] flex items-center justify-center text-xs font-black border border-[#CDE5D9]">
                  1
                </span>
                Information We Collect
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                We only collect information voluntarily provided by visitors when interacting with Bihar Setu services:
              </p>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-800">Contact Information:</strong> Name, email address, phone number, and organization when submitting inquiries or partnership proposals.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-800">District & Sector Preference:</strong> Selected district or sector (e.g., MSME, Tourism, Education) to route your inquiry to the relevant working group.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-800">Anonymous Telemetry:</strong> Non-personally identifiable metrics (browser type, device viewport, page views) used exclusively to maintain platform performance and accessibility.</span>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 mb-3">
                <span className="w-6 h-6 rounded-lg bg-[#EBF5F0] text-[#17382E] flex items-center justify-center text-xs font-black border border-[#CDE5D9]">
                  2
                </span>
                How We Use Your Information
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Information provided to Bihar Setu is processed strictly for civic and collaborative objectives:
              </p>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] shrink-0 mt-2" />
                  <span>Connecting stakeholders, institutional partners, and innovators with ongoing developmental initiatives across Bihar.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] shrink-0 mt-2" />
                  <span>Responding promptly to citizen queries, partnership proposals, and summit participation applications.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] shrink-0 mt-2" />
                  <span>Preventing fraudulent submissions, spam, and ensuring platform integrity for all community members.</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 mb-3">
                <span className="w-6 h-6 rounded-lg bg-[#EBF5F0] text-[#17382E] flex items-center justify-center text-xs font-black border border-[#CDE5D9]">
                  3
                </span>
                Data Protection & Storage
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We implement industry-standard encryption protocols (HTTPS/TLS) across all transmissions. Access to partner submissions is restricted to authorized coordinators tasked with facilitating developmental collaborations. We do not maintain unencrypted personal databases, and submissions are retained only as long as necessary for the purpose intended.
              </p>
            </div>

            {/* Section 4 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 mb-3">
                <span className="w-6 h-6 rounded-lg bg-[#EBF5F0] text-[#17382E] flex items-center justify-center text-xs font-black border border-[#CDE5D9]">
                  4
                </span>
                External Government & Partner Portals
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bihar Setu may feature curated links to official state government departments, schemes, universities, and enterprise hubs. Please note that external portals operate under their respective privacy policies and terms. We encourage citizens to review external policies when visiting third-party links.
              </p>
            </div>

            {/* Section 5 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 mb-3">
                <span className="w-6 h-6 rounded-lg bg-[#EBF5F0] text-[#17382E] flex items-center justify-center text-xs font-black border border-[#CDE5D9]">
                  5
                </span>
                Your Rights & Contact
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                You retain complete rights over your submitted data. You may request review, rectification, or deletion of any inquiry or submission at any time by contacting our privacy desk.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0D9488] shadow-xs">
                    <Mail className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Official Privacy Contact:</div>
                    <div className="text-sm font-bold text-slate-900">contact@biharsetu.org</div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="px-4 py-2.5 rounded-lg bg-[#17382E] hover:bg-[#112B23] text-white text-xs font-bold transition-colors shadow-xs"
                >
                  Contact Privacy Desk
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TERMS OF USE CONTENT */}
        {activeTab === 'terms' && (
          <div className="space-y-6">
            {/* Quick Summary Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF9F5] border border-[#FED7AA] shadow-xs">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white text-[#E06222] shrink-0 border border-[#FED7AA] shadow-xs">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#9A3412] mb-1.5">Terms of Platform Engagement</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    By accessing and using the Bihar Setu digital portal, you agree to these Terms of Use. Bihar Setu is dedicated to constructive, civic-minded collaboration and public welfare enablement across all 38 districts of Bihar.
                  </p>
                </div>
              </div>
            </div>

            {/* Term 1 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 mb-3">
                <span className="w-6 h-6 rounded-lg bg-[#FFF2EB] text-[#C2410C] flex items-center justify-center text-xs font-black border border-[#FFD8C4]">
                  1
                </span>
                Civic Purpose & Acceptance of Terms
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bihar Setu functions as an independent, transparent bridge bringing together citizens, researchers, industry mentors, and community organizations. Access to the portal is provided free of charge for non-commercial informational and collaborative purposes. Continued use signifies agreement with these terms.
              </p>
            </div>

            {/* Term 2 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 mb-3">
                <span className="w-6 h-6 rounded-lg bg-[#FFF2EB] text-[#C2410C] flex items-center justify-center text-xs font-black border border-[#FFD8C4]">
                  2
                </span>
                Responsible Community Participation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                When using Bihar Setu communication channels or submitting partnership interest, users agree to:
              </p>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E06222] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-800">Accurate Credentials:</strong> Provide accurate, verifiable details regarding organizations, credentials, or project ideas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E06222] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-800">Constructive Dialogue:</strong> Refrain from submitting defamatory, fraudulent, unlawful, or racially/culturally offensive material.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E06222] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-800">Respect Intellectual Property:</strong> Respect the intellectual contributions and shared resources of collaborating organizations.</span>
                </li>
              </ul>
            </div>

            {/* Term 3 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 mb-3">
                <span className="w-6 h-6 rounded-lg bg-[#FFF2EB] text-[#C2410C] flex items-center justify-center text-xs font-black border border-[#FFD8C4]">
                  3
                </span>
                Information Accuracy & Disclaimers
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                While we make every effort to maintain accurate, up-to-date information on state initiatives, focus sectors, and developmental statistics, Bihar Setu provides data for informational guidance. Official schemes and legal benefits are governed by the respective statutory authorities and government notifications.
              </p>
            </div>

            {/* Term 4 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 mb-3">
                <span className="w-6 h-6 rounded-lg bg-[#FFF2EB] text-[#C2410C] flex items-center justify-center text-xs font-black border border-[#FFD8C4]">
                  4
                </span>
                Intellectual Property & Open Collaboration
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Brand assets, layout design, and curated content belonging to Bihar Setu are protected. However, public welfare statistics, regional developmental data, and general educational insights are curated to foster open collaboration and community benefit.
              </p>
            </div>

            {/* Term 5 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 mb-3">
                <span className="w-6 h-6 rounded-lg bg-[#FFF2EB] text-[#C2410C] flex items-center justify-center text-xs font-black border border-[#FFD8C4]">
                  5
                </span>
                Modifications & Contact
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Bihar Setu reserves the right to update these terms as platform initiatives expand. Changes are effective immediately upon posting to this page.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#E06222] shadow-xs">
                    <Mail className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Inquiries Regarding Terms:</div>
                    <div className="text-sm font-bold text-slate-900">contact@biharsetu.org</div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="px-4 py-2.5 rounded-lg bg-[#17382E] hover:bg-[#112B23] text-white text-xs font-bold transition-colors shadow-xs"
                >
                  Contact Legal Desk
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Back to Home Quick Link */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900 transition-all border border-slate-200"
          >
            <span>← Return to Bihar Setu Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
