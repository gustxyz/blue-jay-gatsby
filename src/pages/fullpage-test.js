import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import ReactFullpage from '@fullpage/react-fullpage'




const FullPage  = ({data}) => {
  //const pages = data.allMarkdownRemark.edges;

  //console.log(pages); 
      return (
   
        <Layout>
          
         

  <ReactFullpage

    render={() => {

      return (
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
      );
    }}
  />
);
        }
/>
        </Layout>
      )
    
  };



export const heroQuery = graphql`
  query HeroQuery {
    allMarkdownRemark( 
       filter: { frontmatter: { templateKey: { eq: "hero-page" } }}
    ){
        edges {
          node {
          id
          html
          
          frontmatter {
              title
              image {
              id
              childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
              }
            }
          }
        }
      }
    }
`;



export default FullPage
