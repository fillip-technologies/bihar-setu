import { useState } from 'react'
import {
  User,
  Building,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2,
  RotateCcw,
  Calendar,
  Layers,
  Copy,
  Check,
  Sparkles,
} from 'lucide-react'
import { summitPageData } from '../../../data/summitData'

export default function SummitRegistration({ data = summitPageData.registration, className }) {
  const {
    eyebrow,
    title,
    subtitle,
    categories,
    roles,
    districts,
  } = data

  const [formData, setFormData] = useState({
    fullName: '',
    organisationName: '',
    designation: '',
    mobileNumber: '',
    email: '',
    district: 'Patna',
    category: categories[0] || '',
    role: roles[0] || '',
    message: '',
    consent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [passId, setPassId] = useState('')
  const [copied, setCopied] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const validate = () => {
    const errs = {}
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.'
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.'
    }
    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile number is required.'
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.mobileNumber.trim())) {
      errs.mobileNumber = 'Please enter a valid 10-digit mobile number.'
    }
    if (!formData.consent) {
      errs.consent = 'Please confirm your consent to receive summit communications.'
    }
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      const generatedPass = `BST-2026-${Math.floor(100000 + Math.random() * 900000)}`
      setPassId(generatedPass)
      setIsSubmitting(false)
      setSubmitSuccess(true)
    }, 1100)
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      organisationName: '',
      designation: '',
      mobileNumber: '',
      email: '',
      district: 'Patna',
      category: categories[0] || '',
      role: roles[0] || '',
      message: '',
      consent: false,
    })
    setSubmitSuccess(false)
    setPassId('')
    setErrors({})
  }

  const handleCopy = () => {
    if (!passId) return
    navigator.clipboard.writeText(passId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="summit-registration"
      className={className || "relative w-full bg-[#F2EADD] py-16 sm:py-20 lg:py-24 border-b border-[#E8DCCF] overflow-hidden"}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-6 h-[2px] bg-[#370C01] rounded-full shrink-0" />
            <span className="text-[10.5px] font-extrabold tracking-[0.22em] text-[#C38B34] uppercase">
              {eyebrow}
            </span>
            <span className="w-6 h-[2px] bg-[#370C01] rounded-full shrink-0" />
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-serif font-bold text-[#231515] leading-[1.14] tracking-[-0.02em]">
            {title}
          </h2>
          <p className="mt-3 text-[14.5px] sm:text-[15.5px] text-[#5C443C] leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E8DCCF] p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          {/* Top Amber Accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#370C01] via-[#C38B34] to-[#E0A34B]" />

          {submitSuccess ? (
            /* Success Confirmation & Pass Card */
            <div className="text-center py-8 sm:py-12 max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mx-auto mb-5 border border-[#10B981]/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="px-3 py-1 rounded-full bg-[#FAF6EE] text-[#C38B34] border border-[#E8DCCF] text-[11px] font-bold tracking-wider uppercase inline-block mb-2">
                Registration Confirmed
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#231515]">
                Welcome to Bihar Setu Tourism Summit 2026
              </h3>

              <p className="mt-2 text-[14px] text-[#5C443C] leading-relaxed">
                Thank you, <strong className="text-[#231515]">{formData.fullName}</strong>. Your registration application has been logged for <strong className="text-[#370C01]">7th & 8th December 2026</strong> at Urja Auditorium, Patna.
              </p>

              {/* Delegate Pass Card */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#FAF6EE] via-white to-[#FAF6EE] border border-[#C38B34]/40 shadow-md text-left">
                <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C38B34]">
                      DELEGATE PASS ID
                    </span>
                    <p className="text-2xl font-mono font-bold text-[#370C01] tracking-wider mt-0.5">
                      {passId}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E8DCCF] hover:bg-[#FAF6EE] text-[12px] font-semibold text-[#231515] transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy ID'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[12px]">
                  <div>
                    <span className="text-[#8A7268] block">Role:</span>
                    <strong className="text-[#231515]">{formData.role}</strong>
                  </div>
                  <div>
                    <span className="text-[#8A7268] block">Category:</span>
                    <strong className="text-[#231515]">{formData.category}</strong>
                  </div>
                  <div>
                    <span className="text-[#8A7268] block">District:</span>
                    <strong className="text-[#231515]">{formData.district}</strong>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#370C01] hover:bg-[#260800] text-white text-[13px] font-bold shadow-md transition-all duration-200 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Register Another Delegate</span>
                </button>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Full Name */}
                <div>
                  <label className="block text-[13px] font-bold text-[#231515] mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Ramesh Kumar"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-[13.5px] bg-[#FAF6EE]/50 focus:bg-white focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-[#E8DCCF] focus:border-[#C38B34]'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[13px] font-bold text-[#231515] mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ramesh@hospitalitybihar.com"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-[13.5px] bg-[#FAF6EE]/50 focus:bg-white focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#E8DCCF] focus:border-[#C38B34]'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-[13px] font-bold text-[#231515] mb-1.5">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="e.g. +91 9876543210"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-[13.5px] bg-[#FAF6EE]/50 focus:bg-white focus:outline-none transition-colors ${
                        errors.mobileNumber ? 'border-red-500 focus:border-red-500' : 'border-[#E8DCCF] focus:border-[#C38B34]'
                      }`}
                    />
                  </div>
                  {errors.mobileNumber && (
                    <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.mobileNumber}
                    </p>
                  )}
                </div>

                {/* Organisation / Company Name */}
                <div>
                  <label className="block text-[13px] font-bold text-[#231515] mb-1.5">
                    Organisation / Business Name
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="organisationName"
                      value={formData.organisationName}
                      onChange={handleChange}
                      placeholder="e.g. Patliputra Heritage Tours & Resorts"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E8DCCF] text-[13.5px] bg-[#FAF6EE]/50 focus:bg-white focus:border-[#C38B34] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Participation Role */}
                <div>
                  <label className="block text-[13px] font-bold text-[#231515] mb-1.5">
                    Participation Role
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E8DCCF] text-[13.5px] bg-[#FAF6EE]/50 focus:bg-white focus:border-[#C38B34] focus:outline-none transition-colors"
                    >
                      {roles.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Stakeholder Category */}
                <div>
                  <label className="block text-[13px] font-bold text-[#231515] mb-1.5">
                    Sector Category
                  </label>
                  <div className="relative">
                    <Layers className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E8DCCF] text-[13.5px] bg-[#FAF6EE]/50 focus:bg-white focus:border-[#C38B34] focus:outline-none transition-colors"
                    >
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* District */}
                <div>
                  <label className="block text-[13px] font-bold text-[#231515] mb-1.5">
                    District in Bihar
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E8DCCF] text-[13.5px] bg-[#FAF6EE]/50 focus:bg-white focus:border-[#C38B34] focus:outline-none transition-colors"
                    >
                      {districts.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Designation */}
                <div>
                  <label className="block text-[13px] font-bold text-[#231515] mb-1.5">
                    Designation / Title
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="e.g. Managing Director / Tourism Officer"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8DCCF] text-[13.5px] bg-[#FAF6EE]/50 focus:bg-white focus:border-[#C38B34] focus:outline-none transition-colors"
                  />
                </div>

                {/* Message / Sponsorship Queries */}
                <div className="md:col-span-2">
                  <label className="block text-[13px] font-bold text-[#231515] mb-1.5">
                    Message or Partnership Details (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your delegation size, sponsorship interest, or booth requirements..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8DCCF] text-[13.5px] bg-[#FAF6EE]/50 focus:bg-white focus:border-[#C38B34] focus:outline-none transition-colors"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="md:col-span-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded text-[#370C01] border-stone-300 focus:ring-[#C38B34]"
                    />
                    <span className="text-[12px] text-[#5C443C] leading-snug">
                      I agree to receive event passes, official summit schedules, and administrative notifications for the Bihar Setu Tourism Summit 2026.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.consent}
                    </p>
                  )}
                </div>

              </div>

              {/* Submit CTA */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E8DCCF]">
                <div className="flex items-center gap-2 text-[12px] text-[#8A7268]">
                  <Calendar className="w-4 h-4 text-[#C38B34]" />
                  <span>7th & 8th December 2026 · Urja Auditorium, Patna</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#370C01] hover:bg-[#260800] text-white font-bold text-[14px] shadow-lg shadow-[#370C01]/20 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Generating Delegate Pass...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Summit Registration</span>
                      <Send className="w-4 h-4 stroke-[2.2]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  )
}

