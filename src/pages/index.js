import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return(
        <Layout>
            <Head title="Home" />
            <h1>Hello</h1>
            <h1>I'm Anshul, a full stack developer living in pune.</h1>
            <p>Need developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage