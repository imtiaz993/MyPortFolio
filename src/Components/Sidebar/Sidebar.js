import React from 'react'
import './sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div>
          
            <a href="#auth"><i className="far fa-lg fa-user"><span>About</span></i></a>
            <a href="#skills"><i className="far fa-lg fa-chart-bar"><span>Skills</span></i></a>
            <a href="#work"><i className="far fa-lg fa-tasks"><span>Portfolio</span></i></a>
            <a href="#contact"><i className="far fa-lg fa-address-card"><span>Contact</span></i></a>
        </div>
        
    </div>
  )
}

export default Sidebar