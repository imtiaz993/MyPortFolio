import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import IMG1 from './images/1.jpg'
import IMG2 from './images/2.jpg'
import IMG3 from './images/3.jpg'

import '../projects.css'
const Xplay = () => {
  return (
    <div className='projectt'>
    <div className='projectDiv'>
    <ScrollAnimation className='desc' animateIn="animate__lightSpeedInLeft" animateOnce={true}> 
        <div>
        <h4>Title:</h4>
        <h2>Xplay</h2>
        </div>
        <div>
        <h4>Tools & Technologies:</h4>
        <p className='tool_tech'>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>Local Storage</span>
          </p>
          <a className='visit' href="https://imtiaz993.github.io/XPlay/" target="_blank">Visit Project<i class="fas fa-external-link-alt"></i></a>
        </div>
        
        
        
        
        </ScrollAnimation>
      <ScrollAnimation animateIn="animate__backInUp" animateOnce={true}>
      <Carousel className='carousel' indicators={false} fade={true} pause={false} interval={null}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={IMG1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={IMG2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={IMG3}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
</ScrollAnimation>
<ScrollAnimation className='description'animateIn="animate__fadeInUp" animateOnce={true}>
        <h4>Description:</h4>
        <p className='project_desc'>
        All platform's videos at one place.
        Playlist for YouTube, Vimeo and Dailymotion Videos.
        User adds the link and name of Videos, then it will be stored as favourite playlist in the browser's Local Storage
        </p>
        </ScrollAnimation>
    </div>
    
    </div>
  )
}

export default Xplay