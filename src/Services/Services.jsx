import React from 'react'
import ServiceData from './ServiceData.json'
import Hero from '../components/Hero2'
// import ServiceLayout from './ServiceLayout'
// import "./styles.css"

function Services() {
  return (
    <div>
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-white text-center m-12">
        Services
      </h2>
      <div id="page-layout" className="pt-2">
        {/* {ServiceData.map((service)=>(
          <ServiceLayout/>
          
        ))} */}
<Hero />
      </div>
    </div>
  )
}

export default Services