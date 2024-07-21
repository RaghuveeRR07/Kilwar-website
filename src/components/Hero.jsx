import React from 'react'
import HappyPeople from '../../public/PeopleHappy-removebg-preview.png'
import { Link } from 'react-router-dom' 

function Hero() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
    <div className="order-2 md:order-2w-full md:w-1/2 mt-10 md:mt-32 text-white">
      <div className='space-y-12'>
        <h1 className="text-6xl font-bold ">
          Collaborate with Kilwar ♧ {" "}
          <div className='mt-6'> <span className="text-pink-700">Contact Us!</span></div>
         
        </h1>
        <p className='text-xl font-thin'>  
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
          incidunt ipsa officiis assumenda minus mollitia eaque autem
          ratione consequuntur tempore at dignissimos architecto,
          consectetur veniam natus quos sequi laborum repellat?{" "}
        </p>

      </div>
      <button className="btn btn-secondary mt-6"><Link to="/Contact">CONTACT US</Link></button>
    </div>
    <div className=" mt-20 pl-20 order-1 md:order-2 md:w-1/2">
    <img src={HappyPeople} /></div>
  </div>
  )
}

export default Hero