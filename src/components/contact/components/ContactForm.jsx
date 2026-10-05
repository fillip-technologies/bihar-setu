import { useState, useRef } from 'react'
import {
  User,
  Building,
  Phone,
  Mail,
  MapPin,
  Tag,
  FileText,
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

export default function ContactForm({ categories, districts }) {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    mobileNumber: '',
    email: '',
    district: '',
    category: 'General Enquiry',
    subject: '',
    message: '',
    attachment: null,
    consent: false,
  })

  // UI States
  const [dragActive, setDragActive] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [ticketId, setTicketId] = useState('')
  const [submittedAt, setSubmittedAt] = useState('')
  const [errors, setErrors] = useState({})

  const fileInputRef = useRef(null)

  // Handle generic field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // Clear error for changed field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }



  // File Upload Handlers
  const handleFile = (file) => {
    if (!file) return

    // Limit to 10MB
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

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
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

  // Validation
  const validate = () => {
    const errs = {}

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required'
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid full name'
    }

    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile number is required'
    } else if (!/^[0-9]{10}$/.test(formData.mobileNumber.replace(/\D/g, ''))) {
      errs.mobileNumber = 'Please enter a valid 10-digit mobile number'
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address'
    }

    if (!formData.district) {
      errs.district = 'Please select your district'
    }

    if (!formData.category) {
      errs.category = 'Please select an enquiry category'
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 4) {
      errs.subject = 'Subject must be at least 4 characters'
    }

    if (!formData.message.trim()) {
      errs.message = 'Message is required'
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide more details (minimum 15 characters)'
    }

    if (!formData.consent) {
      errs.consent = 'You must acknowledge and consent before submitting'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  // Submission handler
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) {
      // Smooth scroll to top of form if errors
      const firstError = document.querySelector('[data-error="true"]')
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    setIsSubmitting(true)

    // Simulate reliable network submission
    setTimeout(() => {
      const generatedId = `BST-${new Date().getFullYear()}-ENQ-${Math.floor(10000 + Math.random() * 90000)}`
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
      organisation: '',
      mobileNumber: '',
      email: '',
      district: '',
      category: 'General Enquiry',
      subject: '',
      message: '',
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
    <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-6 sm:p-8 lg:p-10 transition-all">
      {/* ──────────────── Success View ──────────────── */}
      {submitSuccess ? (
        <div className="text-center py-6 sm:py-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#10B981]/10 border-2 border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-5">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.2]" />
          </div>

          <span className="inline-block px-3.5 py-1 rounded-full bg-[#17382E]/10 text-[#17382E] text-[12px] font-bold tracking-wide uppercase mb-2">
            Acknowledgement Generated
          </span>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">
            Enquiry Submitted Successfully
          </h3>

          <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#475569] max-w-lg mx-auto">
            Thank you, <strong className="text-[#111827]">{formData.fullName}</strong>. Your enquiry has been registered with the Bihar Setu state coordination desk.
          </p>

          {/* Reference Receipt Card */}
          <div className="mt-6 max-w-md mx-auto bg-[#FAF7F2] border border-stone-200 rounded-xl p-5 text-left text-[13.5px]">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200/70">
              <span className="text-[#64748B] font-medium">Tracking Reference:</span>
              <span className="font-mono font-bold text-[#17382E] tracking-wider text-[14px]">
                {ticketId}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-3 text-[12.5px]">
              <div>
                <span className="text-[#64748B] block">Category:</span>
                <span className="font-semibold text-[#111827]">{formData.category}</span>
              </div>
              <div>
                <span className="text-[#64748B] block">District / Origin:</span>
                <span className="font-semibold text-[#111827]">{formData.district}</span>
              </div>
              <div>
                <span className="text-[#64748B] block">Email:</span>
                <span className="font-semibold text-[#111827] truncate block">{formData.email}</span>
              </div>
              <div>
                <span className="text-[#64748B] block">Registered On:</span>
                <span className="font-semibold text-[#111827]">{submittedAt}</span>
              </div>
            </div>

            {formData.attachment && (
              <div className="mt-3 pt-3 border-t border-stone-200/70 flex items-center gap-2 text-[12px] text-[#475569]">
                <File className="w-3.5 h-3.5 text-[#17382E]" />
                <span className="truncate">Attached: {formData.attachment.name}</span>
                <span className="text-[#64748B] shrink-0">({formatFileSize(formData.attachment.size)})</span>
              </div>
            )}
          </div>

          <div className="mt-5 text-[12.5px] text-[#64748B] flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>A confirmation has been logged. Expected response within 24 to 48 business hours.</span>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={resetForm}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#17382E] text-white font-semibold text-[13.5px] hover:bg-[#112B23] transition-colors shadow-sm cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Send Another Enquiry</span>
            </button>
          </div>
        </div>
      ) : (
        /* ──────────────── Active Form View ──────────────── */
        <form onSubmit={handleSubmit} noValidate>
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-[20px] sm:text-[22px] font-serif font-bold text-[#111827] mb-1.5">
              Submit Your Enquiry
            </h2>
            <p className="text-[13.5px] text-[#64748B]">
              Please fill out the form below. All marked fields (<span className="text-[#EF4444] font-bold">*</span>) are mandatory.
            </p>
          </div>

          {/* Form Fields Grid */}
          <div className="space-y-5">
            {/* Row 1: Full Name & Organisation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Full Name */}
              <div data-error={!!errors.fullName}>
                <label
                  htmlFor="contact-fullName"
                  className="block text-[13px] font-bold text-[#111827] mb-1.5"
                >
                  Full Name <span className="text-[#EF4444]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="contact-fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-[14px] text-[#111827] placeholder:text-[#94A3B8] bg-white transition-all outline-none ${
                      errors.fullName
                        ? 'border-[#EF4444] bg-[#FEF2F2]/30 focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20'
                        : 'border-stone-300 focus:border-[#17382E] focus:ring-2 focus:ring-[#17382E]/15'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Organisation */}
              <div>
                <label
                  htmlFor="contact-organisation"
                  className="block text-[13px] font-bold text-[#111827] mb-1.5"
                >
                  Organisation <span className="text-[11px] font-normal text-[#64748B]">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                    <Building className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="contact-organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="Company, NGO, Institution or Govt Body"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 text-[14px] text-[#111827] placeholder:text-[#94A3B8] bg-white transition-all outline-none focus:border-[#17382E] focus:ring-2 focus:ring-[#17382E]/15"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Mobile Number & Email Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Mobile Number */}
              <div data-error={!!errors.mobileNumber}>
                <label
                  htmlFor="contact-mobileNumber"
                  className="block text-[13px] font-bold text-[#111827] mb-1.5"
                >
                  Mobile Number <span className="text-[#EF4444]">*</span>
                </label>
                <div className="relative flex rounded-xl border border-stone-300 overflow-hidden focus-within:border-[#17382E] focus-within:ring-2 focus-within:ring-[#17382E]/15 transition-all">
                  <div className="bg-[#FAF7F2] border-r border-stone-300 px-3 flex items-center gap-1.5 text-[13px] font-semibold text-[#17382E] select-none">
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    id="contact-mobileNumber"
                    name="mobileNumber"
                    maxLength={10}
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    className={`w-full px-3.5 py-2.5 text-[14px] text-[#111827] placeholder:text-[#94A3B8] bg-white outline-none ${
                      errors.mobileNumber ? 'bg-[#FEF2F2]/30' : ''
                    }`}
                  />
                </div>
                {errors.mobileNumber && (
                  <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.mobileNumber}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div data-error={!!errors.email}>
                <label
                  htmlFor="contact-email"
                  className="block text-[13px] font-bold text-[#111827] mb-1.5"
                >
                  Email Address <span className="text-[#EF4444]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@organisation.com"
                    className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-[14px] text-[#111827] placeholder:text-[#94A3B8] bg-white transition-all outline-none ${
                      errors.email
                        ? 'border-[#EF4444] bg-[#FEF2F2]/30 focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20'
                        : 'border-stone-300 focus:border-[#17382E] focus:ring-2 focus:ring-[#17382E]/15'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Row 3: District & Enquiry Category Dropdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* District */}
              <div data-error={!!errors.district}>
                <label
                  htmlFor="contact-district"
                  className="block text-[13px] font-bold text-[#111827] mb-1.5"
                >
                  District <span className="text-[#EF4444]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <select
                    id="contact-district"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-8 py-2.5 rounded-xl border text-[14px] text-[#111827] bg-white transition-all outline-none appearance-none cursor-pointer ${
                      errors.district
                        ? 'border-[#EF4444] bg-[#FEF2F2]/30 focus:border-[#EF4444]'
                        : 'border-stone-300 focus:border-[#17382E] focus:ring-2 focus:ring-[#17382E]/15'
                    }`}
                  >
                    <option value="" disabled>
                      Select Bihar District
                    </option>
                    {districts.map((dist) => (
                      <option key={dist} value={dist}>
                        {dist}
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

              {/* Enquiry Category Dropdown */}
              <div data-error={!!errors.category}>
                <label
                  htmlFor="contact-category"
                  className="block text-[13px] font-bold text-[#111827] mb-1.5"
                >
                  Enquiry Category <span className="text-[#EF4444]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                    <Tag className="w-4 h-4" />
                  </div>
                  <select
                    id="contact-category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-stone-300 text-[14px] text-[#111827] bg-white transition-all outline-none appearance-none cursor-pointer focus:border-[#17382E] focus:ring-2 focus:ring-[#17382E]/15"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#64748B]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4: Subject */}
            <div data-error={!!errors.subject}>
              <label
                htmlFor="contact-subject"
                className="block text-[13px] font-bold text-[#111827] mb-1.5"
              >
                Subject <span className="text-[#EF4444]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                  <FileText className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Summary of your proposal, partnership or enquiry"
                  className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-[14px] text-[#111827] placeholder:text-[#94A3B8] bg-white transition-all outline-none ${
                    errors.subject
                      ? 'border-[#EF4444] bg-[#FEF2F2]/30 focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20'
                      : 'border-stone-300 focus:border-[#17382E] focus:ring-2 focus:ring-[#17382E]/15'
                  }`}
                />
              </div>
              {errors.subject && (
                <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.subject}</span>
                </p>
              )}
            </div>

            {/* Row 5: Message */}
            <div data-error={!!errors.message}>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-[13px] font-bold text-[#111827]"
                >
                  Message <span className="text-[#EF4444]">*</span>
                </label>
                <span className="text-[11.5px] text-[#64748B]">
                  {formData.message.length} characters
                </span>
              </div>
              <div className="relative">
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide comprehensive details about your initiative, institutional profile, proposed collaboration, or enquiry..."
                  className={`w-full px-3.5 py-3 rounded-xl border text-[14px] text-[#111827] placeholder:text-[#94A3B8] bg-white transition-all outline-none resize-y ${
                    errors.message
                      ? 'border-[#EF4444] bg-[#FEF2F2]/30 focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20'
                      : 'border-stone-300 focus:border-[#17382E] focus:ring-2 focus:ring-[#17382E]/15'
                  }`}
                />
              </div>
              {errors.message && (
                <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Row 6: Attachment (File Upload with Drag-and-Drop & Preview) */}
            <div>
              <label className="block text-[13px] font-bold text-[#111827] mb-1.5">
                Attachment <span className="text-[11px] font-normal text-[#64748B]">(Optional • PDF, DOCX, JPG, PNG up to 10MB)</span>
              </label>

              <input
                ref={fileInputRef}
                type="file"
                id="contact-attachment"
                name="attachment"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="hidden"
              />

              {!formData.attachment ? (
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all ${
                    dragActive
                      ? 'border-[#17382E] bg-[#17382E]/5'
                      : 'border-stone-300 hover:border-[#17382E]/50 hover:bg-[#FAF7F2]/50'
                  }`}
                >
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#FAF7F2] border border-stone-200 flex items-center justify-center text-[#17382E] mb-2">
                    <Upload className="w-5 h-5" />
                  </div>
                  <p className="text-[13px] font-semibold text-[#111827]">
                    Click to browse <span className="text-[#64748B] font-normal">or drag & drop your document here</span>
                  </p>
                  <p className="text-[11px] text-[#64748B] mt-1">
                    Concept notes, proposals, identity proofs, or relevant documents (Max 10MB)
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-between p-3.5 bg-[#FAF7F2] border border-stone-200 rounded-xl">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-[#17382E]/10 border border-[#17382E]/20 flex items-center justify-center text-[#17382E] shrink-0">
                      <File className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[13px] font-bold text-[#111827] truncate">
                        {formData.attachment.name}
                      </p>
                      <p className="text-[11px] text-[#64748B]">
                        {formatFileSize(formData.attachment.size)}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-1.5 rounded-lg text-[#64748B] hover:text-[#EF4444] hover:bg-white transition-colors"
                    title="Remove file"
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
            <div data-error={!!errors.consent} className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  id="contact-consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 rounded border-stone-300 text-[#17382E] focus:ring-[#17382E] cursor-pointer"
                />
                <span className="text-[12.5px] text-[#475569] leading-relaxed">
                  I agree and consent to Bihar Setu processing and routing the submitted information to the concerned desk or authority for redressal and follow-up in accordance with official communication guidelines. <span className="text-[#EF4444] font-bold">*</span>
                </span>
              </label>
              {errors.consent && (
                <p className="mt-1 text-[11.5px] text-[#EF4444] flex items-center gap-1 pl-7">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.consent}</span>
                </p>
              )}
            </div>

            {/* Row 8: Send Enquiry Button */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#17382E] text-white text-[14px] font-bold shadow-md hover:bg-[#112B23] active:bg-[#0B1E18] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Processing & Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <Send className="w-4 h-4 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}
