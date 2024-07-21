import React from 'react'
import '../styles/ProjectCard.css'

function ProjectCard({ project}) {
  return (
    <div className='w-80'>
        

  <div className="nft">
    <div className='main'>
        <div className='flex justify-center items-center w-full mx-3.5'>
    <img className='tokenImage' src="https://wallpapers.com/images/hd/best-laptop-1600-x-900-background-a1ed49luiyk96u4c.jpg" alt="NFT" />
    </div>
      <h2 className='mt-4 flex justify-center text-xl font-semibold'>{project.name}</h2>
      <p className='description flex justify-center'>{project.description}</p>
      <div className='tokenInfo'>
        
        <div className="duration">
          <ins>◷</ins>
          <p>{project.status}</p>
        </div>
      </div>
      <hr />
      <div className='creator pt-2'>
        <div className='wrapper cursor-pointer'>
          <img src="https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png" alt="Creator" className='mt-2' />
        </div>
        <p><ins>Visit</ins> GitHub</p>
      </div>
    </div>
  </div>



    </div>
  )
}

export default ProjectCard;