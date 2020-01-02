import React from "react"
import { graphql } from "gatsby"
import { Grid, Typography } from '@material-ui/core'
import Layout from "../components/layout"
import MainTitle from '../components/mainTitle'
import SecondaryTitle from '../components/secondaryTitle'
import Image from '../components/image'
import OutsideLink from '../components/outsideLink'
import NavLink from '../components/navLink'
import ArrayList from '../components/arrayList'
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  return (
    <Layout>
      <SEO title="Projet" />
      <MainTitle title={frontmatter.title} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={7} lg={8} style={{marginBottom: '50px'}}>
          <Image filename={frontmatter.imgName} alt="photo du site" />
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <SecondaryTitle>Technologies</SecondaryTitle>
          <ArrayList arr={frontmatter.stack.split(',')} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SecondaryTitle>Concept</SecondaryTitle>
        </Grid>
        <Grid item xs={12} style={{marginBottom: '30px'}}>
          <Typography variant="body1" align="center">{frontmatter.concept}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SecondaryTitle variant="h2" align="center">Description</SecondaryTitle>
        </Grid>
        <Grid item xs={12} style={{marginBottom: '30px'}}>
          <Typography align="justify">{frontmatter.description}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SecondaryTitle variant="h2" align="center">Liens Externes</SecondaryTitle>
        </Grid>
        <Grid item xs={12} align="center">
          <OutsideLink href={frontmatter.githubLink}>Repo github</OutsideLink>
        </Grid>
        { frontmatter.prodLink && 
        <Grid item xs={12} align="center" style={{marginBottom: '30px'}}>
          <OutsideLink href={frontmatter.prodLink}>Site en production</OutsideLink>
        </Grid>
        }
      </Grid>
      <Grid container justify="center" style={{marginTop: '30px'}}>
        <Grid item>
          <NavLink to="/portfolio">{"<-- Retour"}</NavLink>
        </Grid>
      </Grid>
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
        imgName
        concept
        description
        githubLink
        prodLink
        stack
      }
    }
  }
`