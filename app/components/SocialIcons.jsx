import Link from 'next/link'
import React from 'react'
import { CiFacebook, CiInstagram, CiYoutube } from 'react-icons/ci'
import { FaTelegram } from 'react-icons/fa'
import { PiTiktokLogoThin } from 'react-icons/pi'
import './socialIcons.css'

const SocialIcons = () => {
  return (
    <div className="social-icons">
    <Link href="#"><FaTelegram size={35} color="#1e3d2e"/></Link>
    <Link href="#"><CiInstagram size={35} color="#1e3d2e"/></Link>
    <Link href="#"><CiYoutube size={35} color="#1e3d2e"/></Link>
    <Link href="#"><CiFacebook  size={35} color="#1e3d2e"/></Link>
    <Link href="#"><PiTiktokLogoThin  size={35}color="#1e3d2e"/></Link>
  </div>
  )
}

export default SocialIcons