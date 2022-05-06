/* eslint-disable */
import React from 'react'
import Image from 'next/image'
import { KhanhCarousel } from '../../sections/index'

const Home = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <img src='/assets/KhanhWings.jpg' className='mb-8'/>
        <KhanhCarousel/>
    </div>
  )
}

export default Home