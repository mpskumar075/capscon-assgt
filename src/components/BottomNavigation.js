import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import PinterestIcon from '@material-ui/icons/Pinterest';
import './BottomNavigation.css';
const useStyles = makeStyles({
  root: {
   
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
<PinterestIcon className="btm" />
      <BottomNavigationAction label="Recents" value="recents" icon={<TwitterIcon fontSize="small" />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FacebookIcon fontSize="small" />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<InstagramIcon fontSize="small" />} />
      <BottomNavigationAction label="Folder" value="folder" icon={<GitHubIcon fontSize="small" />} />
    </BottomNavigation>
  );
}
