// import PropTypes from "prop-types"
import React from 'react'

import { Link as GatsbyLink } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navLink: {
    color: 'white',
    display: 'inline-block',
    textDecoration: 'none',
    padding: '0.5rem 0.5rem',
    fontSize: '1.3rem',
    '&:hover': {
      backgroundColor: '#21dafb'
    }
  }
})

const NavLink = ({children, to}) => {
  const classes = useStyles()
  return (
    <GatsbyLink 
      to={to} 
      className={classes.navLink}
    >
      {children}
    </GatsbyLink>
  )
}

export default NavLink;

