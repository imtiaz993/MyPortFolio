import React from 'react'
import './skills.css'
import Lottie from 'react-lottie';
import animationData from '../Contact/lottie/97525-code-dark.json';
import ScrollAnimation from 'react-animate-on-scroll'
import IMG1 from '../images/img01.jpg'
import IMG2 from '../images/img02.jpg'
import IMG12 from '../images/img2.jpg'
import IMG3 from '../images/img3.jpg'
import IMG4 from '../images/img4.svg'
import IMG5 from '../images/img5.jpg'
import IMG6 from '../images/img6.jpg'
import IMG7 from '../images/img7.jpg'
import IMG8 from '../images/img8.jpg'
import IMG9 from '../images/img9.jpg'
import IMG10 from '../images/img10.jpg'
import IMG11 from '../images/img11.jpg'

const Skills = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="skills " id="skills">
      <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
      <h1 className="technicalskills">TECHNICAL SKILLS</h1>
</ScrollAnimation>

      <div className='skillDesc'>
     
     
        <ScrollAnimation className='skillsLotie' animateIn="animate__zoomIn "  animateOnce={true}>
        <Lottie
            options={defaultOptions}
            height={250}
            width={320}
          />
      </ScrollAnimation>

      
        <ScrollAnimation className='skillSet' animateIn="animate__fadeInLeft"  animateOnce={true}>
          <p>Equipped with knowledge of libraries and frameworks, Well-versed in programming languages, Dexterous in every stage of website developement as well as testing and debugging.</p>
          <div className='skillSetFlex'>
            <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Animate.css</li>
            <li>Javascript</li>
            </ul>

            <ul>
            <li>ES6</li>
            <li>React</li>
            <li>Redux</li>
            <li>Firebase</li>
            </ul>
            <ul>
            <li>MUI</li>
            <li>React Bootstrap</li>
            <li>Chart.js-2</li>
            <li>Git/Github</li>
            </ul>
            </div>
            </ScrollAnimation>
  

      </div>
      <div >
      <ScrollAnimation className='skills-img' animateIn="animate__zoomInUp"  animateOnce={true}>
        <div className="zoomInUp an6"><img animateIn="animate__rotateIn" src={IMG6} /></div>
        <div className="zoomInUp an8"><img className="animate__rotateIn anr8" delay={1500} src={IMG8} /></div>
        <div className="zoomInUp an7"><img className="rotateIn anr7" src={IMG7} /></div>
        <div className="zoomInUp an4"><img className="rotateIn anr4" src={IMG4} /></div>
        <div className="zoomInUp an10"><img className="rotateIn anr10" src={IMG10} /></div>
        <div className="zoomInUp an11"><img className="rotateIn anr11" src={IMG12} /></div>
        <div className="zoomInUp an11"><img className="rotateIn anr11" src={IMG11} /></div>
        <div className="zoomInUp an9"><img className="rotateIn anr9" src={IMG9} /></div>
        <div className="zoomInUp an5"><img className="rotateIn anr5" src={IMG5} /></div>
        <div className="zoomInUp an3"><img className="rotateIn anr3" src={IMG3} /></div>
        <div className="zoomInUp an1  "><img className="rotateIn anr1" src={IMG1} /></div>
        <div className="zoomInUp an2"><img className="rotateIn anr2" src={IMG2} /></div>
      </ScrollAnimation>
       
      </div>
    </div>
  )
}

export default Skills