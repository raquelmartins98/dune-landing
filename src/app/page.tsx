'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import VideoSection from '@/components/VideoSection'
import ChallengeSection from '@/components/ChallengeSection'
import CTASection from '@/components/CTASection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="relative bg-black">
      <Navbar />
      <section id="hero">
        <HeroSection isLoaded={isLoaded} />
      </section>
      <section id="video">
        <VideoSection />
      </section>
      <section id="challenge">
        <ChallengeSection />
      </section>
      <section id="cta">
        <CTASection />
      </section>
      <FooterSection />
    </main>
  )
}
