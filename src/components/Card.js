import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';

import ContainerLink from './ContainerLink'
import Image from './image'

export default function ImgMediaCard(props) {
  return (
    <Card>
      <ContainerLink to={props.link}>
        <Box height="220px">
          <Image filename={props.filename} alt={props.alt} />
        </Box>
        <CardContent>
          <Typography gutterBottom align="center" variant="h5">
            {props.title}
          </Typography>
        </CardContent>
      </ContainerLink>
    </Card>
  );
}