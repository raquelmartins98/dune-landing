'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { Gamepad2, Users, Calendar, Gift, ArrowRight, CheckCircle } from 'lucide-react'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.85, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.1, 0.85, 1], [60, 0, 0, -60])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <motion.section 
      className="relative py-24 md:py-32 px-4 overflow-hidden"
      style={{ opacity, y }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-yellow-500/5 blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        />
      </div>

      <motion.div
        className="relative max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-100 mb-6 text-shadow-dune">
            ¿Listo para Perder?
          </h2>
          
          <p className="font-rajdhani text-xl md:text-2xl text-yellow-200/80 max-w-2xl mx-auto">
            Únete al desafío más épico y demuestra que tienes lo que hay que tener... 
            <span className="text-orange-400 font-semibold"> para ser el peor.</span>
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center gap-4 p-4 rounded-lg bg-neutral-900/50 border border-yellow-500/20">
            <Calendar className="w-8 h-8 text-yellow-400 flex-shrink-0" />
            <div>
              <p className="font-cinzel text-sm text-yellow-400/80">Fechas</p>
              <p className="font-rajdhani text-yellow-100 font-semibold">1 Mayo - 21 Mayo 2026</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 rounded-lg bg-neutral-900/50 border border-yellow-500/20">
            <Users className="w-8 h-8 text-yellow-400 flex-shrink-0" />
            <div>
              <p className="font-cinzel text-sm text-yellow-400/80">Participantes</p>
              <p className="font-rajdhani text-yellow-100 font-semibold">+10,000 registrados</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 rounded-lg bg-neutral-900/50 border border-yellow-500/20">
            <Gift className="w-8 h-8 text-yellow-400 flex-shrink-0" />
            <div>
              <p className="font-cinzel text-sm text-yellow-400/80">Premio Total</p>
              <p className="font-rajdhani text-yellow-100 font-semibold">10,000€ en hardware</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-md mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/40 via-orange-500/20 to-yellow-500/40 rounded-lg blur-lg opacity-60" />
              <div className="relative flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 bg-neutral-950/80 border border-yellow-500/40 rounded-lg font-rajdhani text-yellow-100 placeholder:text-yellow-200/40 focus:outline-none focus:border-yellow-400 transition-colors"
                  required
                />
                <motion.button
                  type="submit"
                  className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Apuntarme</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 p-6 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/10 border border-yellow-500/40"
            >
              <CheckCircle className="w-8 h-8 text-yellow-400" />
              <div>
                <p className="font-cinzel text-lg text-yellow-100">¡Estás dentro!</p>
                <p className="font-rajdhani text-yellow-200/60">Te avisaremos cuando empiece el desafío</p>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <motion.button
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-full text-black font-cinzel">
              <Gamepad2 className="w-8 h-8" />
              <span className="text-xl md:text-2xl font-bold tracking-wider">
                JUGAR AHORA
              </span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.button>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="mt-8 text-center font-rajdhani text-yellow-200/50 text-sm"
        >
          No se requiere tarjeta de crédito. Solo habilidad... o falta de ella.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}
