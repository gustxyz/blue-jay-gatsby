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
              backgroundImage: "url(http://thebluejaygroup.com/gatsby/img/hero/Site_Hero_1_BLUEJAY.png)"
            }}
          className="section">
              <div
                  style={{
                    position: "absolute",
                    top: ".5em",
                    left: ".5em",
                    fontFamily: "Helvetica, sans-serif",
                    fontSize: "10vh",
                    fontWeight: "Bold",
                    lineHeight: ".8em",
                    letterSpacing: ".05em",
                    color: "white",
                  }}>
                  BLUE JAY <br />
                  SCREEN PRINTING
              </div>
          </div>
          <div
            style={{
              height: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "right bottom",
              backgroundImage: "url(http://thebluejaygroup.com/gatsby/img/hero/Site_Hero_2_BLUEJAY.png)"
            }}
          className="section">
              <div
                style={{
                  position: "absolute",
                  top: ".5em",
                  left: ".5em",
                  fontFamily: "Helvetica, sans-serif",
                  fontSize: "10vh",
                  fontWeight: "Bold",
                  lineHeight: ".8em",
                  letterSpacing: ".05em",
                  color: "white",
                }}>
                CUSTOM <br />
                APPAREL
              </div>
          </div>
          <div
            style={{
              height: "100vh",
              backgroundSize: "cover",
              backgroundImage: "url(http://thebluejaygroup.com/gatsby/img/hero/Site_Hero_3_BLUEJAY.png)"
            }}
          className="section">
            <div
              style={{
                position: "absolute",
                top: ".5em",
                right: ".5em",
                fontFamily: "Helvetica, sans-serif",
                fontSize: "10vh",
                fontWeight: "Bold",
                lineHeight: ".8em",
                letterSpacing: ".05em",
                color: "white",
              }}>
              THE BEST IN <br />
              EMBROIDERY
            </div>
          </div>
          <div
            style={{
              height: "100vh",
              backgroundSize: "cover",
              backgroundImage: "url(http://thebluejaygroup.com/gatsby/img/hero/Site_Hero_4_BLUEJAY.png)"
            }}
          className="section">
            <div
              style={{
                position: "absolute",
                top: ".5em",
                left: ".5em",
                fontFamily: "Helvetica, sans-serif",
                fontSize: "10vh",
                fontWeight: "Bold",
                lineHeight: ".8em",
                letterSpacing: ".05em",
                color: "white",
              }}>
              CUT <br />
              & SEW
            </div>
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
