import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'

const PookPage = (props) => (
  <Layout>
    <main>
      <Helmet title={`Pook | ${config.siteTitle}`} />
      <h1>Contact us</h1>
      <p>Contact informations</p>
      <Img fluid={props.data.imageOne.childImageSharp.fluid} />
    </main>
  </Layout>
)

export default PookPage

/* eslint no-undef: "off" */
export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "images/avatar.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "images/park.jpg" }) {
      ...fluidImage
    }
  }
`