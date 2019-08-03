import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const IndexPage = () => {
    return (
        <div>
            <Header />
            <h1>Hello</h1>
            <h1>I'm Anshul, a full stack developer living in pune.</h1>
            <p>Need developer? <Link to="/contact">Contact me.</Link></p>
            <Footer />
        </div>
    )
}

export default IndexPage