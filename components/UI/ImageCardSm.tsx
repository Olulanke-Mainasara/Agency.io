"use client"
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

const ImageCardSm = ({imgsrc, index}: {imgsrc: StaticImageData, index: number}) => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, delay: index * 0.2}} className={`w-72 aspect-square`}>
      <div className='relative w-full h-full overflow-hidden border rounded-lg'><Image src={imgsrc} priority fill alt='' placeholder='blur' /></div>
    </motion.div>
  )
}

export default ImageCardSm