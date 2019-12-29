
import PropTypes from "prop-types"
import React from "react"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import {
  AppBar,
  Grid,
  Container,
  IconButton,
  Hidden,
  Collapse
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
      <Container maxWidth='lg'>
        <Hidden only={['xs']}>
          <Grid container justify="space-between">
            <Grid item>
              <NavLink to="/">Accueil</NavLink>
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
                <MenuIcon fontSize='large' color="secondary"/>
              </IconButton>
            </ClickAwayListener>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Grid container direction="column"  alignContent="center">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </Grid>
          </Collapse>
        </Hidden>
        </Container>
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
