import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import ReactFullpage from '@fullpage/react-fullpage'
import '../components/styles.css'

const brandBlue = {
  color: '#00b3e3'
}
const minerGold = {
  color: '#cdbe35'
}

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
              <div className="heroHeadingLeft">
                  BLUE JAY <br />
                  SCREEN PRINTING
                    <div className="heroCopyLeft">
                      <h2>QUALITY</h2>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      <br />
                      <button className="btn"> <span style={brandBlue}>LEARN MORE</span> </button>
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
              <div className="heroHeadingLeft">
                CUSTOM <br />
                APPAREL
                  <div className="heroCopyLeft">
                    <h2>COMMITMENT</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                    <button className="btn"> <span style={minerGold}> LEARN MORE </span></button>
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
            <div className="heroHeadingRight">
              THE BEST IN <br />
              EMBROIDERY
                <div className="heroCopyRight">
                    <h2 style={{textAlign:"right"}}>SERVICE</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                    <button className="btn"> LEARN MORE </button>
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
            <div className="heroHeadingLeft">
              CUT <br />
              & SEW
                <div className="heroCopyLeft">
                    <h2>GROWTH</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                      <button className="btn"> LEARN MORE </button>
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
