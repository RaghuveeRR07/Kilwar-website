import React from 'react'
import GalleryData from './AboutData.json'
import Card from '../components/Card2.jsx'
import { AuroraHero } from './AboutHero.jsx'
import { AboutLinks } from './AboutLinks.jsx'

function About() {
  return (
    <div>
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
  <div>
    {/* <AuroraHero /> */}
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-white text-center m-">
        Areas of Experience
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed  lg:mx-auto text-gray-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
      </p>
    </div>
    {/* <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-12 md:mt-16 md:grid-cols-2 "> */}

          {/* <h2 className="text-xl font-semibold text-white mb-4">Blockchain</h2> */}
          {/* {GalleryData.map((project)=>(
        <Card project={project} key={project.id} />
    ))} */}
<div className='mt-12'>
  <AboutLinks />
  </div>
    
          
          {/* <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
            iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?
          </p> */}
        {/* </div> */}
      
    </div>
    <p className=" text-lg mt-10 text-center text-gray-400">
      Wan&apos;t to know More?{' '}
      <a href="/Contact" title="" className="black font-semibold hover:underline">
        Contact us
      </a>
    </p>
  
</section>
</div>
  )
}

export default About