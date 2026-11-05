import { useState } from 'react'
import { Calendar, Handshake } from 'lucide-react'
import SummitRegistration from '../../summit/components/SummitRegistration'
import PartnerForm from '../../partner/components/PartnerForm'
import { summitPageData } from '../../../data/summitData'
import { partnerPageData } from '../../../data/partnerData'

export default function HomeFormsSection() {
  // 'summit' is active by default as requested
  const [activeTab, setActiveTab] = useState('summit')

  return (
    <section id="connect-and-register" className="relative w-full bg-[#FAF6EE] py-14 sm:py-18 lg:py-22 border-b border-[#E8DCCF] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute -top-24 right-1/4 w-[500px] h-[350px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(195, 139, 52, 0.15) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute -bottom-24 left-1/4 w-[500px] h-[350px] rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(55, 12, 1, 0.12) 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Switcher Header & Navigation */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-5 h-[2px] bg-[#370C01] rounded-full" />
            <span className="text-[10.5px] sm:text-[11px] font-extrabold tracking-[0.2em] text-[#C38B34] uppercase">
              Connect · Register · Collaborate
            </span>
            <span className="w-5 h-[2px] bg-[#370C01] rounded-full" />
          </div>

          {/* Heading */}
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-serif font-bold text-[#231515] tracking-tight leading-tight">
            Engage with <span className="text-[#370C01]">Bihar Setu</span>
          </h2>
          <p className="mt-2 text-[14px] sm:text-[15px] text-[#5C443C] max-w-xl mx-auto leading-relaxed">
            Select your preferred engagement below — register for the flagship Tourism Summit or submit a partnership proposal.
          </p>

          {/* Switchable Pill Bar */}
          <div className="mt-6 p-1.5 rounded-2xl bg-[#EFE8DC] border border-[#E0D5C3] inline-flex items-center gap-1.5 sm:gap-2 shadow-inner max-w-full">
            <button
              type="button"
              onClick={() => setActiveTab('summit')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-[12.5px] sm:text-[13.5px] transition-all duration-200 cursor-pointer ${
                activeTab === 'summit'
                  ? 'bg-[#370C01] text-white shadow-md'
                  : 'text-[#5C443C] hover:text-[#231515] hover:bg-white/60'
              }`}
            >
              <Calendar className={`w-4 h-4 ${activeTab === 'summit' ? 'text-[#E0A34B]' : 'text-[#8A7268]'}`} />
              <span>Tourism Summit 2026 Registration</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('partner')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-[12.5px] sm:text-[13.5px] transition-all duration-200 cursor-pointer ${
                activeTab === 'partner'
                  ? 'bg-[#370C01] text-white shadow-md'
                  : 'text-[#5C443C] hover:text-[#231515] hover:bg-white/60'
              }`}
            >
              <Handshake className={`w-4 h-4 ${activeTab === 'partner' ? 'text-[#E0A34B]' : 'text-[#8A7268]'}`} />
              <span>Partner with Bihar Setu</span>
            </button>
          </div>
        </div>

        {/* Dynamic Form View Container */}
        <div className="transition-opacity duration-300">
          {activeTab === 'summit' ? (
            <div className="animate-fadeIn">
              <SummitRegistration
                data={summitPageData.registration}
                className="relative w-full overflow-hidden"
              />
            </div>
          ) : (
            <div className="animate-fadeIn">
              <PartnerForm
                formDataProp={partnerPageData.form}
                className="relative w-full pt-0"
              />
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
