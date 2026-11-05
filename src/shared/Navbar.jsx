import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Calendar, ArrowRight, Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import { gsap } from 'gsap'
import { navLinks, navCta } from '../data/navigation'
import { useScrollPosition } from '../hooks/useScrollPosition'
import biharSetuLogo from '../assets/bihar-setu-logo.png'

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
          ? 'bg-[#FAF6EE]/85 backdrop-blur-md shadow-sm border-b border-[#E8DCCF]'
          : 'bg-[#FAF6EE] border-b border-[#E8DCCF]/60'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand Logo */}
          <Link
            ref={logoRef}
            to="/"
            className="flex items-center group shrink-0 transition-transform duration-200 hover:opacity-95"
          >
            <img
              src={biharSetuLogo}
              alt="Bihar Setu Logo"
              className="h-14 sm:h-16 md:h-[68px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav ref={linksRef} className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            {navLinks.map((link) => {
              const hasOwnRoute = link.path !== '/' || link.name === 'Home'
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={({ isActive }) => {
                    const activeState = hasOwnRoute && isActive
                    return `relative py-1 text-[13.5px] font-medium transition-colors duration-200 ${
                      activeState
                        ? 'text-[#370C01] font-semibold'
                        : 'text-[#5C443C] hover:text-[#231515]'
                    }`
                  }}
                >
                  {({ isActive }) => {
                    const activeState = hasOwnRoute && isActive
                    return (
                      <>
                        <span>{link.name}</span>
                        {activeState && (
                          <span className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-[#370C01] rounded-full" />
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
              onClick={(e) => {
                if (navCta.path.includes('#')) {
                  const [route, hash] = navCta.path.split('#')
                  if (window.location.pathname === route) {
                    e.preventDefault()
                    const element = document.getElementById(hash)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center gap-2.5 px-4.5 py-2.5 bg-[#370C01] hover:bg-[#260800] active:bg-[#1A0500] text-white font-semibold text-xs sm:text-[13px] rounded-lg shadow-md shadow-[#370C01]/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
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
              className="p-2 rounded-lg text-[#5C443C] hover:text-[#231515] hover:bg-[#370C01]/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8DCCF] bg-[#FAF6EE] px-5 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const hasOwnRoute = link.path !== '/' || link.name === 'Home'
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end
                  onClick={() => {
                    setMobileMenuOpen(false)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className={({ isActive }) => {
                    const activeState = hasOwnRoute && isActive
                    return `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeState
                        ? 'text-[#370C01] bg-[#370C01]/10 font-semibold'
                        : 'text-[#5C443C] hover:text-[#231515] hover:bg-[#370C01]/5'
                    }`
                  }}
                >
                  {link.name}
                </NavLink>
              )
            })}
          </nav>
          <div className="pt-2 border-t border-[#E8DCCF]">
            <Link
              to={navCta.path}
              onClick={(e) => {
                setMobileMenuOpen(false)
                if (navCta.path.includes('#')) {
                  const [route, hash] = navCta.path.split('#')
                  if (window.location.pathname === route) {
                    e.preventDefault()
                    const element = document.getElementById(hash)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#370C01] hover:bg-[#260800] text-white font-semibold text-xs sm:text-[13px] rounded-lg shadow-md"
            >
              <Calendar className="w-4 h-4 stroke-[2]" />
              <span>{navCta.label}</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </Link>
          </div>

          {/* Quick Contact Info */}
          <div className="pt-3 border-t border-[#E8DCCF] flex flex-col gap-2 text-[12px] text-[#5C443C]">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#370C01] shrink-0" />
              <div className="flex items-center gap-1.5 flex-wrap">
                <a href="tel:6206804300" className="hover:text-[#370C01] font-medium transition-colors">6206804300</a>
                <span className="text-[#8A7268]">,</span>
                <a href="tel:9153881025" className="hover:text-[#370C01] font-medium transition-colors">9153881025</a>
              </div>
            </div>
            <a
              href="mailto:Biharsetu@gmail.com"
              className="flex items-center gap-2 hover:text-[#370C01] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C38B34] shrink-0" />
              <span className="font-medium">Biharsetu@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-[#5C443C]">
              <MapPin className="w-3.5 h-3.5 text-[#7A3F16] shrink-0" />
              <span>Ramkrishna Nagar Patna-27</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
