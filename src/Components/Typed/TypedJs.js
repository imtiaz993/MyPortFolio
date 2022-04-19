import React from 'react'
import Typed from 'typed.js'
import './typed.css'


const TypedJs = () => {
 
  	// Create reference to store the DOM element containing the animation
    const el1 = React.useRef(null);  
	const el2 = React.useRef(null);
  const el3 = React.useRef(null);
  const el4 = React.useRef(null);

  // Create reference to store the Typed instance itself
  const typed1 = React.useRef(null);
	const typed2 = React.useRef(null);
  const typed3 = React.useRef(null);
  const typed4 = React.useRef(null);
  
  React.useEffect(() => {
    const option1 = {
    	strings: [
        'Hi There, I\'m'
      ],
      typeSpeed: 10,
      backSpeed: 10,
      startDelay:1500,
      showCursor: false,
      onComplete:(self)=>{
      const option2 = {
        strings: [
          'IMTIAZ HUSSAIN'
        ],
        typeSpeed: 20,
        backSpeed: 20,
        showCursor: false,
        onComplete:(self)=>{
          const option3={
            strings: [
              'Front-End Developer'
            ],
            typeSpeed: 10,
            backSpeed: 10,
            showCursor: false,
            onComplete:(self)=>{
              const option4={
                strings: ['Enthusiastic, creative technologist and experienced front-end developer with hands-on skills in a wide range of software, tools, and programming languages. I have a deep understanding of technologies, platforms and approaches required to build a quality digital solution. I am open to challenging projects that are going to simplify people\'s lives. Perfection of work and sticking to high-standards of programming are what set me apart from the ordinary.'
                ],
                typeSpeed: 1,
                backSpeed: 1,
                showCursor: false,
              }
              typed4.current = new Typed(el4.current, option4); 
            }
          }
          typed3.current = new Typed(el3.current, option3);
        }
      }
      typed2.current = new Typed(el2.current, option2);
    }
    }
    typed1.current = new Typed(el1.current, option1);






    
    
   
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed1.current.destroy()
      typed2.current.destroy();
      typed3.current.destroy();
      typed4.current.destroy();
    }
  }, [])

  return (

            <div className="info">
                <div>
                  <div><h2 ref={el1} ></h2></div>

                    <div>
                      
                        <h1 className="myname ">   
                         <span ref={el2} className="authName"></span>
                        </h1>
                    </div>
                   
                    <div>
                        <h3 ref={el3} className="authDev"></h3>
                    </div>
                </div>
                <div>
                    <p  className="authDesc"><span ref={el4}></span> </p>
                </div>
                
            </div>
  );
}

export default TypedJs
