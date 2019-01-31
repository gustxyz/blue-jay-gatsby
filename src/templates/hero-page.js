import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ReactFullpage from '@fullpage/react-fullpage'

export const HeroPageTemplate = ({
  image,
  body
}) => (
  
  <ReactFullpage

    render={() => (

  
        <div id="fullpage-wrapper">
          <div 
            style={{
              height: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundImage: "url(https://images.unsplash.com/photo-1511942374870-deb388a44425?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)"
            }}
          className="section">
            <h3 
              style={{
                textAlign: "center",
                marginBottom: "30px",
                fontSize: "60px",
                color: "white"
              }}
            >Morange</h3>
          </div>
          <div
            style={{
              height: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "right bottom",
              backgroundImage: "url(https://images.unsplash.com/photo-1545427692-6b57963f61a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)"
            }}
          className="section">
            
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "30px",
                  fontSize: "60px",
                  color: "white"
                }}
              >Morange</h3>
              
        
          </div>
          <div
            style={{
              height: "100vh",
              backgroundSize: "cover",
              backgroundImage: "url(https://images.unsplash.com/photo-1544627836-822bfe450209?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)"
            }}
          className="section">
            <h3
              style={{
                textAlign: "center",
                marginBottom: "30px",
                fontSize: "60px",
                color: "white"
              }}
            >Morange

             </h3>
          </div>
        </div>
    
    )}
  />



//   <ReactFullpage
//           navigation
//           onLeave={this.onLeave.bind(this)}
//           // sectionsColor={this.state.sectionsColor}
//           render={comp =>
//             console.log('render prop change') || (
//               <ReactFullpage.Wrapper>
//                 {
//                   <section className="section section--gradient">
//                     <h1>Test</h1>
//                     {body}
//                     <img src={image} />
      
//                   </section>
//                 }
//               </ReactFullpage.Wrapper>
//             )
//           }
// />
  
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