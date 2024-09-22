import Image from 'next/image'
import React from 'react'
import './gallery.css'

const Gallery = () => {
  return (
    <div>
      <div className="gallery">
        <h4 className="gallery-text">Priceless Experiences makes your dream real</h4>
        <Image
          src={"/images/persons/group 1.jpg"}
          width={500}
          height={500}
          alt="a forest after an apocalypse"
        />
        <Image
          src={"/images/persons/group 2.jpg"}
          width={500}
          height={500}
          alt="a waterfall and many rocks"
        />
        <Image
          src={"/images/persons/group 3.jpg"}
          width={500}
          height={500}
          alt="a house on a mountain"
        />
        <Image
          src={"/images/persons/group 4.jpg"}
          width={500}
          height={500}
          alt="sime pink flowers"
        />
        <Image
          src={"/images/persons/group.jpg"}
          width={500}
          height={500}
          alt="big rocks with some trees"
        />
      </div>
      
    </div>
  )
}

export default Gallery