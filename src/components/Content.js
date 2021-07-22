import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from './Grid';
import GridMid from './GridMid';
import GridBottom from './GridBottom';
import './Content.css';

const useStyles = makeStyles({
  root: {
    width: '90vw',

  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
     
      
      <Grid />
      
      
      <br />

      

      

    </div>
  );
}
