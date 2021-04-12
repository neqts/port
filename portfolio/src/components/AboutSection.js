import React, {useEffect} from 'react'
import { Button } from './Button'
import '../App.css'
import './AboutSection.css'
import Aos from "aos"
import "aos/dist/aos.css"

const AboutSection = () => {
    useEffect(() =>{
        Aos.init({duration:3000});
    }, []);
    return (
       
        <div className="hero-container" id="about" >
          
           <h1 data-aos="fade-up">Hi, my name is</h1>
           <h2 data-aos="fade-up">Tomasz.</h2>
        <h3 className="front" data-aos="fade-up">I'am front-end developer</h3>
        <div className="hero-btns">
            <div className="describe" data-aos="fade-up">
            <p>I'm a Front-end-developer & I have serios passion for UI effects, animations and creating intuitive dynamic user experiences,  specializing in building (and designing) exceptional, high-quality websites </p></div>
           <div data-aos="fade-up" className="btnn"> <a href="mailto:ttopor12@gmail.com"  >
           
                Get In Touch

           </a></div>
            
            </div>

          <div className="social-left">
          <ul>
          <li><a href="https://github.com/neqts"><i class="fab fa-github"></i></a>
          </li>
           <li><a href="https://www.instagram.com/tomasz_topor/"><i class="fab fa-instagram"></i></a>
          </li>
           <li><a href="https://www.linkedin.com/in/tomasz-top%C3%B3r-5870a11b9/"><i class="fab fa-linkedin-in"></i></a>
          </li>
           <li><a href="https://www.facebook.com/tomasz.topor.52"><i class="fab fa-facebook-f"></i></a>
          </li>
          </ul>
          </div>

<div className="socialRight">
<div>
<a href="mailto:ttopor12@gmail.com"> <p>ttopor12@gmail.com</p></a>
</div>
</div>



        </div>

        

    )
}

export default AboutSection
