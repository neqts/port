import React,{useEffect} from 'react';
import "./WorkStyle.css";
import map from "../static/List.JPG"
import map2 from "../static/validator.JPG"
import map3 from "../static/drag-drop.JPG"
import Aos from "aos"
import "aos/dist/aos.css"

const Work = () => {
    useEffect(() =>{
        Aos.init({duration:3000});
    }, []);
    return (
        <section className="Projects" id="Work" data-aos="fade-up">
             <h3 className="WorkH"><a>03.&nbsp;</a>Some Things I've Built <span></span></h3>

             <div>
              <div className="first">
              <h4>Featured Project</h4>
               <h5><a href="https://neqts.github.io/todoListUpdate/">To do list</a></h5>
               <div className="desc">
               <p>Application used to save, delete and edit tasks that we have to perform during the day, an application containing a pop menu </p>
               </div>
               <ul>
               <li>JS</li>
               <li>HTML & CSS</li>
               <li>TODO API</li>
               <li>Visual Studio</li>
               </ul>
               <div className="git">
                 <a href="https://github.com/neqts/todoListUpdate"><i class="fab fa-github"></i></a>

                 <a href="https://neqts.github.io/todoListUpdate/"> <i class="fas fa-external-link-alt"></i></a>
                 
               </div>
              </div>
              <a>
              <div>
               <div>
              
              </div>
              <a href="https://neqts.github.io/todoListUpdate/">
              <img src={map} />
              </a>
              </div>
              </a>
            
              
             </div>



       <div className="validator">
       <div className="rest">
       <h4>Featured Project</h4>
        <h5><a href="https://neqts.github.io/validatorJS/">Validator</a></h5> 
        <div class="desc"><p>This program validates the document with the changed syntax</p></div>
        <ul class="match">
               <li>JS</li>
               <li>HTML & CSS</li>
               <li>VALIDATOR API</li>
               <li>Visual Studio</li>
               </ul>
               <div className="git2">
                 <a href="https://github.com/neqts/validatorJS"><i class="fab fa-github"></i></a>

                 <a href="https://neqts.github.io/validatorJS/"> <i class="fas fa-external-link-alt"></i></a>
                 
               </div>
       </div>
        <a className="yolo">
              <div>
               <div>
              
              </div>
              <a href="https://neqts.github.io/validatorJS/">
              <img src={map2} />
              </a>
              </div>
              </a>


       </div>


     <div>
              <div className="first">
              <h4>Featured Project</h4>
               <h5><a href="https://5fc136241c7659d3534985fe--kind-einstein-1fe37a.netlify.app/">Drag&Drop</a></h5>
               <div className="desc">
               <p>Drag-and-Drop Application - one of the applications offered by GUI window managers. </p>
               </div>
               <ul>
               <li>JS</li>
               <li>HTML & CSS</li>
                 <li>React</li>
               <li>Drag&Drop</li>
               <li>VS</li>
               </ul>
               <div className="git">
                 <a href="https://github.com/neqts/todoListUpdate"><i class="fab fa-github"></i></a>

                 <a href="https://neqts.github.io/todoListUpdate/"> <i class="fas fa-external-link-alt"></i></a>
                 
               </div>
              </div>
              <a>
              <div>
               <div>
              
              </div>
              <a href="https://neqts.github.io/todoListUpdate/">
              <img src={map3} />
              </a>
              </div>
              </a>
            
              
             </div>

        </section>
    )
}

export default Work
