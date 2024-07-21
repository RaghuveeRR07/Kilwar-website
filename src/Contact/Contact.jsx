import React from 'react'

import contactUs from '../../public/contactUS.jpeg'
import Button from '../components/OutlineButton'
function Contact() {
  return (
    <>
        <div className=''>
        {/* <label className="input input-bordered flex items-center gap-2"> */}
  {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" /> */}
{/* </label> */}




    <div className="mx-auto max-w-7xl px-2 py-2 lg:px-20">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className='py-8 lg:py-32'>       
        {/* <h1 className='font-bold text-3xl'>Email Us At :   <button className="btn bg-indigo-500 text-white"></button></h1>  */}
        
        <h1 className='font-bold text-3xl'>Email Us At :<Button name="kilwar@info.com"/></h1>
        <div className="grid grid-cols-1 md:grid-cols-4">
        <a href="https://www.linkedin.com/"><img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw" className='cursor-pointer mt-12 w-12 h-12 rounded-md hover:scale-125 duration-300' /></a>
        <a href="https://x.com/?lang=en"><img src="https://www.notebookcheck.com/fileadmin/Notebooks/News/_nc3/twitter_x_musk_logo14.jpg" className='cursor-pointer mt-12 w-14 h-12 rounded-md hover:scale-125 duration-300' /></a>
        <a href="https://www.facebook.com/"><img src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338507_1280.png" className='cursor-pointer mt-12 w-12 h-12 rounded-md hover:scale-125 duration-300' /></a>
        <a href="https://github.com/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" className='cursor-pointer mt-12 w-12 rounded-md hover:scale-125 duration-300' /></a>
        {/* <Button socialMedia="instragram" /> */}
        </div>
        </div>

        {/* <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="text-3xl font-bold text-white">Sign up for our weekly newsletter</h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
            commodo posuere et sit amet ligula.
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              Trusted by over 100,000+ businesses and individuals
            </p>
            <div className="mt-2 flex items-center">
              <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 inline-block">
                <span className="text-sm font-semibold text-gray-800">4.8/5 . 3420 Reviews</span>
              </span>
            </div>
          </div>
          <form className="mt-6">
            <div className="flex w-full max-w-md flex-col space-y-4">
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
              ></input>
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Subscribe
              </button>
            </div>
          </form>
          <p className="mt-2">
            <span className="text-sm text-gray-600">
              By signing up, you agree to our terms of service and privacy policy.
            </span>
          </p>
        </div> */}

        <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
          {/* <img
            className="h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Newsletter"
          /> */}
          <section className="">
  <div className="py-8 lg:py-32 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-2 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"><span className='text-indigo-500'>Got a technical issue?</span> Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name" required />
            </div>
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email id" required />
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="bg-indigo-500 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section> 
        </div>
      </div>
    </div>






</div>
    </>
  )
}

export default Contact