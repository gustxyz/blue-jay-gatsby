import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Jumbotron, Button, ButtonToolbar, Dropdown, DropdownButton, Image, Container, Row, Col } from 'react-bootstrap';
import Coverflow from 'react-coverflow';
import Radium, {StyleRoot} from "radium";



export default class IndexPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout >

        {/* HEADER */}
          <Jumbotron className="header-hero" >
            <Container>
              <Row>
                <Col xs={6} md={4}>
                <h1 >Title Text</h1>
                <p >Subtitle Text</p>
                </Col>
              
                <Col xs={6} md={4}>
                  <Image src="https://static1.squarespace.com/static/590d0d33e6f2e1fda3fe9b66/t/5be61a04032be4061c45e656/1541806411675/?format=1500w" thumbnail />
                </Col>
              </Row>
                <Row>
                <ButtonToolbar>
                  {['I want to...', 'Print', '50-100', 'Shirts'].map(
                    variant => (
                      <DropdownButton
                        title={variant}
                        id={`dropdown-variants-${variant}`}
                        key={variant}
                      >
                        <Dropdown.Item eventKey="1">I want to...</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Print</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          50-100
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Shirts</Dropdown.Item>
                      </DropdownButton>
                    ),
                  )}
                </ButtonToolbar>
                <br></br>
                <Button className="">Send Request</Button>
                </Row>
              
            </Container>
          </Jumbotron>

          {/* About us */}
          <Container>
            <Row>
              <Col xs={12} md={6}>
                  <Jumbotron>
                    <h1 >Title Text</h1>
                    <p >Subtitle Text</p>
                    <Button className="">Send Request</Button>
                </Jumbotron>
              </Col>
              <Col xs={12} md={6}>
                  <Jumbotron>
                    <h1 >Title Text</h1>
                    <p >Subtitle Text</p>
                    <Button className="">Send Request</Button>
                </Jumbotron>
              </Col>
      
             </Row>
    
            </Container>

             {/* CREATE/CONTACT */}
            <Container fluid className="work-sale">
              <Row>
                <Col xs={12} md={4}>
                    <Jumbotron>
                      <h1 >Title Text</h1>
                      <p >Subtitle Text</p>
                      <Button className="">Send Request</Button>
                  </Jumbotron>
                </Col>
               
        
              </Row>
    
            </Container>


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
                      <Button className="">Send Request</Button>
                  </Jumbotron>
                </Col>
        
              </Row>
    
            </Container>


            {/* Testimonials */}
            <Container>
              <Row>
              <StyleRoot>
                  <Coverflow
                        displayQuantityOfSide={2}
                        navigation
                        infiniteScroll
                        enableHeading
                        media={{
                          '@media (max-width: 900px)': {
                            width: '600px',
                            height: '300px'
                          },
                          '@media (min-width: 900px)': {
                            width: '960px',
                            height: '600px'
                          }
                        }}
                      >
                        <img src='images/album-1.png' alt='Album one' data-action="https://facebook.github.io/react/"/>
                        <img src='images/album-2.png' alt='Album two' data-action="http://passer.cc"/>
                        <img src='images/album-3.png' alt='Album three' data-action="https://doce.cc/"/>
                        <img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com"/>
                  </Coverflow>
                </StyleRoot>
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
