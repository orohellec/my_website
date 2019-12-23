import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import ContainerLink from './ContainerLink'
import Image from './image'

export default function ImgMediaCard(props) {
  return (
    <Card>
      <ContainerLink to={props.link}>
        <Image filename={props.filename} alt={props.alt}/>
        <CardContent>
          <Typography gutterBottom align="center" variant="h5" component="h2">
            {props.title}
          </Typography>
        </CardContent>
      </ContainerLink>
    </Card>
  );
}