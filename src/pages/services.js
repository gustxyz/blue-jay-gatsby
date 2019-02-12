import React from 'react'
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import {  Navbar, Nav, Button, Image, Container, Row, Col } from 'react-bootstrap';

import bluejayLogo from '../img/logos/BLUEJAY_VECTOR.svg';
import fbLogo from '../img/logos/facebook.svg';
import igLogo from '../img/logos/instagram-logo.svg';
import yelpLogo from '../img/logos/yelp-logo.svg';

import cutandsewIcon from '../img/service_icons/cutandsew-icon.svg';
import emrboideryIcon from '../img/service_icons/embroidery-icon.svg';
import graphicdesignIcon from '../img/service_icons/graphicdesign-icon.svg';
import screenprintIcon from '../img/service_icons/screenprint-icon.svg';
import webmediaIcon from '../img/service_icons/webmedia-icon.svg';

import cutandsewImg from '../img/services/cutandsew-img.png';
import embroideryImg from '../img/services/embroidery-img.png';
import graphicdesignImg from '../img/services/graphicdesign-img.png';
import screenprintImg from '../img/services/screenprint-img.png';
import webmediaImg from '../img/services/webmedia-img.png';


export default class ServicePage extends React.Component {
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


       <div className="view-height-75 position-relative services-header-bg-image" >
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
                  <h1 className="text-left text-white display-3">Custom Apparel</h1>
                  <h1 className="text-left text-white font-georgia">and so much more.</h1>
                  <br />
                  <br />
                </Col>
              </Row>
            </Container>
       </div>

{/* SERVICE ICONS */}

       <Container >
           <Row>
             <Col className="mt-n10" xs={12}>
               <div md={6} className="bg-white blurb pt-5" >
                   <h2 className="text-color-purp">
                    Blue Jay will make sure your brand and business
                    look good online and in the field. </h2>
               </div>
             </Col>
             <Col xs={4} md={10} lg={12} className="text-center">
                <div className="service-icon screen-service-icon">
                  <img src={screenprintIcon}/><span className="service-icon"></span>
                  <h4 className="text-color-purp font-georgia text-center">Screenprinting</h4>
                </div>
                <div className="service-icon">
                  <img src={emrboideryIcon} /><span className="service-icon"></span>
                  <h4 className="text-color-purp font-georgia text-center">Embroidery</h4>
                </div>
                <div className="service-icon">
                  <img src={cutandsewIcon} /><span className="service-icon"></span>
                  <h4 className="text-color-purp font-georgia text-center">Cut & Sew</h4>
                </div>
                <div className="service-icon">
                  <img src={graphicdesignIcon} /><span className="service-icon"></span>
                  <h4 className="text-color-purp font-georgia text-center">Graphic Design</h4>
                </div>
                <div className="service-icon">
                  <img src={webmediaIcon} /><span className="service-icon"></span>
                  <h4 className="text-color-purp font-georgia text-center">Web Media</h4>
                </div>
             </Col>
           </Row>
         </Container>


{/* DESCRIPTIONS */}


         <Container className="jumbotron" >
           <Row>
             <Col xs={12} md={6}>
               <img src={screenprintImg} style={{width:'300px'}}/>
             </Col>
             <Col xs={12} md={6} className="pl-5">
               <h2 className="text-color-dark-purp">Screen Printing</h2>
               <p className="">HOW WE GOT STARTED <br/>
                Come to us with just an idea or your exact specifications for art and garments, either way, we’ve got you
                covered. Our excellent in-house graphic design team will hash out all of the details. With a
                wide variety of wholesale garments to choose from, we will find you exactly what you’re
                looking for. Our detail obsessed print team will make sure the screens are
                perfect, delivering high quality printed garments. From hoodies to sweats and
                everything in between, we’ve got you covered!
               </p>
               <Button className="bg-purp ml-auto pl-4 pr-4">Order Prints.</Button>
             </Col>
           </Row>
         </Container>

        <Container className="jumbotron" >
           <Row>
             <Col xs={12} md={6} className="pl-5">
               <h2 className="text-color-dark-purp text-left font-style-italic">Embroidery</h2>
               <p className="">CLASSIC DETAIL<br/>
               Looking for custom embroidery for beanies, hats, flannels or anything else? Look no further! We have
               an incredible custom embroidery team that can service all your needs. You can provide the garments
               or we'll stock the inventory for you. High thread counts, high quality. We're a stitch above the rest.
               </p>
               <Button className="bg-purp ml-auto pl-4 pr-4">grandma please</Button>
             </Col>
             <Col xs={12} md={6}>
               <img src={embroideryImg} style={{width:'300px'}}/>
             </Col>
           </Row>
         </Container>

         <Container className="jumbotron" >
           <Row>
             <Col xs={12} md={6}>
               <img src={cutandsewImg} style={{width:'300px'}}/>
             </Col>
             <Col xs={12} md={6} className="pl-5">
               <h2 className="text-color-dark-purp text-left font-style-italic">Cut & Sew</h2>
               <p className="">NEXT LEVEL APPAREL<br/> Custom labels, tags, buttons, you name it -
                Our newest addition to the array of services we offer is cut and sew. We can have custom labels made
                and sew them to your garments in house. Whether it’s a custom size label or other added
                flair to your garments, we’ve got you covered.
               </p>
               <Button className="bg-purp ml-auto pl-4 pr-4">Ready to stand out?</Button>
             </Col>
           </Row>
         </Container>

         <Container className="jumbotron" >
           <Row>
             <Col xs={12} md={6} className="pl-5">
               <h2 className="text-color-dark-purp text-left font-style-italic">Graphic Design</h2>
               <p className="">BRING YOUR IDEAS TO LIFE<br/>original artwork the way you imagined it.
               </p>
               <Button className="bg-purp ml-auto pl-4 pr-4">Got an idea?</Button>
             </Col>
              <Col xs={12} md={6}>
               <img src={graphicdesignImg} style={{width:'300px'}}/>
             </Col>
           </Row>
         </Container>

         <Container className="jumbotron" >
           <Row>
             <Col xs={12} md={6}>
               <img src={webmediaImg} style={{width:'300px'}}/>
             </Col>
             <Col xs={12} md={6} className="pl-5">
               <h2 className="text-color-dark-purp text-left font-style-italic">Web Media</h2>
               <p className="">LOOK GOOD ONLINE <br/>social, email, and web design - we've got you covered.
               </p>
               <Button className="bg-purp ml-auto pl-4 pr-4">Let's talk media</Button>
             </Col>
           </Row>
         </Container>







         {/* Footer */}
           {/* LOGO */}
           <Container fluid className="bg-purp pt-3">
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

ServicePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query ServiceQuery {
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
