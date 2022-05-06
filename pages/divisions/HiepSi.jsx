/* eslint-disable */
import React from 'react'


const HiepSi = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <img src="/assets/HiepSiTeam.JPG" layout='responsive' width={2400} height={1600}/>
      <div className='mt-8 grid sm:grid-cols-1 grid-flow-row-dense lg:grid-cols-3'>
        <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-8">
            <img className="object-cover w-full rounded-t-lg sm:h-24 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/Tina.JPG" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Division Leader</h5>
                <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">Tina Nguyen</p>
            </div>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-8">
            <img className="object-cover w-full h-96 rounded-t-lg sm:h-24 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/Vivian.JPG" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Assistant Leader</h5>
                <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">Vivian Vu</p>
            </div>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-8">
            <img className="object-cover w-full h-96 rounded-t-lg sm:h-24 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/BroJordan.JPG" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Assistant Leader</h5>
                <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">Bro. Jordan Milligan</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HiepSi