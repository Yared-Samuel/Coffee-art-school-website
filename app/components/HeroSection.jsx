'use client'
import Image from 'next/image'
import Link from 'next/link'
import './heroSection.css'
import { useRef } from 'react'
const HeroSection = () => {
  const ref = useRef(null)
    const handleClick = () => {
    
  }
  return (
    <section>
      <div className="hero-container">
   
    <div className="hero-texts">
    <h1 className="title-hero">Where Passion Meets <span className="hero-perfection">Perfection</span></h1>
 
    
    <div className="hero-text-desc">
    Elevate your exciting COFFEE journey at <span className="bznm">BZN <sup>M</sup> </span>with experts.
         </div>
     <Link onClick={handleClick} href="#" className="enroll-btn">ENROLL NOW</Link>
 
   </div>
   
   <Image  className="hero-img image-common" src={'/images/hero 4.webp'} alt='Coffee art image' width={500} height={500} />
   </div>

  </section>
  )
}

export default HeroSection