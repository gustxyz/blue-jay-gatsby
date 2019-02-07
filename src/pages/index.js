import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Jumbotron, Button, ButtonToolbar, Dropdown, DropdownButton, Image, Container, Row, Col } from 'react-bootstrap';




export default class IndexPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout >
          <Jumbotron className="h-100 w-100">
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
