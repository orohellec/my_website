import React from "react"
import Link from "./link"
import { Button } from "@material-ui/core"
import { Box } from '@material-ui/core'

const ButtonLink = ({to, children}) => {
  return(
    <Box bgcolor="secondary.main">
      <Link to={to} color="secondary" variant="h6">{children}</Link>
    </Box>
  )
}

export default ButtonLink;