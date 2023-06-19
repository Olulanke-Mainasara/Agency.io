import React from 'react'
import {images} from "../../static-data/images"
import ImageCardSm from '../UI/ImageCardSm'

const Hero = () => {
  return (
    <section className='flex flex-col w-screen h-screen pb-5 overflow-hidden'>
        <div className='flex flex-col items-center justify-end gap-6 pb-10 text-center basis-1/2'>
            <h1 className='max-w-9xl text-8xl'>Leave the planning to us</h1>
            <p className='max-w-2xl text-xl'>With our powerful tools, you can find the perfect vacation for your budget and interests, book your flights, hotels, and activities all in one place, and get inspired by our curated travel guides.</p>
            <button className="px-8 py-3 text-lg text-white bg-black rounded-full xl:px-16 w-fit">Get started</button>
        </div>
        <div className='relative flex justify-center w-full basis-1/2'>
            {images.map((image, index) => <ImageCardSm key={image.id} imgsrc={image.imgsrc} index={index} />)}
        </div>
    </section>
  )
}

export default Hero