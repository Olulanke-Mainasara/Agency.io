"use client"
import React from 'react'
import {images} from "../../static-data/images"
import ImageCardSm from '../UI/ImageCardSm'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='flex flex-col min-h-screen pt-24 overflow-hidden xl:gap-16 xl:pt-0 xl:flex-row'>
      <motion.div initial={{opacity: 0, translateY: -30}} animate={{opacity: 1, translateY: 0}} transition={{duration: 0.7}} className='flex flex-col items-center justify-center gap-6 px-5 pb-10 text-center text-black xl:text-right xl:items-end xl:pr-0 basis-1/2 dark:text-white'>
        <h1 className='text-6xl max-w-3xl md:text-8xl text-[#389c96] dark:text-[#6fcbc6]'>Leave the planning to us</h1>
        <p className='max-w-2xl text-lg'>With our powerful tools, you can find the perfect vacation for your budget and interests, book your flights, hotels, and activities all in one place, and get inspired by our curated travel guides.</p>
        <div className='flex justify-center w-full gap-5 xl:justify-end'><button className="px-6 py-3 text-lg text-white bg-[#389c96] rounded-full xl:px-8">Build your trip</button><button className="px-6 py-3 text-lg text-black dark:bg-transparent dark:text-white border border-[#389c96] dark:border-[#6fcbc6] rounded-full xl:px-8 w-fit">Get inspired</button></div>
      </motion.div>
      <div className='relative flex items-center justify-center w-full xl:justify-start basis-1/2'>
        <div className='grid grid-cols-2 gap-10'>{images.map((image, index) => <ImageCardSm key={image.id} imgsrc={image.imgsrc} index={index} />)}</div>
      </div>
    </section>
  )
}

export default Hero