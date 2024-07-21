import React from 'react'
import GalleryCarousal from './GalleryCarousal'

function Gallery() {
  return (
    <div>
        <div>
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-white text-center m-12">
        Gallery
      </h2>
        </div>
        <GalleryCarousal/>
        <div id="timepass">
            Hello World
          </div>
    </div>
  )
}

export default Gallery