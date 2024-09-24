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
   
    <div className="hero-texts">
    <h1 className="title-hero">Where <span className="hero-passion"> Passion</span> Meets <span className="hero-perfection">Perfection</span></h1>
 
    
    <div className="hero-text-desc">
    Elevate your exciting COFFEE journey at <span className="bznm">BZN <sup>M</sup> </span>with experts.
         </div>
     <Link onClick={handleClick} href="#" className="enroll-btn">ENROLL NOW</Link>
 
   </div>
   
   <Image  className="hero-img image-common" src={'/images/persons/hero 4.png'} alt='Coffee art image' width={600} height={600} />
 
  </section>
  )
}

export default HeroSection