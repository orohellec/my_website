import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import ProfilImage from "../components/images/ProfilImage"
import MainTitle from "../components/mainTitle"
import SecondaryTitle from "../components/secondaryTitle"
import ArrayList from "../components/arrayList"
import SEO from "../components/seo"

import { Grid, Typography, Box} from '@material-ui/core'

export default function Template({data}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title="Home" />
      <MainTitle title={frontmatter.mainTitle} />
      <Grid container direction="row" align="center" justify="center"  spacing={3}>
        <Grid item xs={12} sm={6} md={3} ><ProfilImage /></Grid>
        <Grid item xs={12} md={9}><Typography variant="h6" align="justify">{frontmatter.introduction}</Typography></Grid>
      </Grid>
      <Box mt={5}>
      <MainTitle title="Technologies" />
      <Grid container direction="row" align="center" justify="center"  spacing={3}>
        <Grid item xs={12} sm={6}>
          <SecondaryTitle>Front-end</SecondaryTitle>
          <ArrayList arr={frontmatter.frontTechnos.split(',')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SecondaryTitle>Back-end</SecondaryTitle>
          <ArrayList arr={frontmatter.backTechnos.split(',')} />
        </Grid>
      </Grid>
      </Box>
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
        frontTechnos
        backTechnos
      }
    }
  }
`