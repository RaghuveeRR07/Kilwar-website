import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from './data.json';
import ProjectCard from './ProjectCard.jsx';




function HomeProjects() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
  return (
    <>
    <div className=' mx-auto md:px-44 pt-10'>
        <div><h1 className='font-bold text-3xl pb-2'>Our Projects</h1>
        <p className='text-xl'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea incidunt ipsa officiis assumenda minus</p>
    </div>
    
    <div className='px-6'>
    <Slider {...settings}>
        
        {data.map((project)=>(
            <ProjectCard project={project} key={project.id} />
        ))}{
          
        }
        
      </Slider>
    </div>
    </div>
    
    </>
  )
}

export default HomeProjects;