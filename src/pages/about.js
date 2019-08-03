import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>This is a about me section</p> 
            <p>Here is my <Link to="/contact">ContactPage</Link></p>
        </div>
    )
}

export default AboutPage