import React from 'react'
import './portfolio.css'
import Lottie from 'react-lottie';
import animationData from '../Contact/lottie/98636-coding.json';
import ScrollAnimation from 'react-animate-on-scroll'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Halal from './Projects/Halal/Halal'
import Nordic from './Projects/Nordic/Nordic'
import Xplay from './Projects/Xplay/Xplay'
import ProjectLinks from './ProjectLinks/ProjectLinks'

const Portfolio = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="work" id="work">
            <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
                <h1 className='personalP'>PERSONAL PORTFOLIO</h1>
            </ScrollAnimation>
            <div className='workDesc'>
                <div>
                    <ScrollAnimation className='worklotie' animateIn="animate__zoomIn" delay={100} animateOnce={true}>
                        <Lottie
                            options={defaultOptions}
                            height={250}
                            width={250}
                        />
                    </ScrollAnimation>

                </div>

                <ScrollAnimation className='workset' animateIn="animate__fadeInLeft" delay={200} animateOnce={true}>
                    <p> I build responsive, mobile-friendly websites that are easy and intuitive for users to navigate.
                        My experiences, educational background and work history will attest to my credibility and capability.
                        I love to experience projects using cutting edge technologies and constantly stay up to date to maintain that edge.
                    </p>

                </ScrollAnimation>
                

            </div>
            
            
            <div className='projectLinks'>
                    <BrowserRouter>
                        <ProjectLinks />
                        <Routes>
                            <Route path="/" element={<Halal />}></Route>
                           
                            <Route path="/nordic" element={<Nordic />}></Route>
                            <Route path="/xplay" element={<Xplay />}></Route>
                        </Routes>
                    </BrowserRouter>

                </div>


        </div>
    )
}

export default Portfolio