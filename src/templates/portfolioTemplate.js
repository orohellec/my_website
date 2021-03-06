import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/Card"
import { Grid } from '@material-ui/core'
import MainTitle from '../components/mainTitle'
import SEO from "../components/seo"

export default function Template({ data }) {
  const { allMarkdownRemark } = data

  const cardList = allMarkdownRemark.edges.map(edge => {
    const { frontmatter } = edge.node
    return(
      <Grid item xs={12} sm={6} md={4}>
        <Card
          link={frontmatter.path}
          filename={frontmatter.imgName}
          alt={frontmatter.imgName}
          title={frontmatter.title}
          description={frontmatter.description}
        />
      </Grid>
    )
  })

  return (
    <Layout>
      <SEO title="Portfolio" />
      <MainTitle title="Mes projets" />
      <Grid container justify="center" spacing={4}>
        {cardList}
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}}}) {
      edges {
        node {
          frontmatter {
            path
            imgName
            type
            title
            description
          }
        }
      }
    }
  }
`