'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Twitter, Instagram, Youtube, ChevronUp } from 'lucide-react'

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Github, href: '#', label: 'GitHub' },
]

const footerLinks = [
  { label: 'Bases Legales', href: '#' },
  { label: 'Política de Privacidad', href: '#' },
  { label: 'Términos y Condiciones', href: '#' },
  { label: 'Contacto', href: '#' },
]

export default function FooterSection() {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end end"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.1], [40, 0])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  return (
    <motion.footer 
      className="relative py-16 px-4 bg-black"
      style={{ opacity, y }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black to-black" />
      
      <motion.div
        className="relative max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center mb-12">
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-yellow-400 hover:text-orange-400 transition-colors mb-8"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-cinzel text-sm tracking-widest uppercase">Volver arriba</span>
            <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>

          <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent mb-12" />
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <span className="font-cinzel text-base md:text-2xl font-bold text-black">Dune</span>
          </div>
          
          <p className="font-rajdhani text-yellow-200/60 max-w-lg mx-auto">
            Un desafío único para encontrar al peor jugador del mundo. 
            El ganador se llevará un setup gaming de 10.000€.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="font-rajdhani text-yellow-200/50 hover:text-yellow-400 transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 rounded-lg bg-neutral-900/50 flex items-center justify-center text-yellow-200/50 hover:text-yellow-400 hover:bg-neutral-800 transition-all border border-transparent hover:border-yellow-500/30"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/50 border border-yellow-500/20">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="font-rajdhani text-xs text-yellow-200/40">
              El desierto te llama...
            </span>
          </div>
          
          <p className="mt-6 font-rajdhani text-xs text-yellow-200/30">
            © 2026 Buscamos al Peor Jugador del Mundo. Todos los derechos reservados.
          </p>
          <p className="mt-2 font-rajdhani text-xs text-yellow-200/20">
            Inspirado en la estética de Dune. No afiliado con Legendary Pictures.
          </p>
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}
