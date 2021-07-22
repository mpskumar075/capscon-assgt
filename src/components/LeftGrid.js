import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './LeftGrid.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles({
  root: {
    minWidth: 260,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        
        <Typography variant="subtitle2" gutterBottom>
        <span className="leftst">Follow our social media</span>
        </Typography>
        <div className="social">
         <FacebookIcon stylr={{ fontSize: 50 }} />
         <TwitterIcon stylr={{ fontSize: 50 }} />
         <InstagramIcon stylr={{ fontSize: 50 }} />
         <YouTubeIcon stylr={{ fontSize: 50 }} />
        </div>
        
      </CardContent>
      
    </Card>
  );
}
