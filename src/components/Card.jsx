import React from 'react'

function Card({project}) {
  return (
    <div><div className="card bg-base-100 w-96 shadow-xl hover:shadow-lg hover:shadow-gray-500 transition-shadow  hover:scale-105 duration-600">
    <figure>
      <img
        src={project.image}
        alt="Shoes"
        className='w-full h-60' />
        
    </figure>
    <div className="card-body">
      <h2 className="card-title text-black">{project.name}</h2>
      <p className='text-black'>{project.description}</p>
      <div className="card-actions justify-end">
        {/* <button className="btn btn-primary">Buy Now</button> */}
      </div>
    </div>
  </div></div>
  )
}

export default Card