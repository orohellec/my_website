// import PropTypes from "prop-types"
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  outsideLink: {
    borderRadius: 5,
    color: 'blue',
    fontSize: '1.6rem',
    maxWidth: '300px',
  }
})

const OutsideLink = ({href, children}) => {
  const classes = useStyles()
  return (
    <a 
      href={href} 
      className={classes.outsideLink}
    >
      {children}
    </a>
  )
}

export default OutsideLink;