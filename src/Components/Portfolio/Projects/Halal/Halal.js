import React from 'react'
import '../projects.css'
import ScrollAnimation from 'react-animate-on-scroll'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import IMG1 from './images/1.jpg'
import IMG2 from './images/2.jpg'
import IMG3 from './images/3.jpg'
import IMG4 from './images/4.jpg'
import IMG5 from './images/5.jpg'
import IMG6 from './images/6.jpg'
import IMG7 from './images/7.jpg'
import IMG8 from './images/8.jpg'
import IMG9 from './images/9.jpg'
import IMG10 from './images/10.jpg'
import IMG11 from './images/11.jpg'

const Halal = () => {
  return (
    <div className='projectt'>
    <div className='projectDiv'>
    <ScrollAnimation className='desc' animateIn="animate__lightSpeedInLeft" animateOnce={true}> 
        <div>
        <h4>Title:</h4>
        <h2>Halal Foods</h2>
        </div>
        <div>
        <h4>Tools & Technologies:</h4>
        <p className='tool_tech'>
          <span>React</span>
          <span>Firebase</span>
          <span>CSS</span>
          <span>Chart.js</span>
          <span>MUI(Admin Dashboard) </span>
          </p>
          <a className='visit' href="https://gallant-thompson-9c2ae2.netlify.app/" target="_blank">Visit Project<i class="fas fa-external-link-alt"></i></a>
        </div>
       
       
        

      </ScrollAnimation>
      <div>
       
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

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={IMG4}
      alt="Fourth slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={IMG5}
      alt="Fifth slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={IMG6}
      alt="Sixth slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={IMG7}
      alt="Seventh slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={IMG8}
      alt="Eighth slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={IMG9}
      alt="Nineth slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={IMG10}
      alt="Tenth slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={IMG11}
      alt="Eleventh slide"
    />
  </Carousel.Item>

</Carousel>
</ScrollAnimation>
<ScrollAnimation className='description'animateIn="animate__fadeInUp" animateOnce={true}>
        <h4>Description:</h4>
        <p className='project_desc'>
User registers themselves and then can buy Food Items and check their previous orders & Currently order status.
<br/>
Admin can add, update or delete food items and can update order status (Confirmed, Preparing, Delivered, Completed)
Admin panel have all the Statistics and list of all user's name, profile pic and email.
        </p>
        </ScrollAnimation>
      </div>
    
      
    </div>
    
    </div>
  )
}

export default Halal