import React from 'react'

import { Link as GatsbyLink } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navLink: {
    display: 'inline-block',
    textDecoration: 'none',
    width: '100%'
  }
})

const ContainerLink = ({children, to}) => {
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

export default ContainerLink;