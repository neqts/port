import React, {useEffect} from 'react'
import './contact.css'
import Aos from "aos"
import "aos/dist/aos.css"

const Contact = () => {
       useEffect(() =>{
        Aos.init({duration:3000});
    }, []);
    return (
        <section class="Hello" id="contact" data-aos="fade-up">
         <h3><a>04.</a>What's Next?</h3>
         <h4>Get In Touch</h4>
         <div>
         <p>I'm currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!</p>
         </div>
<a href="mailto:ttopor12@gmail.com">Say Hello</a>

        </section>
    )
}

export default Contact