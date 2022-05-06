import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const KhanhCarousel = () => {
  
  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );

  return (
    <div className="mb-8">
      <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="px-5">
        <Link href='/divisions/AuNhi'>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
                <img className="rounded-t-lg" src="/assets/AuNhi.jpg" alt="" />
                <div className="p-5">
                    <h5 className="mb-2 mx-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Ấu Nhi: Seedlings</h5>
                    <p className="mb-3 mx-5 font-normal text-gray-700 dark:text-gray-400 text-center">The verdant color of a young wheatling, to symbolize their innocence and youthfulness.</p>
                </div>
            </div>
        </Link>
        <Link href='/divisions/ThieuNhi'>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src="/assets/ThieuNhi.jpg" alt="" />
            <div className="p-5">
                <h5 className="mb-2 mx-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Thiếu Nhi: Searching</h5>
                <p className="mb-3 mx-5 font-normal text-gray-700 dark:text-gray-400 text-center">To symbolize their uniqueness and identity with great hope of life.</p>
            </div>
        </div>
        </Link>
        <Link href='/divisions/NghiaSi'>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src="/assets/NghiaSi.jpg" alt="" />
            <div className="p-5">
                <h5 className="mb-2 mx-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Nghĩa Sĩ: Companions</h5>
                <p className="mb-3 mx-5 font-normal text-gray-700 dark:text-gray-400 text-center">Symbolizing the sunrise of the youths before coming into their adult ages and the manifestation of the heart; the opening of one's life to others.</p>
            </div>
        </div>
        </Link>
        <Link href='/divisions/HiepSi'>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src="/assets/HiepSi.jpg" alt="" />
            <div className="p-5">
                <h5 className="mb-2 mx-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Hiệp Sĩ: Knights of the Eucharist</h5>
                <p className="mb-3 mx-5 font-normal text-gray-700 dark:text-gray-400 text-center">Symbolizing the hard work and dedication to serve God. The knights are invited to participate in the mission of becoming the salt and light for the world.</p>
            </div>
        </div>
        </Link>
        <Link href='/divisions/HuynhTruong'>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src="/assets/HuynhTruong.jpg" alt="" />
            <div className="p-5">
                <h5 className="mb-2 mx-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Huynh Trưởng: Youth Leader</h5>
                <p className="mb-3 mx-5 font-normal text-gray-700 dark:text-gray-400 text-center">Symbolizing the love, service, sacrifice, and responsibility.</p>
            </div>
        </div>
        </Link>
        <Link href='/divisions/TroTa'>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src="/assets/TroTa.jpg" alt="" />
            <div className="p-5">
                <h5 className="mb-2 mx-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Trợ Tá: Parental Leaders</h5>
                <p className="mb-3 mx-5 font-normal text-gray-700 dark:text-gray-400 text-center"></p>
            </div>
        </div>
        </Link>
      </Carousel>
    </div>
  );
};

export default KhanhCarousel;
