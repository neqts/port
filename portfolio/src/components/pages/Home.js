import '../../App.css' 
import AboutSection from '../AboutSection'
import React from 'react'
import Cards from '../Cards'
import Experience from '../Experience'
import Work from '../Work'
import Projects from '../Projects'
import Contact from '../contact'
import Footer from '../footer'


function Home() {
    return(
        <>
        <AboutSection />
        <Cards />
        <Experience />
        <Work />
        <Projects />
        <Contact />
        <Footer />
        </>
    )
}


export default Home