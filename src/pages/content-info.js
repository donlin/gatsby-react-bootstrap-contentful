import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ContentInfoPage extends React.Component {
  countAsset = get(this, "props.data.allContentfulAsset.totalCount")
  countConentType = get(this, "props.data.allContentfulContentType.totalCount")

  render() {
    return (
      <Layout pageInfo={{ pageName: "content-info" }}>
        <SEO title="Page two" />
        <Container className="text-center">
          <Row>
            <Col>
              <h1>General Information from Contentful</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Total of Assets: {this.countAsset}</p>
              <p>Total of Content Types: {this.countConentType}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/">Go back to the homepage</Link>
            </Col>
            <Col>
              <a href="/___graphql">Go to GraphiQL</a>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default ContentInfoPage

export const pageQuery = graphql`
  query ContentInfoQuery {
    allContentfulAsset {
      totalCount
    }
    allContentfulContentType {
      totalCount
    }
  }
`
