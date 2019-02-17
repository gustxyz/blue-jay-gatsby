import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import { Navbar, Nav, Jumbotron, Button, ButtonToolbar, Form, DropdownButton, Image, Container, Row, Col } from 'react-bootstrap';

import bluejayLogo from '../img/logos/BLUEJAY_VECTOR.svg';
import fbLogo from '../img/logos/facebook.svg';
import igLogo from '../img/logos/instagram-logo.svg';
import yelpLogo from '../img/logos/yelp-logo.svg';

import diedrichIcon from '../img/customer_icons/diedrich-icon.svg';
import gymeastIcon from '../img/customer_icons/gymeast-icon.svg';
import inkdIcon from '../img/customer_icons/inkd-icon.svg';
import stillyIcon from '../img/customer_icons/stilly-icon.svg';
import togglesIcon from '../img/customer_icons/toggles-icon.svg';


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
               <Link className="page-link" to="">
                 Home
               </Link>
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
          <div className="view-height-75 position-relative home-header-bg-image">
            <Container fluid>
              <Row>
              <Col className="text-right logo-margin">
              <Link to="/">
                    <img src={bluejayLogo} />
              </Link>
              </Col>
              </Row>
              <Row>
                <Col xs={6} md={10} lg={12} className="offset-md-2">
                  <h1 className="text-left text-white display-3">Blue Jay Screen Printing</h1>
                  <h2 className="text-white font-size-2rem font-georgia">Let's share your dreams with the world.</h2>
                  <br />
                </Col>
              </Row>
              <Row className="pt-10-vh">
                <Col xs={6} md={7} lg={7} className="offset-lg-1">
                <ButtonToolbar>
                    <div className="pl-3 pr-3 ml-auto gray-border-right bg-white toolbar-left">I want to...</div>
                    <form name="contact" method="post" data-netlify="true"  className="d-flex">
    
                        <select name="role[]" className=" gray-border-right dropdown-toggle btn btn-primary home-contact-button" >
                          <option value="leader">print</option>
                          <option value="leader">2</option>
                          <option value="leader">3</option>
                          <option value="leader">4</option>
                          <option value="leader">5</option>
                        </select>
                  

                        <select name="test[]"  className="gray-border-right  dropdown-toggle btn btn-primary home-contact-button" >
                          <option value="leader">25</option>
                          <option value="leader">2</option>
                          <option value="leader">3</option>
                          <option value="leader">4</option>
                          <option value="leader">5</option>
                        </select>
                      

                        <select name="test1[]"  className="gray-border-right  dropdown-toggle btn btn-primary home-contact-button" >
                          <option value="leader">shirts</option>
                          <option value="leader">2</option>
                          <option value="leader">3</option>
                          <option value="leader">4</option>
                          <option value="leader">5</option>
                        </select>
                 
                        <Button type="submit" className="ml-2 toolbar-send-request mr-auto toolbar-right" >Send Request</Button>

                    </form>
                    </ButtonToolbar>
                  </Col>
                </Row>
            </Container>
          </div>


            {/* Intro */}
            <Container>
              <Row>
                <Col xs={12} md={12}>
                    <Jumbotron>
                      <h1 className="text-color-blue">WE'RE MAKING MOVES</h1>
                      <p >We've recently upgraded our equipment, processes, services, and moved into a new 3,000 Sq Ft facility -
                      all in order to serve you better. We are able to invest in quality thanks to customers like you,
                      and hope to give it right back on your next order with us.
                      Whether that's custom apparel, web media, or original graphic design, we've got you covered.
                      Let's get to work!</p>
                      <a className="btn btn-primary bg-blue" href="/about">Learn More</a>
                  </Jumbotron>
                </Col>
              </Row>

            {/*CUSTOMERS*/}
             <Row>
            <h1 className="text-color-blue">HAPPY CUSTOMERS</h1>
             <Col xs={4} md={10} lg={12}>
                <div className="service-icon">
                <a className="page-link" href="http://www.stillaguamish.com/" target="new">
                  <img src={stillyIcon} />
                </a>
                  <h6 className="font-georgia text-center">Stillaguamish Tribe</h6>
                </div>

                <div className="service-icon screen-service-icon">
                  <a className="page-link" href="http://www.gymeast.com/" target="new">
                    <img src={gymeastIcon} />
                  </a>
                   <h6 className="font-georgia text-center">Gym East Bellevue</h6>
                </div>

                <div className="service-icon screen-service-icon">
                  <a className="page-link" href="https://www.diedrichespresso.com/" target="new">
                    <img src={diedrichIcon} />
                  </a>
                   <h6 className="font-georgia text-center">Diedrich Espresso</h6>
                </div>

                <div className="service-icon">
                  <a className="page-link" href="https://inkdathletes.bigcartel.com/" target="new">
                    <img src={inkdIcon} />
                  </a>
                   <h6 className="font-georgia text-center">Inkd Athletes</h6>
                </div>

                <div className="service-icon">
                  <a className="page-link" href="http://www.togglesbottleshop.com/" target="new">
                    <img src={togglesIcon} />
                  </a>
                   <h6 className="font-georgia text-center">Toggles Bottle Shop</h6>
                </div>
             </Col>
           </Row>
            </Container>


           {/* Footer */}
           {/* LOGO */}
           <Container fluid className="bg-blue pt-3">
             <Row className="align-items-center footer-margin">
               <Col xs={12} md={2} className="justify-content-start">
                   <a className="page-link">
                     <img src={bluejayLogo} />
                   </a>
               </Col>
              {/*SOCIAL*/}
               <Col xs={12} md={8} className="d-flex flex-column justify-content-center">
                   <div className="d-flex justify-content-center">
                        <a className="page-link" href="https://www.facebook.com/bluejayscreenprinting">
                          <img src={fbLogo}/>
                        </a>
                        <a className="ml-2 page-link" href="https://www.instagram.com/bluejayscreenprinting">
                          <img  src={igLogo}/>
                        </a>
                        <a className="ml-2 page-link" href="https://www.yelp.com/biz/blue-jay-screen-printing-marysville">
                          <img  src={yelpLogo}/>
                        </a>
                    </div>
               </Col>
             {/*SITE MAP*/}
               <Col xs={12} md={2}>
                   <div className="justify-content-end text-right">
                    <Link className="page-link" to="/">
                       Home
                     </Link>
                     <Link className="page-link" to="/about">
                       About
                     </Link>
                     <Link className="page-link" to="/services">
                       Services
                     </Link>
                     <Link className="page-link" to="/contact">
                       Contact
                     </Link>
                   </div>
               </Col>
             </Row>
             <Row>
             <Col xs={12} md={12} className="justify-content-center">
                <div className="text-white text-center">
                  <p className="mt-auto">Blue Jay Screen Printing © 2019 All rights reserved.</p>
                </div>
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
