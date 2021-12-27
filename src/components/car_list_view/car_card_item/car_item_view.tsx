import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardItemViewStyle from './card_item_view_style'

interface CarCardItemView {
  make: string
  model: string
  price: number
  imageUrl: string
}

export default function CarItemView(props: CarCardItemView) {
  const classes = CardItemViewStyle()
  const { make, model, price, imageUrl } = props
  const learnMore = (url: string) => {
    window.location.href = url
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {make}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {model}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {`$ ${price}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            learnMore(imageUrl)
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
