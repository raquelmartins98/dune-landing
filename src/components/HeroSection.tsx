'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface HeroSectionProps {
  isLoaded: boolean
}

export default function HeroSection({ isLoaded }: HeroSectionProps) {
  const { scrollYProgress } = useScroll()
  
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.3], ["0vh", "-15vh"])
  
  const parallaxY = useTransform(scrollYProgress, [0, 0.5], ["0vh", "-10vh"])
  
  const skyOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.3])
  const duneBackOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const duneFrontOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.5])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div 
        className="parallax-container"
        style={{ y: parallaxY }}
      >
        <motion.div className="layer layer-sky" style={{ opacity: skyOpacity }} />
        <motion.div className="layer layer-stars" />
        <motion.div className="layer layer-moon" />
        <motion.div className="layer layer-dune-back" style={{ opacity: duneBackOpacity }} />
        <motion.div className="layer layer-dust" />
        <motion.div className="layer layer-dune-mid" />
        <motion.div className="layer layer-dune-front" style={{ opacity: duneFrontOpacity }} />
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(249, 115, 22, 0.5) 0%, transparent 70%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="text-center space-y-2 md:space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.h1
            variants={itemVariants}
            className="font-cinzel text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[0.1em]"
          ></motion.h1>

          <motion.h2
            variants={itemVariants}
            className="font-cinzel text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium tracking-[0.2em] text-orange-400"
          >
            ARRAGAN DOMINION
          </motion.h2>

          <motion.div variants={itemVariants} className="w-24 md:w-32 h-px mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent my-4 md:my-6" />

          <motion.h3
            variants={itemVariants}
            className="font-cinzel text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
          >
            <span className="text-gradient glow-text">Buscamos al</span>
            <br />
            <span className="text-yellow-300">Peor Jugador</span>
            <br />
            <span className="text-gradient glow-text">del Mundo</span>
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="font-rajdhani text-base md:text-lg lg:text-xl text-yellow-100/80 text-center max-w-xl mx-auto mt-4 md:mt-6"
          >
            ¿Crees que eres terrible jugando?{' '}
            <span className="text-orange-400 font-semibold">Demuéstralo y llévate un setup de 10.000€</span>
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6 md:mt-8">
            <motion.button
              className="btn-primary group pointer-events-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Participa Ahora</span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-yellow-400/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
