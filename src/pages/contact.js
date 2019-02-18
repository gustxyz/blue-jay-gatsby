import React from 'react'
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import {  Form, Navbar, Nav, Button, Image, Container, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import bluejayLogo from '../img/logos/BLUEJAY_VECTOR.svg';
import fbLogo from '../img/logos/facebook.svg';
import igLogo from '../img/logos/instagram-logo.svg';
import yelpLogo from '../img/logos/yelp-logo.svg';



export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      job : false,
      qty : false,
      product : false
    }  

    if(typeof window !== `undefined`) {
      let url_string = window.location.href;
      let url = new URL(url_string);
      
        let formJob = url.searchParams.get("job");
        let formQty = url.searchParams.get("qty");
        let formProduct =  url.searchParams.get("product");
    
        this.state = {
          job : formJob,
          qty : formQty,
          product : formProduct
        }  
    }
  

      console.log("Did mount");
      console.log(this.state);


  }

  componentDidMount(){
   
  }



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
  
        
         <div className="view-height-75 bg-orange position-relative" >
    
           <h1 className="text-center text-white pt-25-vh">Tell us about your project!</h1>
           <Link className="page-link bj-header-logo" to="/">
               <img src={bluejayLogo} />
           </Link>
      
    
         </div>
  
         <Container className="mt-n10 bg-gray blurb pl-3 pr-3"  >
             <Form name="contact" method="post" data-netlify="true" className="row justify-content-around">
             <input type="hidden" name="form-name" value="contact" />
               <Col  xs={12}md={6} lg={3}>
               
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Name*</Form.Label>
                      <Form.Control type="name" placeholder="Alex Long" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Email*</Form.Label>
                      <Form.Control type="email" placeholder="test@gmail.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Phone*</Form.Label>
                      <Form.Control type="phone" placeholder="15091234567" />
                    </Form.Group>
                
               </Col>
               <Col  xs={12}md={6} lg={3}>
               
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Project Name*</Form.Label>
                      <Form.Control type="project-name" placeholder="New BlueJay Website" />
                    </Form.Group>
                    <div className="d-flex justify-content-around">
                      <Form.Group className="contact-input-sidebyside"  controlId="exampleForm.ControlSelect1">
                        <Form.Label>Type of Service</Form.Label>
                        <Form.Control as="select">
                          <option> 
                          {
                            this.state.job || "embroider"
                          }
                          </option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group className="contact-input-sidebyside ml-auto" controlId="exampleForm.ControlSelect2">
                          <Form.Label>Qunatity Needed*</Form.Label>
                          <Form.Control type="quantity" placeholder="3" value={this.state.qty || ""} />
                      </Form.Group>
                    </div>

                    <div className="d-flex justify-content-around">
                      <Form.Group className="contact-input-sidebyside"  controlId="exampleForm.ControlSelect1">
                        <Form.Label>Item to service</Form.Label>
                        <Form.Control as="select">
                         
                          <option>{this.state.product}</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group className="contact-input-sidebyside ml-auto" controlId="exampleForm.ControlSelect2">
                          <Form.Label>Qunatity Needed*</Form.Label>
                          <Form.Control type="quantity" placeholder="3" />
                      </Form.Group>
                    </div>

                    <div className="d-flex justify-content-around">
                      <Form.Group className="contact-input-sidebyside"  controlId="exampleForm.ControlSelect1">
                        <Form.Label>Turnaround Time</Form.Label>
                        <Form.Control as="select">
                          <option>Yes</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group className="contact-input-sidebyside ml-auto" controlId="exampleForm.ControlSelect2">
                          <Form.Label>Qunatity Needed*</Form.Label>
                          <Form.Control type="quantity" placeholder="3" />
                      </Form.Group>
                    </div>
                
          
               </Col>
               <Col xs={12}md={6} lg={3}>
              
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Pickup date?</Form.Label>
                <DatePicker />
              </Form.Group>
           
               </Col>
               <Col xs={12}md={12} lg={2}>
                  <Button className="bg-orange">Get a Quote!</Button>
               </Col>
             </Form>       
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
