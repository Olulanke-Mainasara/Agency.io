import React from 'react'
import Image, { StaticImageData } from 'next/image'

const ImageCardSm = ({imgsrc, index}: {imgsrc: StaticImageData, index: number}) => {
  return (
    <div className={`w-72 h-full mx-10 ${index == 0 ? "absolute left-0" : index == 3 ? "absolute right-0" : ""} -top-1/4`}>
      <div className='relative w-full h-full overflow-hidden rounded-lg'><Image src={imgsrc} priority fill alt='' /></div>
    </div>
  )
}

export default ImageCardSm