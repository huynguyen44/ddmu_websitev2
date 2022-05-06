/* eslint-disable */
import React from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

  emailjs.sendForm('service_sfmsk94', 'template_xreh1zw', e.target, '7VWtzXaaChK43rHYV')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}


  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="flex justify-center items-center mb-8">
          <span className="cursor-pointer font-bold text-4xl text-white">
            Got Questions? Reach Out To Us Here!
          </span>
      </div>
      <img src='/assets/KhanhWings.jpg' className='mb-8'/>
      <form onSubmit={sendEmail}>
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                  <label for="name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">First & Last Name</label>
                  <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required/>
              </div>
              <div>
                <label for="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Email address</label>
                <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
              </div>
              <div>
                  <label for="subject" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Subject</label>
                  <input type="text" name="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Vietnamese Martyrs" required/>
              </div>  
          </div>
          <div className="mb-6">
            <label for="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Message</label>
            <textarea type="email" name="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
          </div> 
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  )
}

export default Contact