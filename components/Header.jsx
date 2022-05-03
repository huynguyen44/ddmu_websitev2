import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
import Image from 'next/image';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-gray-400 py-8">
        <div className="md:float-left block">
    
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              <img src='assets/DMU LOGO.png' className='inline-block h-20 mr-4'/>
              Đoàn Đaminh Úy
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <span className='md:float-right mt-5 mx-8 align-middle text-white ml-4 font-semibold cursor-pointer'>
            <Link href='/AboutUs'>
              <span className='mr-6'>
              <a>About Us</a>
              </span>
            </Link>
            <Link href='/divisions/Home'>
              <span className='mr-6'>
              <a>Divisions</a>
              </span>
            </Link>
            <Link href='/blog'>
              <span className='mr-6'>
              <a>Blog</a>
              </span>
            </Link>
            <Link href='/Contact'>
              <a>Contact Us</a>
            </Link>
          </span>  
        </div>
      </div>
    </div>
  );
};

export default Header;
