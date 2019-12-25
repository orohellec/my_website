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
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#1f3a41'
    }
  }
})

const NavLink = ({internLink = true, children, to}) => {
  const classes = useStyles()
  return(
    internLink ? 
      <GatsbyLink 
        to={to} 
        className={classes.navLink}
      >
        {children}
      </GatsbyLink> :
      <a 
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.navLink}
      >
        {children}
      </a>
  )
}

export default NavLink;

