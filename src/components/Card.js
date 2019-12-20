import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ContainerLink from './ContainerLink';
import Image from './image';

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <ContainerLink to='sites/shop-ecommerce'>
        <Image filename={props.filename} alt={props.alt}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </ContainerLink>
    </Card>
  );
}