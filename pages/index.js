/* eslint-disable */
import { FeaturedPosts, KhanhCarousel } from '../sections/index';
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-5 mb-8">
      <div className="flex justify-center items-center mb-8">
          <span className="cursor-pointer font-bold text-4xl text-white">
            Welcome to the Home of Đoàn Đaminh Úy!!
          </span>
      </div>
      <video autoPlay loop muted playsInline className='mb-8'>
        <source src='assets/DJI-0100-1.mp4' type='video/mp4'/>
      </video>
      <FeaturedPosts/>
      <KhanhCarousel/>
    </div>
      
  );
}



