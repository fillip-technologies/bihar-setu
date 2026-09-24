import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Sparkles,
  Send,
  Building2,
  Globe,
  CheckCircle2,
} from 'lucide-react'

// ─────────────────────────────────────────────
// Navigation & Content Data
// ─────────────────────────────────────────────
const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Bihar Setu', path: '/#about' },
  { name: 'Focus Areas', path: '/#focus-areas' },
  { name: 'Why Bihar Setu', path: '/#why-bihar-setu' },
  { name: 'Our Mission', path: '/#our-mission' },
  { name: 'How We Work', path: '/#how-we-work' },
  { name: 'Who Can Connect', path: '/#who-can-connect' },
]

const focusSectors = [
  { name: 'Heritage & Eco-Tourism', path: '/#focus-areas' },
  { name: 'Agro-Processing & Rural MSME', path: '/#focus-areas' },
  { name: 'IT, Innovation & Startups', path: '/#focus-areas' },
  { name: 'Education & Skill Building', path: '/#focus-areas' },
  { name: 'Healthcare & Wellness', path: '/#focus-areas' },
  { name: 'Infrastructure & Connectivity', path: '/#focus-areas' },
]

const initiatives = [
  { name: 'Bihar Tourism Summit 2026', badge: 'Upcoming', path: '/tourism-summit-2026' },
  { name: '38 District Civic Network', badge: 'Active', path: '/#who-can-connect' },
  { name: 'MSME & Startup Mentorship', badge: 'Programs', path: '/#who-can-connect' },
  { name: 'Youth Skills & Internship Cell', badge: 'New', path: '/#who-can-connect' },
  { name: 'Diaspora Knowledge Exchange', badge: 'Global', path: '/#who-can-connect' },
]

const sampleDistricts = [
  'Patna',
  'Gaya',
  'Bhagalpur',
  'Muzaffarpur',
  'Nalanda',
  'Darbhanga',
  'Purnia',
  'Rohtas',
  'Saran',
  'Begusarai',
  'Vaishali',
  'Madhubani',
  'Samastipur',
  'Munger',
  'Bhojpur',
  'West Champaran',
  'East Champaran',
  'Katihar',
]

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#07130F] text-white overflow-hidden border-t border-[#17382E]/40 font-sans">
      {/* ── BACKGROUND SUBTLE TEXTURES & ACCENTS ── */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#17382E] via-[#F97316] via-45% via-[#F5A623] to-[#06B6D4]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#17382E]/25 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#E06222]/10 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Bridge Watermark in Footer Background */}
      <svg
        className="absolute -bottom-10 right-0 w-[550px] h-[220px] text-white/[0.015] pointer-events-none select-none"
        viewBox="0 0 100 28"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5 26 Q50 -4 95 26" stroke="currentColor" strokeWidth="2.5" />
        <path d="M18 26 Q50 6 82 26" stroke="currentColor" strokeWidth="1.8" />
        <line x1="50" y1="2" x2="50" y2="26" stroke="currentColor" strokeWidth="1.5" />
        <line x1="38" y1="6" x2="33" y2="26" stroke="currentColor" strokeWidth="1.2" />
        <line x1="62" y1="6" x2="67" y2="26" stroke="currentColor" strokeWidth="1.2" />
      </svg>

      {/* ── PRE-FOOTER CTA CARD ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F2820] via-[#17382E] to-[#0B1E18] border border-[#235243]/60 p-6 sm:p-8 lg:p-10 shadow-2xl">
          {/* Subtle glow inside card */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-[#E06222]/15 rounded-full blur-[80px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
            {/* Left copy */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E06222]/15 border border-[#E06222]/30 text-[#F97316] text-[11px] font-bold tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>बिहार सेतु जन-भागीदारी</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
                Ready to Be Part of Bihar&apos;s Transformative Growth Story?
              </h3>
              <p className="mt-2 text-[12.5px] sm:text-[13.5px] text-[#A7B9B2] leading-relaxed">
                Whether you represent an institution, a thriving enterprise, an expert voice, or an aspiring young professional — your engagement accelerates meaningful impact on ground.
              </p>
            </div>

            {/* Right actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <Link
                to="/tourism-summit-2026"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#E06222] hover:bg-[#EA580C] text-white text-[13px] font-bold shadow-lg shadow-[#E06222]/20 transition-all hover:scale-[1.02] active:scale-95 text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Tourism Summit 2026</span>
              </Link>
              <a
                href="#who-can-connect"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-[13px] font-semibold transition-all hover:scale-[1.02] active:scale-95 text-center"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 text-[#F97316]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN 4-COLUMN FOOTER ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 border-b border-white/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* COL 1: Brand & Identity (5 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col">
            <Link to="/" className="inline-flex flex-col items-start group">
              {/* Brand titles */}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black tracking-tight text-white">BIHAR</span>
                <span className="text-2xl font-black tracking-tight text-[#34D399]">SETU</span>
                <span className="text-sm font-semibold text-[#F97316] font-devanagari">बिहार सेतु</span>
              </div>
              <span className="text-[8.5px] font-semibold tracking-[0.2em] text-[#869A93] uppercase mt-1">
                Connecting Bihar | Creating Opportunities
              </span>
            </Link>

            <p className="mt-4 text-[12.5px] text-[#93A7A0] leading-relaxed max-w-sm">
              Bihar Setu is a dedicated civic-collaborative bridge uniting institutions, businesses,
              grassroots organizations, and youth across all 38 districts to build sustainable,
              future-ready opportunities for Bihar.
            </p>

            {/* Key trust badges */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#132A22] border border-[#235243]/50 text-[11px] text-[#A7B9B2]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
                <span>38 Districts Active</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#132A22] border border-[#235243]/50 text-[11px] text-[#A7B9B2]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Open Collaboration</span>
              </div>
            </div>

            {/* Social handles */}
            <div className="mt-6">
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#738880] block mb-2.5">
                Connect With Our Community
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-8 h-8 rounded-lg bg-[#112720] border border-[#1E4337] flex items-center justify-center text-[#93A7A0] hover:text-white hover:bg-[#17382E] hover:border-[#34D399]/40 transition-all hover:scale-105"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COL 2: Navigation Links (2.5 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-[13px] font-bold text-white tracking-wide uppercase flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[12.5px]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('/#') ? (
                    <a
                      href={link.path.replace('/', '')}
                      className="text-[#93A7A0] hover:text-[#34D399] transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#235243] group-hover:bg-[#34D399] transition-colors" />
                      <span>{link.name}</span>
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-[#93A7A0] hover:text-[#34D399] transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#235243] group-hover:bg-[#34D399] transition-colors" />
                      <span>{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: Focus Areas (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-bold text-white tracking-wide uppercase flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              Focus Areas & Programs
            </h4>
            <ul className="space-y-2.5 text-[12.5px] mb-5">
              {focusSectors.map((sector) => (
                <li key={sector.name}>
                  <a
                    href="#focus-areas"
                    className="text-[#93A7A0] hover:text-[#F97316] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#235243] group-hover:bg-[#F97316] transition-colors" />
                    <span>{sector.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <h5 className="text-[11px] font-bold text-[#869A93] tracking-wider uppercase mb-2">
              Featured Initiatives
            </h5>
            <div className="space-y-2">
              {initiatives.slice(0, 3).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center justify-between p-2 rounded-lg bg-[#0F241C] border border-[#1B3E32] hover:border-[#34D399]/40 transition-all group"
                >
                  <span className="text-[11.5px] text-[#A7B9B2] group-hover:text-white transition-colors truncate">
                    {item.name}
                  </span>
                  <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-[#17382E] text-[#34D399] border border-[#235243] shrink-0 ml-2">
                    {item.badge}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* COL 4: Connect & Contact (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-bold text-white tracking-wide uppercase flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
              Get in Touch
            </h4>

            <div className="space-y-3.5 text-[12.5px] text-[#93A7A0]">

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#06B6D4] shrink-0" />
                <a
                  href="mailto:contact@biharsetu.org"
                  className="text-[#A7B9B2] hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  contact@biharsetu.org
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#34D399] shrink-0" />
                <span className="text-[#A7B9B2]">
                  +91 (0612) 220-XXXX / Toll Free
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span className="text-[11.5px] text-[#7F948D]">
                  Statewide Coverage: All 38 Districts
                </span>
              </div>
            </div>

            {/* Newsletter / Updates Subscription */}
            <div className="mt-5 p-3.5 rounded-xl bg-[#0F241C] border border-[#1E4337]">
              <span className="text-[11px] font-bold text-white block mb-1">
                Stay Updated on Bihar&apos;s Progress
              </span>
              <p className="text-[10.5px] text-[#7F948D] mb-2.5">
                Receive monthly updates on summits, initiatives, and opportunities.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Thank you for subscribing to Bihar Setu updates!')
                }}
                className="flex items-center gap-1.5"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-2.5 py-1.5 rounded-lg bg-[#07130F] border border-[#1E4337] text-[11.5px] text-white placeholder-[#5E726B] focus:outline-none focus:border-[#34D399]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="p-1.5 rounded-lg bg-[#17382E] hover:bg-[#235243] text-[#34D399] border border-[#34D399]/30 transition-colors shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* ── DISTRICTS TICKER STRIP ── */}
      <div className="relative z-10 bg-[#050E0B] border-b border-white/[0.05] py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-[11px]">
          <div className="flex items-center gap-2 shrink-0">
            <Building2 className="w-3.5 h-3.5 text-[#34D399]" />
            <span className="font-bold text-[#A7B9B2] uppercase tracking-wider text-[10px]">
              Active in all 38 Districts:
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-2 gap-y-1 text-[#647972] text-[11px]">
            {sampleDistricts.map((d, idx) => (
              <span key={d} className="inline-flex items-center gap-1.5">
                <span className="hover:text-[#A7B9B2] transition-colors">{d}</span>
                {idx < sampleDistricts.length - 1 && <span className="text-[#1E4337]">•</span>}
              </span>
            ))}
            <span className="text-[#34D399] font-medium">+ 20 More</span>
          </div>
        </div>
      </div>

      {/* ── BOTTOM COPYRIGHT & LEGAL ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11.5px] text-[#738880]">
          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()}</span>
            <strong className="text-white font-semibold">Bihar Setu</strong>
            <span className="font-devanagari text-[#34D399]">(बिहार सेतु)</span>.
            <span>All rights reserved.</span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#about" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/10">•</span>
            <a href="#about" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <span className="text-white/10">•</span>
            <a href="#about" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
