'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.85, 1], [0, 1, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.85, 1], [80, 0, 0, 0, -80])
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.85, 1], [0.95, 1, 1, 1, 0.95])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <motion.section 
      className="relative py-24 md:py-32 px-4 bg-black"
      style={{ opacity, y, scale }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      <motion.div
        className="relative max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-10">
          <motion.div 
            className="inline-flex items-center gap-3 mb-4"
            animate={{ 
              textShadow: isHovered 
                ? '0 0 30px rgba(234, 179, 8, 0.8)' 
                : '0 0 10px rgba(234, 179, 8, 0.3)'
            }}
          >
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-yellow-400" />
            <span className="font-cinzel text-xs md:text-sm tracking-[0.4em] uppercase text-yellow-400/70">
              Gameplay Trailer
            </span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-yellow-400" />
          </motion.div>
          
          <h2 className="font-cinzel text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-100 mb-3">
            DUNE: ARRAGAN DOMINION
          </h2>
          <p className="font-rajdhani text-yellow-200/50 text-sm md:text-base">
            Mirá el gameplay oficial del desafío
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/50 via-orange-500/30 to-yellow-500/50 rounded-2xl blur-xl transition-opacity duration-500"
            animate={{ opacity: isHovered ? 0.8 : 0.4 }}
          />
          
          <div className="relative aspect-video bg-neutral-950 rounded-xl overflow-hidden border border-yellow-500/20">
            <video
              ref={videoRef}
              src="/videos/dune_video_juego.mp4"
              className="w-full h-full object-cover"
              muted={isMuted}
              onEnded={handleVideoEnd}
              playsInline
              poster="/videos/thumbnail.jpg"
            />

            <div className="absolute bottom-0 right-0 w-48 h-12 bg-gradient-to-t from-black to-transparent" />

            {!isPlaying && (
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1280&h=720&fit=crop)',
                  filter: 'brightness(0.3) contrast(1.2) saturate(0.7)'
                }}
              />
            )}
            
            {!isPlaying && (
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            )}
            
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.button
                className="group relative"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayPause}
              >
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl animate-pulse" />
                
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 flex items-center justify-center shadow-2xl shadow-yellow-500/30">
                  {isPlaying ? (
                    <Pause className="w-10 h-10 md:w-12 md:h-12 text-black fill-current" />
                  ) : (
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-black fill-current ml-1" />
                  )}
                </div>
                
                {!isPlaying && (
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-cinzel text-sm text-yellow-300 tracking-wider whitespace-nowrap">
                      REPRODUCIR
                    </span>
                  </div>
                )}
              </motion.button>
            </div>

            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-rajdhani text-xs text-yellow-200/60 uppercase tracking-wider">
                Gameplay
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                    <span className="font-cinzel text-sm font-bold text-yellow-400">Dune</span>
                  </div>
                  <div>
                    <p className="font-cinzel text-sm text-yellow-100">DUNE: Arragan Dominion</p>
                    <p className="font-rajdhani text-xs text-yellow-200/50">Official Gameplay</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <motion.button
                    className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleMute}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </motion.button>
                  
                  <motion.button
                    className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleFullscreen}
                  >
                    <Maximize2 className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs font-rajdhani text-yellow-300 border border-yellow-500/30">
                MP4
              </span>
            </div>
          </div>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-center text-yellow-200/40 mt-6 font-rajdhani text-xs"
        >
          Haz clic para reproducir el gameplay oficial de DUNE: Arragan Dominion
        </motion.p>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </motion.section>
  )
}
