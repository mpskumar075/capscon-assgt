import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from './SimpleCard';
import SimpleCardBottom from './SimpleCardBottom';
import SimpleCardMid from './SimpleCardMid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">

      <Grid item xs={7} >
           <Typography variant="h4" align="left">
        Welcome to your feed, Cassie 
      </Typography>
        </Grid>

         <Grid item xs={7}>
           
      <Typography variant="h6" align="left" >
        <span className="top">Let's see what's new today!</span>
      </Typography>
        </Grid>

      
     

        <Grid item xs={7} >
          <Paper className={classes.paper}><SimpleCard /></Paper>
        </Grid>

        <Grid item xs={7}>
          <Paper className={classes.paper}><SimpleCardMid /></Paper>
        </Grid>

                 <Grid item xs={7}>
           
      <Typography variant="h6" align="left">
        No more updates, click here to checkout profiles.
      </Typography>
        </Grid>

         

        <Grid item xs={7}>
          <Paper className={classes.paper}><SimpleCardBottom /></Paper>
        </Grid>
       </Grid>
    </div>
  );
}
