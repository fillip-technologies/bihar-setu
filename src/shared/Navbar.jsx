import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Calendar, ArrowRight, Menu, X } from 'lucide-react'
import { gsap } from 'gsap'
import { navLinks, navCta } from '../data/navigation'
import { useScrollPosition } from '../hooks/useScrollPosition'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const scrollY = useScrollPosition()
  const isScrolled = scrollY > 20

  const navbarRef = useRef(null)
  const logoRef   = useRef(null)
  const linksRef  = useRef(null)
  const ctaRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        navbarRef.current,
        { y: -70, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65 }
      )
      tl.fromTo(
        logoRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        '-=0.35'
      )
      if (linksRef.current) {
        tl.fromTo(
          linksRef.current.querySelectorAll('a'),
          { y: -12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0.06 },
          '-=0.35'
        )
      }
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { y: -12, opacity: 0, scale: 0.94 },
          { y: 0, opacity: 1, scale: 1, duration: 0.45 },
          '-=0.25'
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <header
      ref={navbarRef}
      className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/80 backdrop-blur-md shadow-sm border-b border-black/10'
          : 'bg-[#FAF7F2] border-b border-black/5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand Logo */}
          <Link ref={logoRef} to="/" className="flex flex-col items-center justify-center group shrink-0">
            <div className="text-xl sm:text-2xl font-black tracking-tight leading-none">
              <span className="text-[#141A24]">BIHAR </span>
              <span className="text-[#17382E]">SETU</span>
            </div>
            <div className="text-[7.5px] sm:text-[8px] font-semibold tracking-[0.2em] text-[#556376] uppercase mt-1 whitespace-nowrap">
              CONNECTING BIHAR | CREATING OPPORTUNITIES
            </div>
          </Link>

          {/* Desktop Nav Links */}
          {/* Desktop Nav Links */}
          <nav ref={linksRef} className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            {navLinks.map((link) => {
              const isHome = link.name === 'Home'
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={({ isActive }) => {
                    const activeState = isHome && isActive
                    return `relative py-1 text-[13.5px] font-medium transition-colors duration-200 ${
                      activeState
                        ? 'text-[#17382E] font-semibold'
                        : 'text-[#374151] hover:text-[#111827]'
                    }`
                  }}
                >
                  {({ isActive }) => {
                    const activeState = isHome && isActive
                    return (
                      <>
                        <span>{link.name}</span>
                        {activeState && (
                          <span className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-[#17382E] rounded-full" />
                        )}
                      </>
                    )
                  }}
                </NavLink>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div ref={ctaRef} className="hidden sm:flex items-center">
            <Link
              to={navCta.path}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2.5 px-4.5 py-2.5 bg-[#17382E] hover:bg-[#112B23] active:bg-[#0B1E18] text-white font-semibold text-xs sm:text-[13px] rounded-lg shadow-md shadow-[#17382E]/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4 stroke-[2]" />
              <span>{navCta.label}</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#374151] hover:text-[#111827] hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-black/5 bg-[#FAF7F2] px-5 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isHome = link.name === 'Home'
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className={({ isActive }) => {
                    const activeState = isHome && isActive
                    return `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeState
                        ? 'text-[#17382E] bg-[#17382E]/10 font-semibold'
                        : 'text-[#374151] hover:text-[#111827] hover:bg-black/5'
                    }`
                  }}
                >
                  {link.name}
                </NavLink>
              )
            })}
          </nav>
          <div className="pt-2 border-t border-black/5">
            <Link
              to={navCta.path}
              onClick={() => {
                setMobileMenuOpen(false)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#17382E] hover:bg-[#112B23] text-white font-semibold text-xs sm:text-[13px] rounded-lg shadow-md"
            >
              <Calendar className="w-4 h-4 stroke-[2]" />
              <span>{navCta.label}</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
