import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import ProfilImage from "../components/images/ProfilImage"
import MainTitle from "../components/mainTitle"
import SEO from "../components/seo"

import { Grid, Typography, Container} from '@material-ui/core'

export default function Template({data}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title="Home" />
        <Container maxWidth="lg">
          <MainTitle title={frontmatter.mainTitle} />
          <Grid container direction="row" justify="center" align-items="center" spacing={3}>
            <Grid item xs={12} sm={6} md={3}><ProfilImage /></Grid>
            <Grid item xs={12} md={9}><Typography variant="h6" align="justify">{frontmatter.introduction}</Typography></Grid>
          </Grid>
        </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        mainTitle
        introduction
      }
    }
  }
`