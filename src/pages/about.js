import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import {  Navbar, Nav, Button, Image, Container, Row, Col } from 'react-bootstrap';

import bluejayLogo from '../img/logos/BLUEJAY_VECTOR.svg';
import fbLogo from '../img/logos/facebook.svg';
import igLogo from '../img/logos/instagram-logo.svg';
import yelpLogo from '../img/logos/yelp-logo.svg';

export default class AboutPage extends React.Component {
  render() {

    return (
      <Layout>
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

          <div className="view-height-75 position-relative about-header-bg-image ">
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
                  <h1 className="text-left text-white display-3">Printing your dreams,</h1>
                  <h1 className="text-left text-white font-georgia">so we can live ours.</h1>
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
                      <h2 className="text-color-green">What started as a hobby quickly grew into a way of life.</h2>
                      <p>
                          We saw screen printing as a way to invest in our
                          family and in our community. Our goal has always been to not just be another print shop, but to really
                          communicate with our clients and make them feel taken care of. We focus on clear communication with
                          the client from the start of an idea, to graphic design and garment selection to a perfect finished
                          product; something we can both be proud of. Everything we put out into the world is something we are
                          happy to see go out our door, complete client satisfaction is our top priority. We look forward to being
                          your spot for all your custom garment needs.
                      </p>
                      <div className="d-flex justify-content-between">
                        <div >
                        </div>
                        <div>
                          <Button className="bg-green pl-4 pr-4">Our Products</Button>
                        </div>

                      </div>
                  </div>
                </Col>
              </Row>
            </Container>

            <Container className="mt-5 mb-5 p-2 about-copy-bg" >
              <Row>
                <Col xs={12} md={6} className="pl-5">
                  <h2 className="text-color-dark-blue text-center">Look at this hat.</h2>
                  <p className="line-height-3">我们将丝网印刷视为投资我们的一种方式
                          家庭和我们的社区。我们的目标始终是不仅仅是另一家印刷厂，而是真正的
                          与客户沟通，让他们感受到照顾。我们专注于清晰的沟通
                          客户从一个想法的开始，到平面设计和服装选择到完美的完成
                          产品;我们都可以引以为傲的事情。我们向世界展示的一切都是我们所拥有的
                          很高兴看到我们的大门，完全客户满意度是我们的首要任务。我们期待着成为
                          您的所有定制服装需求的地方。
                    </p>
                </Col>
              </Row>
            </Container>

            {/* Footer */}
           {/* LOGO */}
           <Container fluid className="bg-green pt-3">
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
