const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const aboutPageTemplate = path.resolve('src/templates/aboutTemplate.js')

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
      about: allMarkdownRemark(filter: {frontmatter: {path: {eq: "/about"}}}) {
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
    path: result.data.about.edges[0].node.frontmatter.path,
    component: aboutPageTemplate,
    context: {}, // additional data can be passed via context
  })

  result.data.posts.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
