import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';

import { Navbar, Nav, Jumbotron, Button, ButtonToolbar, Dropdown, DropdownButton, Image, Container, Row, Col } from 'react-bootstrap';
import Coverflow from 'react-coverflow';
import {StyleRoot} from "radium";
import bluejayLogo from '../img/BLUEJAY_VECTOR.svg';
import fbLogo from '../img/facebook.svg';
import igLogo from '../img/instagram-logo.svg';
import yelpLogo from '../img/yelp-logo.svg';




export default class IndexPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout >
           {/*NAV*/}
           <Navbar fixed="top" className="pt-3" expand="lg">
         
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mr-auto ml-5 pl-3">
               <Link className="page-link" to="/about">
                 About
               </Link>
               <Link className="page-link" to="/services">
                 Services
               </Link>
           
               <Link className="page-link" to="/contact">
                 Contact
               </Link>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
          {/* HEADER */}
          

          <div className="view-height-75 position-relative home-header-bg-image ">
            <Container >
              <Row >
                <Col xs={6} md={10} lg={12} className="">
                <Link className="page-link bj-header-logo" to="/">
                    <img src={bluejayLogo} />
                </Link>

                  <h1 className="text-center text-white pt-25-vh">Who is Blue Jay?</h1>
                  <p>Let's share your dreams with the world</p>
                  <br />
                  <br />
                </Col>
              </Row>
              <Row>
                <Col xs lg="2">
                <Button className="bj-want">I want to...</Button>
                </Col>
                  <Col xs lg="2">
                    <DropdownButton title="Print">
                      <Dropdown.Item eventKey="1">Print</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Embroider</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Customize
                      </Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col xs lg="2">
                    <DropdownButton title="25-50">
                      <Dropdown.Item eventKey="1">25-50</Dropdown.Item>
                      <Dropdown.Item eventKey="2">50-200</Dropdown.Item>
                      <Dropdown.Item eventKey="3">200+
                      </Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col xs lg="2">
                    <DropdownButton title="Shirts">
                      <Dropdown.Item eventKey="1">Shirts</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Hoodies</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Pants</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Hats
                      </Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col xs lg="2" className="no-padding">
                    <Button className="bj-want-request">Send Request</Button>
                    </Col>
                  <Col xs lg="2" className="no-padding">
                    <Button className="bj-want-request-else">Something else?</Button>
                  </Col>
                </Row>
            </Container>
          </div>


            {/* CREATE/CONTACT */}
            <Container>
              <Row>
                <Col xs={12} md={6}>
                  <Jumbotron>
                      <Image fluid src="http://thebluejaygroup.com/gatsby/img/hero/Site_Hero_1_BLUEJAY.png" roundedCircle />
                  </Jumbotron>
                </Col>
                <Col xs={12} md={6}>
                    <Jumbotron>
                      <h1 >Title Text</h1>
                      <p >Subtitle Text</p>
                      <Button className="ml-auto">Send Request</Button>
                  </Jumbotron>
                </Col>
        
              </Row>
    
            </Container>

            {/* Testimonials */}
              {/* <StyleRoot>
                  <Coverflow
                        displayQuantityOfSide={2}
                        enableScroll={false}
                        navigation
                        infiniteScroll
                        enableHeading
                        media={{
                          '@media (max-width: 900px)': {
                            // width: '100vw',
                            height: '300px'
                          },
                          '@media (min-width: 900px)': {
                            width: '100vw',
                            height: '600px'
                          }
                        }}
                      >
                        <img src='images/album-1.png' alt='Album one' data-action="https://facebook.github.io/react/"/>
                        <img src='images/album-2.png' alt='Album two' data-action="http://passer.cc"/>
                        <img src='images/album-3.png' alt='Album three' data-action="https://doce.cc/"/>
                  </Coverflow>
                </StyleRoot> */}
            
       


            {/* Footer */}
             <Container fluid className="bg-blue pt-3">
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
                          <img  src={igLogo}/>
                        </a>
                        <a className="ml-2 page-link">
                          <img  src={yelpLogo}/>
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
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
