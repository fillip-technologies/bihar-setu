import { useState } from 'react'
import {
  User,
  Building,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Compass,
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2,
  RotateCcw,
  Calendar,
  Layers,
  Copy,
  Check,
} from 'lucide-react'

export default function TourismSummitForm({ data }) {
  const {
    subtitle,
    categories,
    participationRoles,
    tracks,
    districts,
  } = data

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    organisationName: '',
    designation: '',
    mobileNumber: '',
    email: '',
    district: '',
    category: categories[0] || '',
    participationRole: participationRoles[0] || '',
    track: tracks[0] || '',
    message: '',
    consent: false,
  })

  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [passId, setPassId] = useState('')
  const [submittedAt, setSubmittedAt] = useState('')
  const [copied, setCopied] = useState(false)
  const [errors, setErrors] = useState({})

  // Handle generic field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // Clear validation error when field is updated
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  // Form Validation
  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required'
    } else {
      const cleanPhone = formData.mobileNumber.replace(/[\s-]/g, '')
      const phoneRegex = /^(\+91)?[6-9]\d{9}$/
      if (!phoneRegex.test(cleanPhone)) {
        newErrors.mobileNumber = 'Enter a valid 10-digit Indian mobile number'
      }
    }

    if (!formData.district) {
      newErrors.district = 'Please select your district or region'
    }

    if (!formData.category) {
      newErrors.category = 'Please select your stakeholder category'
    }

    if (!formData.participationRole) {
      newErrors.participationRole = 'Please choose your participation role'
    }

    if (!formData.track) {
      newErrors.track = 'Please select your primary summit track'
    }

    if (!formData.consent) {
      newErrors.consent = 'You must confirm and consent before submitting'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle Submit Simulation
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      // Scroll smoothly to first invalid field
      const firstErrorKey = Object.keys(errors)[0]
      if (firstErrorKey) {
        const el = document.getElementById(`summit-${firstErrorKey}`)
        if (el) el.focus()
      }
      return
    }

    setIsSubmitting(true)

    // Simulate backend submission
    setTimeout(() => {
      const randomCode = Math.floor(1000 + Math.random() * 9000)
      const generatedId = `BSTS-2026-${randomCode}`
      setPassId(generatedId)
      setSubmittedAt(
        new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })
      )
      setIsSubmitting(false)
      setSubmitSuccess(true)
    }, 1200)
  }

  // Handle Copy Pass ID
  const handleCopyPass = () => {
    if (passId) {
      navigator.clipboard.writeText(passId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  // Reset Form
  const resetForm = () => {
    setFormData({
      fullName: '',
      organisationName: '',
      designation: '',
      mobileNumber: '',
      email: '',
      district: '',
      category: categories[0] || '',
      participationRole: participationRoles[0] || '',
      track: tracks[0] || '',
      message: '',
      consent: false,
    })
    setErrors({})
    setSubmitSuccess(false)
    setPassId('')
  }

  return (
    <section
      id="summit-registration-form"
      aria-labelledby="summit-registration-heading"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] text-slate-900 font-sans border-b border-stone-200/90"
    >
      <div id="initiatives-form" className="absolute -top-12 left-0 pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2
            id="summit-registration-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2] mb-3.5 text-balance"
          >
            Register for Bihar Setu <br className="hidden sm:inline" />
            <span className="text-[#17382E]">Tourism Summit 2026</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto text-balance">
            {subtitle}
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-10 lg:p-12">
          {submitSuccess ? (
            /* ─── SUCCESS SCREEN ─── */
            <div className="text-center py-6 sm:py-10 max-w-2xl mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#10B981]/10 border-2 border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-5 animate-pulse">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.2]" />
              </div>

              <span className="inline-block px-3.5 py-1 rounded-full bg-[#17382E]/10 text-[#17382E] text-xs font-bold tracking-wide uppercase mb-3">
                Delegate Registration Confirmed
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                Thank You, {formData.fullName}!
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Your delegate registration for{' '}
                <strong className="text-slate-900">Bihar Setu Tourism Summit 2026</strong>{' '}
                has been successfully recorded. An official verification email with pass details has been queued.
              </p>

              {/* Pass Card */}
              <div className="bg-[#FAF7F2] border border-stone-200 rounded-2xl p-5 sm:p-6 text-left mb-8 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-stone-200">
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Summit Pass / Registration ID
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-[#17382E] tracking-wider font-mono">
                      {passId}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyPass}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 transition-all shadow-xs"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Pass ID</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase">
                      Delegate Name
                    </span>
                    <span className="font-bold text-slate-800">
                      {formData.fullName}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase">
                      Role & Organization
                    </span>
                    <span className="font-bold text-slate-800">
                      {formData.participationRole}
                      {formData.organisationName ? ` • ${formData.organisationName}` : ''}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase">
                      Primary Summit Track
                    </span>
                    <span className="font-bold text-slate-800">
                      {formData.track}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase">
                      District / Representation
                    </span>
                    <span className="font-bold text-slate-800">
                      {formData.district}
                    </span>
                  </div>

                  <div className="sm:col-span-2 pt-2 border-t border-stone-200/80 flex items-center gap-2 text-slate-500 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-[#E06222]" />
                    <span>Registered on: {submittedAt}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#17382E] hover:bg-[#112B23] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:scale-[1.02] active:scale-95"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Register Another Delegate</span>
                </button>
              </div>
            </div>
          ) : (
            /* ─── REGISTRATION FORM ─── */
            <form onSubmit={handleSubmit} noValidate>
              
              {/* Section 1: Contact Information */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-stone-100">
                  <div className="w-6 h-6 rounded-md bg-[#EAF5F1] text-[#17382E] flex items-center justify-center text-xs font-black">
                    1
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    Delegate Identification & Contact
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="summit-fullName"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="summit-fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar Sharma"
                        className={`w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-50/70 border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:outline-hidden focus:ring-2 focus:bg-white ${
                          errors.fullName
                            ? 'border-red-400 focus:ring-red-200 focus:border-red-500 bg-red-50/20'
                            : 'border-slate-200 focus:ring-[#17382E]/20 focus:border-[#17382E]'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="summit-email"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="summit-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ramesh@tourismbihar.com"
                        className={`w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-50/70 border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:outline-hidden focus:ring-2 focus:bg-white ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-200 focus:border-red-500 bg-red-50/20'
                            : 'border-slate-200 focus:ring-[#17382E]/20 focus:border-[#17382E]'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label
                      htmlFor="summit-mobileNumber"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Mobile / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id="summit-mobileNumber"
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-50/70 border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:outline-hidden focus:ring-2 focus:bg-white ${
                          errors.mobileNumber
                            ? 'border-red-400 focus:ring-red-200 focus:border-red-500 bg-red-50/20'
                            : 'border-slate-200 focus:ring-[#17382E]/20 focus:border-[#17382E]'
                        }`}
                      />
                    </div>
                    {errors.mobileNumber && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.mobileNumber}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Section 2: Organization & Stakeholder Category */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-stone-100">
                  <div className="w-6 h-6 rounded-md bg-[#EAF5F1] text-[#17382E] flex items-center justify-center text-xs font-black">
                    2
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    Organization & Stakeholder Profile
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {/* Organization Name */}
                  <div className="lg:col-span-2">
                    <label
                      htmlFor="summit-organisationName"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Organization / Agency / Business Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Building className="w-4 h-4" />
                      </div>
                      <input
                        id="summit-organisationName"
                        type="text"
                        name="organisationName"
                        value={formData.organisationName}
                        onChange={handleChange}
                        placeholder="e.g. Mithila Heritage Travels / Nalanda Homestay"
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:outline-hidden focus:ring-2 focus:ring-[#17382E]/20 focus:border-[#17382E] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Designation */}
                  <div>
                    <label
                      htmlFor="summit-designation"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Designation / Role
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <input
                        id="summit-designation"
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="e.g. Founder, Operator, Guide"
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:outline-hidden focus:ring-2 focus:ring-[#17382E]/20 focus:border-[#17382E] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* District */}
                  <div>
                    <label
                      htmlFor="summit-district"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      District / Representation <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <select
                        id="summit-district"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-8 py-2.5 sm:py-3 rounded-xl bg-slate-50/70 border text-xs sm:text-sm text-slate-900 transition-all focus:outline-hidden focus:ring-2 focus:bg-white cursor-pointer ${
                          errors.district
                            ? 'border-red-400 focus:ring-red-200 focus:border-red-500 bg-red-50/20'
                            : 'border-slate-200 focus:ring-[#17382E]/20 focus:border-[#17382E]'
                        }`}
                      >
                        <option value="">Select District / Region</option>
                        {districts.map((dst) => (
                          <option key={dst} value={dst}>
                            {dst}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.district && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.district}
                      </p>
                    )}
                  </div>
                </div>

                {/* Stakeholder Category & Participation Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                  <div>
                    <label
                      htmlFor="summit-category"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Stakeholder Category <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Layers className="w-4 h-4" />
                      </div>
                      <select
                        id="summit-category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full pl-10 pr-8 py-2.5 sm:py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-xs sm:text-sm text-slate-900 transition-all focus:outline-hidden focus:ring-2 focus:ring-[#17382E]/20 focus:border-[#17382E] focus:bg-white cursor-pointer"
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="summit-participationRole"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Participation Role <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Compass className="w-4 h-4" />
                      </div>
                      <select
                        id="summit-participationRole"
                        name="participationRole"
                        value={formData.participationRole}
                        onChange={handleChange}
                        className="w-full pl-10 pr-8 py-2.5 sm:py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-xs sm:text-sm text-slate-900 transition-all focus:outline-hidden focus:ring-2 focus:ring-[#17382E]/20 focus:border-[#17382E] focus:bg-white cursor-pointer"
                      >
                        {participationRoles.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Summit Track & Objectives */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-stone-100">
                  <div className="w-6 h-6 rounded-md bg-[#EAF5F1] text-[#17382E] flex items-center justify-center text-xs font-black">
                    3
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    Summit Track & Participation Objective
                  </h3>
                </div>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="summit-track"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Primary Summit Track of Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="summit-track"
                      name="track"
                      value={formData.track}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-xs sm:text-sm text-slate-900 transition-all focus:outline-hidden focus:ring-2 focus:ring-[#17382E]/20 focus:border-[#17382E] focus:bg-white cursor-pointer"
                    >
                      {tracks.map((trk) => (
                        <option key={trk} value={trk}>
                          {trk}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="summit-message"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Specific Queries, Proposals, or Areas for Collaboration (Optional)
                    </label>
                    <textarea
                      id="summit-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details regarding your operational readiness, hotel/homestay location, culinary specialty, or ideas for the tourism summit..."
                      className="w-full p-4 rounded-xl bg-slate-50/70 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:outline-hidden focus:ring-2 focus:ring-[#17382E]/20 focus:border-[#17382E] focus:bg-white resize-y"
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: Consent & Submission */}
              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                
                <div className="flex items-start gap-3 max-w-xl">
                  <input
                    id="summit-consent"
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded-sm border-slate-300 text-[#17382E] focus:ring-[#17382E] cursor-pointer"
                  />
                  <div>
                    <label
                      htmlFor="summit-consent"
                      className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none"
                    >
                      I confirm that the details provided are accurate and consent to Bihar Setu contacting me regarding summit scheduling, delegate accreditation, and partnership opportunities.
                    </label>
                    {errors.consent && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.consent}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#17382E] hover:bg-[#112B23] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:pointer-events-none shrink-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#34D399]" />
                      <span>Registering Delegate...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#34D399]" />
                      <span>Submit Summit Registration</span>
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
