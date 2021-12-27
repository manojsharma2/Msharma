import React from 'react'
import CarItemView from './car_card_item/car_item_view'
import CarData from '../../CarData'
import { Grid } from '@material-ui/core'
import CardListViewStyles from './card_list_view_style'

const CardList = () => {
  const classes = CardListViewStyles()
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {CarData.data.map((item, index) => {
            return (
              <Grid item key={index}>
                <CarItemView
                  imageUrl={item.img}
                  make={item.make}
                  model={item.model}
                  price={item.price}
                />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CardList
