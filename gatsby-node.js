const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const indexPageTemplate = path.resolve('src/templates/indexTemplate.js')
  const projectPageTemplate = path.resolve('src/templates/projectTemplate.js')
  const portfolioPageTemplate = path.resolve('src/templates/portfolioTemplate.js')

  const result = await graphql(`
    {
      posts: allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      projects: allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}}}) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      index: allMarkdownRemark(filter: {frontmatter: {type: {eq: "home"}}}) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  createPage({
    path: result.data.index.edges[0].node.frontmatter.path,
    component: indexPageTemplate,
    context: {}, // additional data can be passed via context
  })

  result.data.posts.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  result.data.projects.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: projectPageTemplate,
      context: {}, // additional data can be passed via context
    })
  })
  
  createPage({
    path: "/portfolio",
    component: portfolioPageTemplate
  })
}
