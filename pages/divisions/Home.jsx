import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <Image src="/assets/KhanhWings.jpg" layout='responsive' width={3600} height={1600}/>
        <div className='mt-8 grid lg:grid-cols-2 sm:grid-cols-1 grid-flow-row-dense  justify-items-center gap-8'>
        <Link href='/divisions/AuNhi'>
        <a className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full h-96 rounded-t-lg sm:h-24 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/AuNhi.png" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ấu Nhi: Seedlings</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The verdant color of a young wheatling, to symbolize their innocence and youthfulness.</p>
            </div>
        </a>
        </Link>
        <Link href='/divisions/ThieuNhi'>
        <a className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl sm:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/ThieuNhi.png" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Thiếu Nhi: Searching</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">To symbolize their uniqueness and identity with great hope of life.</p>
            </div>
        </a>
        </Link>
        <Link href='/divisions/NghiaSi'>
        <a className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl sm:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/NghiaSi.png" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nghĩa Sĩ: Companions</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Symbolizing the sunrise of the youths before coming into their adult ages and the manifestation of the heart; the opening of one's life to others.</p>
            </div>
        </a>
        </Link>
        <Link href='/divisions/HiepSi'>
        <a className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl sm:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/HiepSi.png" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hiệp Sĩ: Knights of the Eucharist</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Symbolizing the hard work and dedication to serve God. The knights are invited to participate in the mission of becoming the salt and light for the world.</p>
            </div>
        </a>
        </Link>
    </div>
    </div>
  )
}

export default Home