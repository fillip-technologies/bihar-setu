import ContactHero from './components/ContactHero'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import { contactPageData } from '../../data/contactData'

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-[#FAF7F2] min-h-screen">
      {/* ── Section 1: Hero Section ── */}
      <ContactHero data={contactPageData.hero} />

      {/* ── Section 2: Form & Desks ── */}
      <section id="contact-form" className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct State Desks & Enquiry Stream Guidance */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28">
            <ContactInfo
              contactInfo={contactPageData.contactInfo}
              categories={contactPageData.enquiryCategories}
            />
          </div>

          {/* Right Column: Contact Form with All 10 Fields */}
          <div className="lg:col-span-7 xl:col-span-8">
            <ContactForm
              categories={contactPageData.enquiryCategories}
              districts={contactPageData.districts}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
