'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Trailer', href: '#video' },
  { label: 'El Reto', href: '#challenge' },
  { label: 'Participar', href: '#cta' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-lg border-b border-yellow-500/20' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.a
              href="#hero"
              className="flex items-center gap-2"
              onClick={(e) => { e.preventDefault(); handleLinkClick('#hero') }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
<span className="text-gradient glow-text inline-block px-6 py-3 text-2xl md:text-3xl border-4 border-yellow-500">D</span>
              <span className="font-cinzel text-lg md:text-xl font-bold text-yellow-100 tracking-wider">une</span>
            </motion.a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
                  className="relative px-4 py-2 font-rajdhani text-sm text-yellow-200/80 hover:text-yellow-400 tracking-wide transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              
              <motion.button
                className="ml-4 px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg font-cinzel text-sm font-semibold text-black tracking-wider"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(234, 179, 8, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLinkClick('#cta')}
              >
                JUGAR
              </motion.button>
            </div>

            <motion.button
              className="md:hidden p-2 text-yellow-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/95 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            <motion.div
              className="relative flex flex-col items-center justify-center h-full space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
                  className="flex items-center gap-2 px-8 py-4 font-cinzel text-2xl text-yellow-100 hover:text-yellow-400 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ChevronRight className="w-5 h-5 text-yellow-500" />
                  {link.label}
                </motion.a>
              ))}
              
              <motion.button
                className="mt-8 px-12 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg font-cinzel text-xl font-bold text-black tracking-wider"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLinkClick('#cta')}
              >
                JUGAR AHORA
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
