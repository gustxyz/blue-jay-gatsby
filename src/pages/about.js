import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import {  Navbar, Nav, Button, Image, Container, Row, Col } from 'react-bootstrap';
import Radium, {StyleRoot} from "radium";

import bluejayLogo from '../img/BLUEJAY_VECTOR.svg';
import fbLogo from '../img/facebook.svg';
import igLogo from '../img/instagram-logo.svg';
import yelpLogo from '../img/yelp-logo.svg';


export default class AboutPage extends React.Component {
  render() {
 
    return (
      <Layout>
          {/*NAV*/}
          <Navbar fixed="top" className="bg-green pt-3" expand="lg">
         
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ml-5 pl-3">
                  <Link className="page-link" to="/about">
                    About
                  </Link>
                  <Link className="page-link" to="/services">
                    Services
                  </Link>
                  <Link className="page-link" to="/blog/2016-12-17-making-sense-of-the-scaas-new-flavor-wheel/">
                    Blog
                  </Link>
                  <Link className="page-link" to="/contact">
                    Contact
                  </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* HEADER */}

         
          <div className="view-height-75 bg-green position-relative" >
     
            <h1 className="text-center text-white pt-25-vh">Who is Blue Jay?</h1>
            <Link className="page-link bj-header-logo" to="/">
                <img src={bluejayLogo} />
            </Link>
       
     
          </div>

          <Container >
              <Row>
                <Col className="mt-n10" xs={12}>
                  <div md={6} className="bg-gray blurb pt-5 pb-5" >
                      <h1 className="text-color-green">Lorem Ipsum</h1>
                      <p>
                        Here at Blue Jay Screen Printing we can take your order for 25 family reunion shirts to 950 sweatshirts with,
                        your logo on them. No matter how big your order is we can acomplish any task with a quick turnaround time and quality,
                        soft hand prints.
                      </p>
                      <div className="d-flex justify-content-between">
                        <div >
                          (123)465-7891
                          <br/>
                          Mon - Sun: 8:00am - 6:00pm
                        </div>
                        <div>
                          <Button className="bg-green pl-4 pr-4">Our Products</Button>
                        </div>
                        
                      </div>
                  </div>
                </Col>
              </Row>       
            </Container>

            <Container className="mt-5 mb-5 p-2" >
              <Row>
                <Col xs={12} md={6}>
                  <Image fluid src="http://thebluejaygroup.com/gatsby/img/hero/Site_Hero_1_BLUEJAY.png"  />
                </Col>

                <Col xs={12} md={6} className="pl-5">
                  <h2 className="text-color-dark-blue text-center">How did we come about?</h2>
                  <p className="line-height-3">Here at Blue Jay Screen Printing we can ctake your oder for
                    25 family reunion shirts to 950 sweatshirts with your logo on them. We work
                    hand in hand with you, the client, to make sure you are getting the quality you need,
                    along with competitive pricing and roudn the clock customer service. No matter 
                    how big your order is we can acomplish any task with a quick turnaround time and
                    quality, soft hand prints.
                  </p>
                  <Button className="bg-green ml-auto pl-4 pr-4">Contact us</Button>
                </Col>
              </Row>       
            </Container>

            {/* Footer */}
            <Container fluid className="bg-green pt-3">
              <Row>
                <Col xs={12} md={2} className="offset-md-2 text-center"> 
                    <a className="page-link">
                      <img src={bluejayLogo} />
                    </a>
                </Col>
                <Col xs={12} md={4} className="d-flex flex-column justify-content-around" >    
                    <div className="d-flex justify-content-center">
                        <a className="page-link">
                          <img src={fbLogo}/>
                        </a>
                        <a className="ml-2 page-link">
                          <img src={igLogo}/>
                        </a>
                        <a className="ml-2 page-link">
                          <img src={yelpLogo}/>
                        </a>
                    </div>
                    <div className="d-flex mx-5 justify-content-around ">
                      <Link className="page-link" to="/about">
                        About
                      </Link>
                      <Link className="page-link" to="/services">
                        Services
                      </Link>
                      <Link className="page-link" to="/design">
                        Design
                      </Link>
                      <Link className="page-link" to="/contact">
                        Contact
                      </Link>
                    </div>
                </Col>
                <Col xs={12} md={8} className="offset-md-2 text-white text-center" > 
                        <p>All content copyright 2019. Blue Jay Screenprinting. All rights reserved.</p>
                </Col>           
              </Row>
          </Container>

      </Layout>
    )
  }
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query AboutQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
