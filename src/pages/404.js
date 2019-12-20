import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page Inexistante" />
    <h1>Page inexistante</h1>
    <p>Cette page n'existe pas !</p>
  </Layout>
)

export default NotFoundPage
