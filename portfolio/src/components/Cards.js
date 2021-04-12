import React ,{useEffect} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img from "../static/img.jpg"
import Aos from "aos"
import "aos/dist/aos.css"

function Cards() {
      useEffect(() =>{
        Aos.init({duration:3000});
    }, []);
  return (
 
    <div className='cards' id="Cards" data-aos="fade-up">


      <div className='cards__container'>
        <div className='cards__wrapper'>
        <h3><a>01.&nbsp;</a>About Me <span></span></h3>
        <div className="AboutInside">
            <div className="One">
                <div className="Words">
                    <p>Hello! I'm Tomasz, a Front-end-developer based in Skomielna Biała, Poland. 
                        I enjoy building things that live on the internet. I develop exceptional 
                        websites that provide intuitive,
                         pixel-perfect user interfaces with efficient and 
                         modern backends based on the latest   
                        <a>&nbsp;ReactJS</a> I also create <a>Graphic Design</a></p>
                    <p>Here are a few technologies I've been working with recently:</p>
                </div>
                <ul>
                    <li>JavaScript</li>
                    <li>ReactJs</li>
                    <li>Gatsby</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>PHP </li>
                    <li>MySQL</li>
                    <li>Graphic Design</li>
                    <li>Node.js</li>
                    <li>C#</li>
                    <li>Shopify</li>
                    <li>Wordpress</li>
                    <li>GraphQL</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div className="Two">
                <a className="photo">
                   
                    <div>
                        <img src={img} alt=""/>
                    </div>
                  
                </a>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;