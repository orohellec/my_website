
import PropTypes from "prop-types"
import React from "react"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import {
  AppBar,
  Grid,
  Box,
  IconButton,
  Hidden,
  Collapse,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import NavLink from './navLink';

const Header = ({siteTitle}) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickAway = () => {
    setExpanded(false);
  };

  return (
    <AppBar position="sticky">
      <Box mx={5}>
        <Hidden only={['xs']}>
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
        </Hidden>
        <Hidden smUp>
          <Grid container direction="row" justify="flex-end">
            <ClickAwayListener onClickAway={handleClickAway}>
              <IconButton onClick={handleExpandClick}>
                <MenuIcon color="secondary"/>
              </IconButton>
            </ClickAwayListener>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Grid container direction="column"  alignContent="center">
                <NavLink to="/">Olivier Rohellec</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </Grid>
          </Collapse>
        </Hidden>
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
