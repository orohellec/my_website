import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  image: {
    borderRadius: '50%',
    maxWidth: '400px'
  }
})


const ProfilImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profil-picture.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const classes = useStyles()
  return <Img className={classes.image} fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default ProfilImage