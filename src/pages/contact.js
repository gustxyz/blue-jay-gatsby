import React from 'react'
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import {  Navbar, Nav, Button, Image, Container, Row, Col } from 'react-bootstrap';

import bluejayLogo from '../img/logos/BLUEJAY_VECTOR.svg';
import fbLogo from '../img/logos/facebook.svg';
import igLogo from '../img/logos/instagram-logo.svg';
import yelpLogo from '../img/logos/yelp-logo.svg';



export default class ContactPage extends React.Component {
    render() {

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


         <div className="view-height-75 position-relative contact-header-bg-image" >
            <Container fluid>
              <Row>
                <Col className="text-right logo-margin">
                  <Link to="/">
                    <img src={bluejayLogo} />
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm md={7} lg={12} className="offset-md-2">
                  <h1 className="text-left text-white display-3">We'd love to hear from you.</h1>
                  <h1 className="text-left text-white font-georgia">Let's start that project!</h1>
                  <br />
                  <br />
                </Col>
              </Row>
            </Container>
         </div>

         <Container >
             <Row>
               <Col className="mt-n10" xs={12}>
                 <div md={6} className="bg-gray blurb pt-5 pb-5" >
                     <h1 className="text-color-orange">Loren's Ipsum</h1>
                     <p>
                       here be order forms
                     </p>
                     <div className="d-flex justify-content-between">
                       <div >
                         (123)465-7891
                         <br/>
                         Mon - Sun: 8:00am - 6:00pm
                       </div>
                       <div>
                         <Button className="bg-orange pl-4 pr-4">Order Embroidery</Button>
                       </div>

                     </div>
                 </div>
               </Col>
             </Row>
           </Container>

           <Container className="mt-5 mb-5 p-2 pb-5 pt-5" >
             <Row>


               <Col xs={12}  className="pl-5">
                 <h2 className="text-color-orange text-left">Getting a quote?</h2>
                 <p className="">Here's some helpful information you should have for us up front so
                   we don't waste 2 weeks emailing eachother.</p>
                   <p> We offer high-quality screen printing on shirts, tanks, tees, and hats.
                   We specialize in larger quantity orders of 25 and up to 1,000+.
                   If you're looking for good quality and great customer service look no further.
                 </p>
                 <Button className="bg-orange ml-auto pl-4 pr-4">Give us the cash</Button>
               </Col>
             </Row>
           </Container>




           {/* Footer */}
           {/* LOGO */}
           <Container fluid className="bg-orange pt-3">
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

    ContactPage.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }

  export const pageQuery = graphql`
    query ContactQuery {
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