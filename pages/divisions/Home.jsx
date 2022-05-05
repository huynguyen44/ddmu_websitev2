/* eslint-disable */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { KhanhCarousel } from '../../sections/index'

const Home = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <Image src="/assets/KhanhWings.jpg" layout='responsive' width={3600} height={1600}/>
        <KhanhCarousel/>
    </div>
  )
}

export default Home