import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <p>This is a about me section</p> 
            <p>Here is my <Link to="/contact">ContactPage</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage