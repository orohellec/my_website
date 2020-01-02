/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { Container, Box } from '@material-ui/core'

import Header from "./header"
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Footer from './footer'
import theme from '../theme'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta property="og:image" content="/example-image.png"/>
      </Helmet>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Box my={5}>
          <Container>
            <main>{children}</main>
          </Container>
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
