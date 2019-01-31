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
                    <div
                      style={{
                        position: "relative",
                        width: "40vw",
                        top: "20vh",
                        fontFamily: "Helvetica, sans-serif",
                        fontSize: "2vh",
                        textAlign: "justify",
                        lineHeight: "1.2em",
                        letterSpacing: "0.05em",
                        fontWeight: "normal",
                        color: "white",
                      }}>
                      <h2>QUALITY</h2>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      <br />
                      <button style={{
                        position: "relative",
                        top: "3vh",
                        backgroundColor: "#FFFFFF",
                        border: "none",
                        color: "#33bbff",
                        display: "inline-block",
                        padding: ".5em 1em",
                        fontFamily: "Helvetica, sans-serif",
                        fontSize: "2vh",
                        lineHeight: "1.2em",
                        letterSpacing: "0.05em",
                        fontWeight: "BOLD",
                      }}> LEARN MORE </button>
                    </div>
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
                  <div
                    style={{
                      position: "relative",
                      width: "40vw",
                      top: "15vh",
                      fontFamily: "Helvetica, sans-serif",
                      fontSize: "2vh",
                      textAlign: "justify",
                      lineHeight: "1.2em",
                      letterSpacing: "0.05em",
                      fontWeight: "normal",
                      color: "white",
                    }}>
                    <h2>COMMITMENT</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                    <button style={{
                        position: "relative",
                        top: "3vh",
                        backgroundColor: "#FFFFFF",
                        border: "none",
                        color: "#cccc22",
                        display: "inline-block",
                        padding: ".5em 1em",
                        fontFamily: "Helvetica, sans-serif",
                        fontSize: "2vh",
                        lineHeight: "1.2em",
                        letterSpacing: "0.05em",
                        fontWeight: "BOLD",
                      }}> LEARN MORE </button>
                  </div>
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
                textAlign: "right",
                lineHeight: ".8em",
                letterSpacing: ".05em",
                color: "white",
              }}>
              THE BEST IN <br />
              EMBROIDERY
                <div
                    style={{
                      position: "relative",
                      //display: "block",
                      width: "40vw",
                      top: "15vh",
                      right: ".5em",
                      fontFamily: "Helvetica, sans-serif",
                      fontSize: "2vh",
                      textAlign: "justify",
                      textAlignLast: "right",
                      lineHeight: "1.2em",
                      letterSpacing: "0.05em",
                      fontWeight: "normal",
                      color: "white",
                    }}>
                    <h2 style={{textAlign:"right"}}>SERVICE</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                    <button style={{
                        position: "relative",
                        top: "3vh",
                        backgroundColor: "#FFFFFF",
                        border: "none",
                        color: "black",
                        display: "inline-block",
                        padding: ".5em 1em",
                        fontFamily: "Helvetica, sans-serif",
                        fontSize: "2vh",
                        lineHeight: "1.2em",
                        letterSpacing: "0.05em",
                        fontWeight: "BOLD",
                      }}> LEARN MORE </button>
                </div>
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
                <div
                    style={{
                      position: "relative",
                      width: "40vw",
                      top: "15vh",
                      fontFamily: "Helvetica, sans-serif",
                      fontSize: "2vh",
                      textAlign: "justify",
                      lineHeight: "1.2em",
                      letterSpacing: "0.05em",
                      fontWeight: "normal",
                      color: "white",
                    }}>
                    <h2>GROWTH</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                      <button style={{
                        position: "relative",
                        top: "3vh",
                        backgroundColor: "#FFFFFF",
                        border: "none",
                        color: "black",
                        display: "inline-block",
                        padding: ".5em 1em",
                        fontFamily: "Helvetica, sans-serif",
                        fontSize: "2vh",
                        lineHeight: "1.2em",
                        letterSpacing: "0.05em",
                        fontWeight: "BOLD",
                      }}> LEARN MORE </button>
                </div>
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
