import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    return(
        <Layout>
            <h1>Hello</h1>
            <h1>I'm Anshul, a full stack developer living in pune.</h1>
            <p>Need developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage