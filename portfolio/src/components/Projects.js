import React,{useEffect} from 'react'
import './Projects.css'
import Aos from "aos"
import "aos/dist/aos.css"

const Projects = () => {
     useEffect(() =>{
        Aos.init({duration:3000});
    }, []);
    
    return (
        <section className="Projects" data-aos="fade-up">
          <h4>Other Noteworthy Projects</h4>
           <a>View my projects</a>

           <div class="flow">
           <div class="box">
           <div class="box_ins">
           <header>
           <div>
           <div>
           <i class="far fa-folder-open"></i>
           </div>
            <div>
            <a href="https://github.com/neqts/webTechnologyProject"><i class="fab fa-github"></i></a>

                 <a href="https://neqts.github.io/webTechnologyProject/"> <i class="fas fa-external-link-alt"></i></a>
                 
           </div>

           </div>
           <h5>
           Web desinger website
           </h5>
           <div>
           <p>Responsive website with products and Slider made with HTML, CSS3 and JS</p>
           </div>
           </header>
           
           <footer>
           <ul>
           <li>JavaScript</li>
           <li>CSS</li>
           <li>HTML</li>

           </ul>
           </footer>
           </div>
           </div>




<div class="box">
           <div class="box_ins">
           <header>
           <div>
           <div>
           <i class="far fa-folder-open"></i>
           </div>
            <div>
            <a href="https://github.com/neqts/reactWeb"><i class="fab fa-github"></i></a>

                 <a href="https://gifted-kepler-7403da.netlify.app/"> <i class="fas fa-external-link-alt"></i></a>
                 
           </div>

           </div>
           <h5>
           Travel website
           </h5>
           <div>
           <p>Travel website with interesting effects based on React Js  Html Css</p>
           </div>
           </header>
           
           <footer>
           <ul>
           <li>JavaScript</li>
           <li>React</li>
           <li>CSS</li>
           <li>HTML</li>

           </ul>
           </footer>
           </div>
           </div>







           <div class="box">
           <div class="box_ins">
           <header>
           <div>
           <div>
           <i class="far fa-folder-open"></i>
           </div>
            <div>
            <a href="https://github.com/neqts/reactWebsite"><i class="fab fa-github"></i></a>

                 <a href="https://nervous-hermann-738ec9.netlify.app/"> <i class="fas fa-external-link-alt"></i></a>
                 
           </div>

           </div>
           <h5>
          Website with finances
           </h5>
           <div>
           <p>A modern finacnces website with interesting effects</p>
           </div>
           </header>
           
           <footer>
           <ul>
           <li>JavaScript</li>
            <li>React</li>
           <li>CSS</li>
           <li>HTML</li>

           </ul>
           </footer>
           </div>
           </div>



           <div class="box">
           <div class="box_ins">
           <header>
           <div>
           <div>
           <i class="far fa-folder-open"></i>
           </div>
            <div>
            <a href="https://github.com/neqts/BankWeb"><i class="fab fa-github"></i></a>

                 <a href="https://hungry-kepler-a21168.netlify.app/"> <i class="fas fa-external-link-alt"></i></a>
                 
           </div>

           </div>
           <h5>
           Bank website
           </h5>
           <div>
           <p>Example of a bank's website using video in header.</p>
           </div>
           </header>
           
           <footer>
           <ul>
           <li>JavaScript</li>
           <li>CSS</li>
            <li>React</li>
           <li>HTML</li>

           </ul>
           </footer>
           </div>
           </div>




           <div class="box">
           <div class="box_ins">
           <header>
           <div>
           <div>
           <i class="far fa-folder-open"></i>
           </div>
            <div>
            <a href="https://github.com/neqts/TomaszTopor"><i class="fab fa-github"></i></a>

                 <a href="https://neqts.github.io/TomaszTopor"> <i class="fas fa-external-link-alt"></i></a>
                 
           </div>

           </div>
           <h5>
           Previous portfolio
           </h5>
           <div>
           <p>Passes the previous portfolio in which I used bootstrap and UI/UX effects</p>
           </div>
           </header>
           
           <footer>
           <ul>
           <li>JavaScript</li>
          
           <li>CSS</li>
           <li>HTML</li>

           </ul>
           </footer>
           </div>
           </div>


           </div>


        
           
        </section>
    )
}

export default Projects
