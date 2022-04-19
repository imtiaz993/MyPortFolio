import React from 'react'
import './contact.css'
import Lottie from 'react-lottie';
import animationData from './lottie/89449-contacte-mail.json';
import emailjs from '@emailjs/browser';
import ScrollAnimation from 'react-animate-on-scroll'

const Contact = () => {
  const form = React.useRef();
  const [sending, setSending] = React.useState(false);
  const sendEmail = (e) => {
    setSending(true)
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs.sendForm("default_service", "template_57l9ysd", form.current, "kSnQ3XVXlmKhkdpxo")
      .then((result) => {
        alert("Message Sent, We will get back to you shortly", result.text);
        setSending(false)
        e.target.reset()
      },
        (error) => {
          alert("An error occurred, Please try again", error.text);
          setSending(false)
          console.log(error.text)
        });
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className='contact' id='contact'>
      <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
        <h1 className='contactMe'>CONTACT ME</h1>
      </ScrollAnimation>

      <div className='contactFlex'>
        <div className='contactLinks'>
          <div>
            <ScrollAnimation className='contactlotie' animateIn="animate__zoomIn" delay={100} animateOnce={true}>
              <Lottie
                options={defaultOptions}
                height={170}
                width={250}
              />
            </ScrollAnimation>

          </div>
            <ScrollAnimation className='mylinks' animateIn="animate__fadeInUp" delay={200} animateOnce={true}>
            <div><a href='mailto:imtiazh993@gmail.com' target="_blank"><i class="fas fa-lg fa-envelope"></i> imtiazh993@gmail.com</a></div>
            <div><a href="https://www.facebook.com/imtiaz.hussain.613" target="_blank"><i class="fab fa-lg fa-facebook"></i><span>https://www.facebook.com/imtiaz.hussain.613</span></a></div>
            <div><a href="https://linkedin.com/in/imtiaz-hussain-a48391211" target="_blank"><i class="fab fa-lg fa-linkedin"></i><span>https://linkedin.com/in/imtiaz-hussain-a48391211</span></a></div>
            <div><a href="https://github.com/imtiaz993" target="_blank"><i class="fab fa-lg fa-github" ></i><span>https://github.com/imtiaz993</span></a></div>
            <div><p><i class="fas fa-lg fa-map-marker-alt"></i> Karachi, Pakistan</p></div>
            </ScrollAnimation>

        </div>
      
        <ScrollAnimation className='contactInputs' animateIn="animate__fadeInLeft" delay={300} animateOnce={true}>
          <form ref={form} onSubmit={sendEmail} autoComplete='off'>

            <div><input type="text" required placeholder='Name' name='name' /></div>


            <div><input type="email" required placeholder='Email' name='email' /></div>


            <div><input type="text" required placeholder='Project Name' name='project' /></div>


            <div><textarea required placeholder='Message' name='message' /></div>

            <div className='buttonEnd'>
              {!sending &&  <div><button type='submit' >SUBMIT</button></div> }
              {sending &&  <div><button disabled >Submitting ...</button></div> }
              
            </div>
          </form>
          </ScrollAnimation>
      </div>
    </div>
  )
}

export default Contact