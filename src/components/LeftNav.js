    import React from 'react';
    import clsx from 'clsx';
    import { makeStyles, useTheme } from '@material-ui/core/styles';
    import Drawer from '@material-ui/core/Drawer';
    import CssBaseline from '@material-ui/core/CssBaseline';
    import AppBar from '@material-ui/core/AppBar';
    import Toolbar from '@material-ui/core/Toolbar';
    import List from '@material-ui/core/List';
    import Typography from '@material-ui/core/Typography';
    import Divider from '@material-ui/core/Divider';
    import IconButton from '@material-ui/core/IconButton';
    import MenuIcon from '@material-ui/icons/Menu';
    import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
    import ChevronRightIcon from '@material-ui/icons/ChevronRight';
    import ListItem from '@material-ui/core/ListItem';
    import ListItemIcon from '@material-ui/core/ListItemIcon';
    import ListItemText from '@material-ui/core/ListItemText';
    import InboxIcon from '@material-ui/icons/MoveToInbox';
    import MailIcon from '@material-ui/icons/Mail';
    import Profile1 from '../images/Profile1.jpg';
    import './LeftNav.css';
    import Chip from '@material-ui/core/Chip';
    import FaceIcon from '@material-ui/icons/Face';
    import Button from '@material-ui/core/Button';
    import Icon from '@material-ui/core/Icon';
    import SearchIcon from '@material-ui/icons/Search';
    import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
    import LeftGrid from './LeftGrid';
    import GpsFixedIcon from '@material-ui/icons/GpsFixed';
    import CloseIcon from '@material-ui/icons/Close';
    import Content from './Content';
    import Profile from '../images/Profile1.jpg';
    import Avatar from '@material-ui/core/Avatar';
    import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
    import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
    import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
    import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
    import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
    import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
    import RightNav from './RightNav';
    import PinterestIcon from '@material-ui/icons/Pinterest';
    

    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        zIndex: "1000",
        backgroundColor: '#ffffff',
        
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: theme.spacing(7),
    },

    gpsButton: {
        marginLeft: theme.spacing(7),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    }));

    export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
        
            color="transparent"
            position="fixed"
            className={classes.appBar}
        >
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
            >
                <MenuIcon />
                <PinterestIcon />
            </IconButton>
            {/* <Typography variant="h4" noWrap>
                <GpsFixedIcon 
                className={clsx(classes.gpsButton)}
                 />
            </Typography> */}

            <div className="Toptools">
            <h6>Hi Cassie</h6>
            <Avatar className="profiless" alt="Remy Sharp" src={Profile} />
            <IconButton aria-label="delete">
            <HomeOutlinedIcon />
            </IconButton>
            <IconButton aria-label="delete">
            <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton aria-label="delete">
            <CalendarTodayOutlinedIcon />
            </IconButton>
            <IconButton aria-label="delete">
            <CalendarTodayOutlinedIcon />
            </IconButton>
            <IconButton aria-label="delete">
            <ChatOutlinedIcon />
            </IconButton>
            <IconButton aria-label="delete">
             <EmailOutlinedIcon />
            </IconButton>
            <IconButton aria-label="delete">
           <AddCircleOutlineOutlinedIcon />
            </IconButton>
            
            
            
           
           
            
            </div>
            </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <CloseIcon /> : <GpsFixedIcon  />}
            </IconButton>
            </div>
            
            <img src={Profile1} className="profile" />
            <Typography variant="subtitle2" gutterBottom>
            <span className="prof"> Cassie April</span>
            <br />
            <Button variant="outlined" size="small" color="primary"  style={{ fontSize: 7 }} className={classes.margin}>
            34px
            </Button>
            </Typography>
            <br />
            <Divider />
        <Button variant="outlined" size="large"  endIcon={<SearchIcon />} className={classes.margin}>
        <Typography variant="subtitle2" gutterBottom>
            <span className="disc">D<span className="discp">iscover</span></span>
            </Typography>
            </Button>
            <br />
            <Typography variant="subtitle2" gutterBottom>
            <span className="home">Home</span>
            </Typography>
            
            <Typography variant="subtitle2" gutterBottom>
            <span className="profiles">Profile</span>
            </Typography>

            <Typography variant="subtitle2" gutterBottom>
            <span className="expand">Clans</span><span className="icon"><ExpandMoreIcon fontSize="small" /></span>
            </Typography>

            <Typography variant="subtitle2" gutterBottom>
            <span className="expand">Clabs</span><span className="icon"><ExpandMoreIcon fontSize="small" /></span>
            </Typography>

            <Typography variant="subtitle2" gutterBottom>
            <span className="home">Blogs</span>
            </Typography>

            <Typography variant="subtitle2" gutterBottom>
            <span className="more">More..</span><span className="icon"><ExpandMoreIcon fontSize="small" /></span>
            </Typography>

            
             <br /><br />
            <LeftGrid />
        
        </Drawer>
        <main
            className={classes.content}
        >
            <div className={classes.drawerHeader} />
            <RightNav />
            <Content />
            
           
           
        </main>
        
        
        </div>
    );
    }
