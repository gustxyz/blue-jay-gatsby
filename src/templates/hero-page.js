import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const HeroPageTemplate = ({
  image,
  body
}) => (
  <section className="section section--gradient">
    {body}
    <img src={image}/>

  </section>
)

HeroPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  body: PropTypes.string,
}

const HeroPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HeroPageTemplate
        image={frontmatter.image}
        body={data.html}
      />
    </Layout>
  )
}

HeroPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HeroPage

export const heroPageQuery = graphql`
  query HeroPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        
        title
        
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        
        
        }
    }
  }
`
