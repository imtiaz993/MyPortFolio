import React from 'react'
import './projectLinks.css'
import { NavLink } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
const ProjectLinks = () => {
    return (
        <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
        <h1 className='recent'>Recent Work</h1>
        <div className='myprojectLinks'>
            
            <NavLink className={(navData)=>(navData.isActive ? 'active' : '')} to="/">Online Food Order</NavLink>
            <NavLink className={(navData)=>(navData.isActive ? 'active' : '')}  to="/nordic">Blogging Site</NavLink>
            <NavLink className={(navData)=>(navData.isActive ? 'active' : '')}  to="/xplay"> Youtube/Vimeo Playlist</NavLink>
        </div>
        </ScrollAnimation>
    )
}

export default ProjectLinks