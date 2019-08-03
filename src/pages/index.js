import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
    return (
        <div>
            <h1>Hello</h1>
            <h1>I'm Anshul, a full stack developer living in pune.</h1>
            <p>Need developer? <a href="/contact">Contact Me</a></p>
            <p>Need developer? <Link to="/contact">Contact me.</Link></p>
        </div>
    )
}

export default IndexPage