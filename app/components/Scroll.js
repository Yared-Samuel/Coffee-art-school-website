import React from 'react'
import { TbArrowBigUpLines } from "react-icons/tb";


const Scroll = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <div onClick={() => scrollToTop()} className="scroll">
        <TbArrowBigUpLines size={40} color='rgba(193,141,35,255)' />
    </div>
  )
}

export default Scroll