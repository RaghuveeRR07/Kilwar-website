import React, { useEffect } from 'react'
import ServiceData from './ServiceData.json'
import Hero from './Hero2'
import { useLocation } from 'react-router-dom';

// import ServiceLayout from './ServiceLayout'
// import "./styles.css"

function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }
  }, [location]);
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