import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <div>
            <Layout>
            <Head title="About"/>
                <h1>About Me</h1>
                <p>This is a about me section</p> 
                <p>Here is my <Link to="/contact">ContactPage</Link></p>    
            </Layout>
        </div>
    )
}

export default AboutPage