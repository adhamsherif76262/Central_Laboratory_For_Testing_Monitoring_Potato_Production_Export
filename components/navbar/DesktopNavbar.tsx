'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import MorphingTypography from '../MorphingTypography'
import { useParams } from 'next/navigation';
import Image from 'next/image';
export default function RootGrowthNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const {lang} = useParams()
//   const [language, setLanguage] = useState<'en' | 'ar'>('en')
  const [hoveredLink, setHoveredLink] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const isRTL = lang === 'ar';

  // Handle collapse animation
  const handleClose = () => {
    setIsClosing(true)
    const timer = setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 300) // Match the collapse animation duration
    return () => clearTimeout(timer)
  }

  const navLinks = lang === 'en' 
    ? ['Home', 'Services', 'About Us', 'Contact Us']
    : ['الرئيسية', 'الخدمات', 'من نحن', 'اتصل بنا']

  const logoText = lang === "en" ? 'Brown Rot' : 'اللفحة البنية'

  return (
    <nav dir={lang === "ar" ? "rtl" : "ltr"}  className="relative bg-gradient-to-r from-amber-950 via-slate-900 to-green-950 border-b-2 border-green-600/30 overflow-hidden p-0">
      {/* Marquee effect background - SVG scrolls seamlessly with duplicated content */}
      <svg className={`absolute inset-0 w-full h-full opacity-90 animate-marquee-scroll-seamless ${(isOpen || isClosing) ? "hidden" : "block"}`} viewBox="0 0 3000 150" preserveAspectRatio="none">
        <defs>
          <linearGradient id="rootGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.5)" />
            <stop offset="100%" stopColor="rgba(120, 53, 15, 0.5)" />
          </linearGradient>
        </defs>
        {/* First set of root-like paths */}
        <g>
          <path d="M 0,10 Q 50,30 100,50 T 200,120" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 200,5 Q 250,35 300,60 T 400,130" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 400,15 Q 450,30 500,55 T 600,110" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 600,8 Q 650,40 700,70 T 800,140" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 800,20 Q 850,35 900,60 T 1000,125" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 1000,12 Q 1050,38 1100,65 T 1200,135" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 1200,18 Q 1250,32 1300,55 T 1400,115" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 1400,10 Q 1450,36 1500,62 T 1600,130" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 1600,14 Q 1650,34 1700,58 T 1800,120" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 1800,8 Q 1850,37 1900,67 T 2000,140" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 2000,10 Q 2050,30 2100,50 T 2200,120" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 2200,5 Q 2250,35 2300,60 T 2400,130" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 2400,15 Q 2450,30 2500,55 T 2600,110" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 2600,8 Q 2650,40 2700,70 T 2800,140" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 2800,20 Q 2850,35 2900,60 T 3000,125" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 3000,12 Q 3050,38 3100,65 T 3200,135" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 3200,18 Q 3250,32 3300,55 T 3400,115" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 3400,10 Q 3450,36 3500,62 T 3600,130" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 3600,14 Q 3650,34 3700,58 T 3800,120" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 3800,8 Q 3850,37 3900,67 T 4000,140" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
        </g>
        {/* Duplicate set for seamless loop */}
        <g>
        </g>
      </svg>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-8 md:px-2 lg:px-4 py-2 z-10" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className={`flex items-center justify-between`}>
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            {/* <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-amber-600 flex items-center justify-center"> */}
                <div className="logo-shimmer-container">
                    <Image
                      src="/Images/Logo/Brown_Rot_Logo_With_BG .png"
                      alt="Leaf logo"
                      width={150}
                      height={150}
                      loading="lazy"
                      className="rounded-full"
                    />
                </div>    
              {/* <span className="text-white font-bold text-sm">🌿</span> */}
            {/* </div> */}
            <span className="text-white font-bold text-lg z-50 inline">{logoText}</span>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center lg:gap-8 ${isRTL ? 'text-2xl' : 'text-xl'}`}>
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group cursor-pointer" onMouseEnter={() => setHoveredLink(idx)} onMouseLeave={() => setHoveredLink(null)}>
                <button className="text-slate-200 hover:text-green-300 transition-colors duration-300 relative p-4 font-black cursor-pointer">
                  {link}
                  {/* Root growth animation on hover - matching large navbar */}
                  {hoveredLink === idx && (
                    <>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 via-green-300 to-green-400 animate-root-grow"></div>
                      <div className="absolute inset-0 rounded-lg bg-green-400/10 group-hover:bg-green-400/20 transition-colors"></div>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Morphing Typography Language Switcher */}
          <div className={`flex items-end justify-end gap-4 lg:min-w-43.75`}>
            <div className="hidden md:flex">
              <MorphingTypography 
                // initialLanguage={language}
                // onLanguageChange={setLanguage}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => isOpen ? handleClose() : setIsOpen(true)}
              className="md:hidden text-green-400 hover:text-green-300 transition-colors cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Breadcrumb */}
        {(isOpen || isClosing) && (
          <div ref={menuRef} className={`md:hidden min-h-[77.25vh] mt-4 pb-4 origin-top overflow-hidden ${isClosing ? 'animate-breadcrumb-collapse' : 'animate-breadcrumb-expand'} ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="space-y-4 my-[10dvh]">
              {navLinks.map((link, idx) => (
                <button
                  key={idx}
                  className={`block text-2xl font-black  w-full px-4 py-3 text-slate-200 hover:text-green-300 hover:bg-green-600/10 rounded-lg transition-all duration-300 relative group overflow-hidden cursor-pointer ${
                    hoveredLink === idx ? 'bg-green-600/10' : ''
                  }`}
                  onMouseEnter={() => setHoveredLink(idx)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {/* Root growth animation for mobile - same as desktop */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 via-green-300 to-green-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                  <span className="relative">
                    {link}
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-4">
              <MorphingTypography 
                // initialLanguage={language}
                // onLanguageChange={setLanguage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
