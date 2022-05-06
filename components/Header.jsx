/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
import Image from 'next/image';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
  <div className="container mx-auto px-10 mb-8">
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <Link href="/">
        <span className="cursor-pointer font-bold text-4xl text-white">
          <img src='assets/DMU LOGO.png' className='inline-block h-20 mr-4'/>
          Đoàn Đaminh Úy
        </span>
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/AboutUs">About Us</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/Divisions/Home">Divisions</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/blog">Blog</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/Contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
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
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  </div>
  );
};

export default Header;
