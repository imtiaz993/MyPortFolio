import ScrollAnimation from 'react-animate-on-scroll'
import Sidebar from "./Components/Sidebar/Sidebar";
import TypedJs from "./Components/Typed/TypedJs";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import IMG from './Components/images/IMG_07411.jpg'
import 'animate.css';
import './App.css'
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className='mycontainer'>
     <div className='innerCont'>
       <div className='testing'>
          
       </div>
      <div className='auth' id='auth'>
        <div class="myimage">
          <img className='authImg' src={IMG} />
        </div>
        <div class="typing">
        <TypedJs  />
        </div>
        </div>
      </div>
      <Skills />
      <Portfolio  />
      <Contact/>
      <Footer/>
      <Sidebar />
    </div>
  );
}

export default App;