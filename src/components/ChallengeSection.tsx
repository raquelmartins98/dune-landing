'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Target, Trophy, Zap, Shield, Crosshair, Crown } from 'lucide-react'

const challenges = [
  {
    icon: Crosshair,
    title: "El Reto",
    description: "Juega partidas ranked y acumula la puntuación más baja posible. Cuanto peor seas, mejor."
  },
  {
    icon: Trophy,
    title: "El Premio",
    description: "Setup gaming completo valorado en 10.000€ con la mejor tecnología de PcComponentes."
  },
  {
    icon: Zap,
    title: "La Dinámica",
    description: "3 semanas de competitivo caos. Los 10 peores avanzan a la final presencial."
  },
  {
    icon: Shield,
    title: "Fair Play",
    description: "Anti-cheat obligatorio. No se permite suicidarse. Solo skill (o falta de ella)."
  }
]

export default function ChallengeSection() {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.85, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.1, 0.85, 1], [60, 0, 0, -60])

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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  return (
    <motion.section 
      className="relative py-24 md:py-32 px-4 overflow-hidden"
      style={{ opacity, y }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900/50 to-black" />
      
      <motion.div
        className="relative max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Target className="w-8 h-8 text-yellow-400" />
            <span className="font-cinzel text-sm tracking-[0.3em] uppercase text-yellow-400">
              Cómo Funciona
            </span>
            <Target className="w-8 h-8 text-yellow-400" />
          </motion.div>
          
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-100 mb-6">
            El Desafío Definitivo
          </h2>
          
          <p className="font-rajdhani text-lg md:text-xl text-yellow-200/70 max-w-3xl mx-auto">
            En un mundo donde todos quieren ser los mejores, nosotros buscamos lo contrario. 
            ¿Tienes el talento de ser terrible? Este es tu momento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-dune p-6 md:p-8 rounded-lg group"
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="w-14 h-14 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/10 flex items-center justify-center mb-6 group-hover:from-yellow-500/30 group-hover:to-orange-500/20 transition-all duration-300 border border-yellow-500/20"
                whileHover={{ rotate: 5 }}
              >
                <challenge.icon className="w-7 h-7 text-yellow-400" />
              </motion.div>
              
              <h3 className="font-cinzel text-xl font-semibold text-yellow-100 mb-3">
                {challenge.title}
              </h3>
              
              <p className="font-rajdhani text-yellow-200/60 leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 p-6 rounded-lg bg-gradient-to-r from-black/80 via-yellow-900/20 to-black/80 border border-yellow-500/30">
            <Crown className="w-8 h-8 text-yellow-400" />
            <div className="text-left">
              <p className="font-cinzel text-lg text-yellow-400/80">Premio Total</p>
              <p className="font-cinzel text-3xl md:text-4xl font-bold text-gradient">
                10.000€
              </p>
            </div>
            <Crown className="w-8 h-8 text-yellow-400" />
          </div>
        </motion.div>
      </motion.div>

      <div className="section-divider max-w-4xl mx-auto mt-24" />
    </motion.section>
  )
}
