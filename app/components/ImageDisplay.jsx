import Image from 'next/image'
import React from 'react'

const ImageDisplay = ({ src, alt, width, height }) => {
  return (
    <Image src={src} alt={alt} width={width} height={height} />
  )
}

export default ImageDisplay