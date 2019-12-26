import React from 'react'

import { Link as GatsbyLink } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    width: '100%',
    color: 'black',
    fontWeight: 'bold'
  }
})

const ContainerLink = ({children, to}) => {
  const classes = useStyles()
  return (
    <GatsbyLink 
      to={to} 
      className={classes.link}
    >
      {children}
    </GatsbyLink>
  )
}

export default ContainerLink;