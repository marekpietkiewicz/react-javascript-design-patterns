import React from 'react';
import Cards from './../patterns/factories/Cards';
import Grid from '@material-ui/core/Grid';

const user_a = {
  name: "jhon doe",
  items: [
    {
      title: "Card 1",
      details: {
        // ...more info
      },
      type: "A"
    },
    {
      title: "Card 2",
      details: {
        // ...more info
      },
      type: "B"
    },
    {
      title: "Card 3",
      details: {
        // ...more info
      },
      type: "C"
    },
    {
      title: "Card 4",
      details: {
        // ...more info
      },
      type: "D"
    }
  ]
}


export default function FactoryPage() {
  console.log('FactoryPage loaded')

  

  return (
    <div>
      <Grid container spacing={3}>
        {user_a.items.map((card, i) => (
          <Cards key={i} component={card} />
        ))}
      </Grid>
    </div>
  );


}