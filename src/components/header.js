
import PropTypes from "prop-types"
import React from "react"

import {
  AppBar,
  Grid,
  Box
} from '@material-ui/core'

import NavLink from './navLink';

const Header = ({ siteTitle }) => {
  return (
      <AppBar position="static" >
        <Box mx={5}>
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <NavLink to="/">Olivier Rohellec</NavLink>
            </Grid>
            <Grid item>
              <Grid container direction="row">
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
