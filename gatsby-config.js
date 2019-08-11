/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Full-Stack Bootcamp!',
    author: 'Abhinav Anshul!'
  },
  
  
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        //spaceId: process.env.CONTENTFUL_SPACE_ID,
        spaceId: 'npoxw3p42pmz',
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        accessToken: 'lhIOvWdcIY6WQVCj_JGPQNcIJXIQCvcKkLIdIlnMSGE' 
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/` 
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false 
            }
          }
        ] 
      }
    },
    
  ]
}
