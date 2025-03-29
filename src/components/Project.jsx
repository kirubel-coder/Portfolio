import React from 'react'
import '../css/Project.css'

function Project(props) {
  return (
    <div className='project'>
        <div className="project-detail">
        <img className='project-img' src={props.img} alt="project" />
        <h2>{props.title}</h2>
        </div>
    </div>
  )
} 

export default Project