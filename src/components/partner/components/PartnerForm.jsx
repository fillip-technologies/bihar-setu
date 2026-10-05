import { useState, useRef } from 'react'
import {
  Upload,
  CheckCircle2,
  AlertCircle,
  File,
  X,
  Send,
  Loader2,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react'

export default function PartnerForm({
  formDataProp,
  selectedCategory,
  onCategoryChange,
}) {
  const { title, highlight, subtitle, sectors, categories, districts } =
    formDataProp

  // State
  const [formData, setFormData] = useState({
    fullName: '',
    organisationName: '',
    designation: '',
    mobileNumber: '',
    email: '',
    district: '',
    sector: '',
    category: selectedCategory || '',
    proposedIdea: '',
    websiteOrSocial: '',
    attachment: null,
    consent: false,
  })

  // Sync external category selection
  if (selectedCategory && selectedCategory !== formData.category) {
    setFormData((prev) => ({ ...prev, category: selectedCategory }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [ticketId, setTicketId] = useState('')
  const [submittedAt, setSubmittedAt] = useState('')
  const [errors, setErrors] = useState({})

  const fileInputRef = useRef(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    if (name === 'category' && onCategoryChange) {
      onCategoryChange(value)
    }

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleFile = (file) => {
    if (!file) return

    const maxSize = 10 * 1024 * 1024
    if (file.size > maxSize) {
      setErrors((prev) => ({
        ...prev,
        attachment: 'File size exceeds 10MB limit. Please upload a smaller file.',
      }))
      return
    }

    setFormData((prev) => ({ ...prev, attachment: file }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next.attachment
      return next
    })
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, attachment: null }))
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const formatFileSize = (bytes) => {
    if (!bytes) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`
  }

  const validate = () => {
    const errs = {}

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required'
    }
    if (!formData.organisationName.trim()) {
      errs.organisationName = 'Organisation Name is required'
    }
    if (!formData.designation.trim()) {
      errs.designation = 'Designation is required'
    }
    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile number is required'
    } else if (!/^[0-9]{10}$/.test(formData.mobileNumber.replace(/\D/g, ''))) {
      errs.mobileNumber = 'Enter a valid 10-digit number'
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Enter a valid email address'
    }
    if (!formData.district) {
      errs.district = 'Select your district'
    }
    if (!formData.sector) {
      errs.sector = 'Select focus sector'
    }
    if (!formData.category) {
      errs.category = 'Select partnership category'
    }
    if (!formData.proposedIdea.trim()) {
      errs.proposedIdea = 'Please share your proposed idea or contribution'
    }
    if (!formData.consent) {
      errs.consent = 'Consent is required to submit'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      const generatedId = `BST-${new Date().getFullYear()}-PRT-${Math.floor(
        10000 + Math.random() * 90000
      )}`
      const formattedDate = new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })

      setTicketId(generatedId)
      setSubmittedAt(formattedDate)
      setIsSubmitting(false)
      setSubmitSuccess(true)
    }, 1100)
  }

  const resetForm = () => {
    setFormData({
      fullName: '',
      organisationName: '',
      designation: '',
      mobileNumber: '',
      email: '',
      district: '',
      sector: '',
      category: '',
      proposedIdea: '',
      websiteOrSocial: '',
      attachment: null,
      consent: false,
    })
    setErrors({})
    setSubmitSuccess(false)
    setTicketId('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <section
      id="partnership-form"
      aria-labelledby="partner-form-heading"
      className="relative pt-6 sm:pt-8 lg:pt-10 pb-14 sm:pb-18 lg:pb-20 bg-[#FAF7F2]"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Aligned and free of extra eyebrow clutter */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2
              id="partner-form-heading"
              className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-[#111827] tracking-tight leading-tight"
            >
              {title}{' '}
              <span className="text-[#A15D1C] font-serif font-bold">
                {highlight}
              </span>
            </h2>
          </div>
          <p className="text-[13px] sm:text-[14px] text-[#64748B] max-w-sm sm:text-right leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Form Card Container */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-10 lg:p-12">
          {submitSuccess ? (
            /* Success Feedback View */
            <div className="text-center py-6 sm:py-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#10B981]/10 border-2 border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-5">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.2]" />
              </div>

              <span className="inline-block px-3.5 py-1 rounded-full bg-[#A15D1C]/10 text-[#A15D1C] text-[12px] font-bold tracking-wide uppercase mb-2">
                Partnership Request Registered
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">
                Thank You for Your Collaboration Proposal
              </h3>

              <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#475569] max-w-lg mx-auto">
                Thank you, <strong className="text-[#111827]">{formData.fullName}</strong> ({formData.organisationName}). Our partnerships desk will review your proposal and get in touch within 2 to 3 business days.
              </p>

              {/* Receipt Card */}
              <div className="mt-6 max-w-md mx-auto bg-[#FAF7F2] border border-stone-200 rounded-2xl p-5 text-left text-[13px]">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200/70">
                  <span className="text-[#64748B] font-medium">Proposal Reference:</span>
                  <span className="font-mono font-bold text-[#A15D1C] tracking-wider text-[14px]">
                    {ticketId}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-3 text-[12.5px]">
                  <div>
                    <span className="text-[#64748B] block">Category:</span>
                    <span className="font-semibold text-[#111827]">{formData.category}</span>
                  </div>
                  <div>
                    <span className="text-[#64748B] block">Sector:</span>
                    <span className="font-semibold text-[#111827]">{formData.sector}</span>
                  </div>
                  <div>
                    <span className="text-[#64748B] block">District:</span>
                    <span className="font-semibold text-[#111827]">{formData.district}</span>
                  </div>
                  <div>
                    <span className="text-[#64748B] block">Submitted On:</span>
                    <span className="font-semibold text-[#111827]">{submittedAt}</span>
                  </div>
                </div>

                {formData.attachment && (
                  <div className="mt-3 pt-3 border-t border-stone-200/70 flex items-center gap-2 text-[12px] text-[#475569]">
                    <File className="w-3.5 h-3.5 text-[#A15D1C]" />
                    <span className="truncate">Attached: {formData.attachment.name}</span>
                    <span className="text-[#64748B] shrink-0">({formatFileSize(formData.attachment.size)})</span>
                  </div>
                )}
              </div>

              <div className="mt-6 text-[12.5px] text-[#64748B] flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Official communication will be initiated from partnerships@biharsetu.in</span>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A15D1C] text-white font-semibold text-[13.5px] hover:bg-[#8B4D14] transition-colors shadow-sm cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Submit Another Partnership</span>
                </button>
              </div>
            </div>
          ) : (
            /* Active Form View */
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-5 sm:space-y-6">
                {/* Row 1: Full Name & Organisation Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="partner-fullName"
                      className="block text-[13px] font-bold text-[#111827] mb-1.5"
                    >
                      Full Name <span className="text-[#EF4444]">*</span>
                    </label>
                    <input
                      type="text"
                      id="partner-fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-2.5 rounded-xl border text-[14px] text-[#111827] placeholder:text-[#94A3B8] bg-white transition-all outline-none ${
                        errors.fullName
                          ? 'border-[#EF4444] bg-[#FEF2F2]/30 focus:border-[#EF4444]'
                          : 'border-stone-300 focus:border-[#A15D1C] focus:ring-2 focus:ring-[#A15D1C]/15'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="partner-organisationName"
                      className="block text-[13px] font-bold text-[#111827] mb-1.5"
                    >
                      Organisation Name <span className="text-[#EF4444]">*</span>
                    </label>
                    <input
                      type="text"
                      id="partner-organisationName"
                      name="organisationName"
                      value={formData.organisationName}
                      onChange={handleChange}
                      placeholder="Enter organisation name"
                      className={`w-full px-4 py-2.5 rounded-xl border text-[14px] text-[#111827] placeholder:text-[#94A3B8] bg-white transition-all outline-none ${
                        errors.organisationName
                          ? 'border-[#EF4444] bg-[#FEF2F2]/30 focus:border-[#EF4444]'
                          : 'border-stone-300 focus:border-[#A15D1C] focus:ring-2 focus:ring-[#A15D1C]/15'
                      }`}
                    />
                    {errors.organisationName && (
                      <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.organisationName}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Designation & Mobile Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="partner-designation"
                      className="block text-[13px] font-bold text-[#111827] mb-1.5"
                    >
                      Designation <span className="text-[#EF4444]">*</span>
                    </label>
                    <input
                      type="text"
                      id="partner-designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="Enter your designation"
                      className={`w-full px-4 py-2.5 rounded-xl border text-[14px] text-[#111827] placeholder:text-[#94A3B8] bg-white transition-all outline-none ${
                        errors.designation
                          ? 'border-[#EF4444] bg-[#FEF2F2]/30 focus:border-[#EF4444]'
                          : 'border-stone-300 focus:border-[#A15D1C] focus:ring-2 focus:ring-[#A15D1C]/15'
                      }`}
                    />
                    {errors.designation && (
                      <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.designation}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="partner-mobileNumber"
                      className="block text-[13px] font-bold text-[#111827] mb-1.5"
                    >
                      Mobile Number <span className="text-[#EF4444]">*</span>
                    </label>
                    <div className="flex rounded-xl border border-stone-300 overflow-hidden focus-within:border-[#A15D1C] focus-within:ring-2 focus-within:ring-[#A15D1C]/15 transition-all">
                      <div className="bg-[#FAF7F2] border-r border-stone-300 px-3 flex items-center gap-1.5 text-[13px] font-semibold text-[#111827] select-none">
                        <span>🇮🇳</span>
                        <span>+91</span>
                      </div>
                      <input
                        type="tel"
                        id="partner-mobileNumber"
                        name="mobileNumber"
                        maxLength={10}
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="Enter mobile number"
                        className="w-full px-3.5 py-2.5 text-[14px] text-[#111827] placeholder:text-[#94A3B8] bg-white outline-none"
                      />
                    </div>
                    {errors.mobileNumber && (
                      <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.mobileNumber}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: Email Address & District */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="partner-email"
                      className="block text-[13px] font-bold text-[#111827] mb-1.5"
                    >
                      Email Address <span className="text-[#EF4444]">*</span>
                    </label>
                    <input
                      type="email"
                      id="partner-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={`w-full px-4 py-2.5 rounded-xl border text-[14px] text-[#111827] placeholder:text-[#94A3B8] bg-white transition-all outline-none ${
                        errors.email
                          ? 'border-[#EF4444] bg-[#FEF2F2]/30 focus:border-[#EF4444]'
                          : 'border-stone-300 focus:border-[#A15D1C] focus:ring-2 focus:ring-[#A15D1C]/15'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="partner-district"
                      className="block text-[13px] font-bold text-[#111827] mb-1.5"
                    >
                      District <span className="text-[#EF4444]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="partner-district"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        className={`w-full px-4 pr-9 py-2.5 rounded-xl border text-[14px] text-[#111827] bg-white transition-all outline-none appearance-none cursor-pointer ${
                          errors.district
                            ? 'border-[#EF4444] bg-[#FEF2F2]/30 focus:border-[#EF4444]'
                            : 'border-stone-300 focus:border-[#A15D1C] focus:ring-2 focus:ring-[#A15D1C]/15'
                        }`}
                      >
                        <option value="" disabled>
                          Select district
                        </option>
                        {districts.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#64748B]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.district && (
                      <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.district}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 4: Sector & Partnership Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="partner-sector"
                      className="block text-[13px] font-bold text-[#111827] mb-1.5"
                    >
                      Sector <span className="text-[#EF4444]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="partner-sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className={`w-full px-4 pr-9 py-2.5 rounded-xl border text-[14px] text-[#111827] bg-white transition-all outline-none appearance-none cursor-pointer ${
                          errors.sector
                            ? 'border-[#EF4444] bg-[#FEF2F2]/30 focus:border-[#EF4444]'
                            : 'border-stone-300 focus:border-[#A15D1C] focus:ring-2 focus:ring-[#A15D1C]/15'
                        }`}
                      >
                        <option value="" disabled>
                          Select sector
                        </option>
                        {sectors.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#64748B]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.sector && (
                      <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.sector}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="partner-category"
                      className="block text-[13px] font-bold text-[#111827] mb-1.5"
                    >
                      Partnership Category <span className="text-[#EF4444]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="partner-category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className={`w-full px-4 pr-9 py-2.5 rounded-xl border text-[14px] text-[#111827] bg-white transition-all outline-none appearance-none cursor-pointer ${
                          errors.category
                            ? 'border-[#EF4444] bg-[#FEF2F2]/30 focus:border-[#EF4444]'
                            : 'border-stone-300 focus:border-[#A15D1C] focus:ring-2 focus:ring-[#A15D1C]/15'
                        }`}
                      >
                        <option value="" disabled>
                          Select partnership category
                        </option>
                        {categories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#64748B]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.category && (
                      <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.category}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 5: Proposed Idea or Contribution & Website/Social Media Link */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="partner-proposedIdea"
                      className="block text-[13px] font-bold text-[#111827] mb-1.5"
                    >
                      Proposed Idea or Contribution <span className="text-[#EF4444]">*</span>
                    </label>
                    <textarea
                      id="partner-proposedIdea"
                      name="proposedIdea"
                      rows={2}
                      value={formData.proposedIdea}
                      onChange={handleChange}
                      placeholder="Share your idea or contribution"
                      className={`w-full px-4 py-2.5 rounded-xl border text-[14px] text-[#111827] placeholder:text-[#94A3B8] bg-white transition-all outline-none resize-y ${
                        errors.proposedIdea
                          ? 'border-[#EF4444] bg-[#FEF2F2]/30 focus:border-[#EF4444]'
                          : 'border-stone-300 focus:border-[#A15D1C] focus:ring-2 focus:ring-[#A15D1C]/15'
                      }`}
                    />
                    {errors.proposedIdea && (
                      <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.proposedIdea}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="partner-websiteOrSocial"
                      className="block text-[13px] font-bold text-[#111827] mb-1.5"
                    >
                      Website or Social Media Link
                    </label>
                    <input
                      type="url"
                      id="partner-websiteOrSocial"
                      name="websiteOrSocial"
                      value={formData.websiteOrSocial}
                      onChange={handleChange}
                      placeholder="Enter website or social media link (optional)"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-[14px] text-[#111827] placeholder:text-[#94A3B8] bg-white transition-all outline-none focus:border-[#A15D1C] focus:ring-2 focus:ring-[#A15D1C]/15"
                    />
                  </div>
                </div>

                {/* Row 6: Upload Supporting Document */}
                <div>
                  <label className="block text-[13px] font-bold text-[#111827] mb-1.5">
                    Upload Supporting Document
                  </label>

                  <input
                    ref={fileInputRef}
                    type="file"
                    id="partner-attachment"
                    name="attachment"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />

                  {!formData.attachment ? (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl border border-stone-300 bg-white">
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center gap-3 cursor-pointer select-none"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] border border-stone-200 flex items-center justify-center text-[#8C5E35]">
                          <Upload className="w-4 h-4" />
                        </div>
                        <span className="text-[13.5px] text-[#64748B]">
                          Choose a file
                        </span>
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-3.5 py-1 text-[12px] font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-[#374151] border border-stone-200 transition-colors cursor-pointer"
                        >
                          Browse
                        </button>
                      </div>
                      <span className="text-[11.5px] text-[#94A3B8]">
                        PDF, DOC, DOCX (Max 10MB)
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-3 bg-[#FAF7F2] border border-stone-200 rounded-xl">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <File className="w-4 h-4 text-[#A15D1C] shrink-0" />
                        <span className="text-[13px] font-bold text-[#111827] truncate">
                          {formData.attachment.name}
                        </span>
                        <span className="text-[11px] text-[#64748B] shrink-0">
                          ({formatFileSize(formData.attachment.size)})
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-1 text-[#64748B] hover:text-[#EF4444]"
                        title="Remove"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {errors.attachment && (
                    <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.attachment}</span>
                    </p>
                  )}
                </div>

                {/* Row 7: Consent Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      id="partner-consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-0.5 w-4 h-4 rounded border-stone-300 text-[#A15D1C] focus:ring-[#A15D1C] cursor-pointer"
                    />
                    <span className="text-[12.5px] text-[#475569] leading-relaxed">
                      I consent to share the above information with Bihar Setu for partnership discussion and communication. <span className="text-[#EF4444] font-bold">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1 pl-7">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.consent}</span>
                    </p>
                  )}
                </div>

                {/* Row 8: Submit Button */}
                <div className="pt-3 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-3.5 rounded-full bg-[#A15D1C] hover:bg-[#8B4D14] active:bg-[#733F10] text-white text-[14px] font-bold shadow-md shadow-[#A15D1C]/25 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Registering Proposal...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Partnership Interest</span>
                        <Send className="w-4 h-4 stroke-[2.2] group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
