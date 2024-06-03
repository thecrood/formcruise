import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from "../Pages/SignIn"
import logo from "../Images/favicon.png"

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Git from '@material-ui/icons/GitHub';
import Search from "../Components/Search"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#fff',
    boxShadow: 'none',
  },
  appBarScrolled: {
    backgroundColor: theme.palette.primary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'black',
  },
  title: {
    flexGrow: 1,
    color:'black'
  },
  list: {
    width: 250,
  },
  socialIcons: {
    marginLeft: theme.spacing(1),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [textColor, settextColor] = useState("black");


  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
      settextColor("#ffffff");
    } else {
      setScrolled(false);
      settextColor("black");
    }
  };


  window.addEventListener('scroll', handleScroll);

  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { text: 'Home', link: '/' },
          { text: 'Docs', link: '/docs' },
          { text: 'Pricing', link: '/pricing' },
          { text: 'Contact Us', link: '/contactus' },
          { text: 'About Us', link: '/about' },
          { text: 'Videos', link: '/videos' },
        ].map(({ text, link }, index) => (
          <ListItem button component="a" href={link} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <div className={classes.socialIcons}>
        <IconButton color="inherit" href="https://www.linkedin.com/rohit-chaudhary-038171158/">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="inherit" href="#">
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit" href="#">
          <YouTubeIcon />
        </IconButton>
        <IconButton color="inherit" href="https://www.github.com/thecrood">
          <Git />
        </IconButton>
      </div>
    </div>
  );
  



  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={scrolled ? classes.appBarScrolled : classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} style={{color:textColor, paddingBottom: '15px'}} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} style={{ color: textColor, display: 'flex', alignItems: 'center'}}>
            <img 
              src={logo} 
              alt="Logo" 
              className={classes.logo} 
              style={{ width: '50px', height: '40px' }} // Adjust the width and height as needed
            /> 
            <span style={{ 
            fontFamily: 'Robotic Text', // Change font style as needed
            fontWeight: 'italic', // Change font weight as needed
          }}>gifs</span>
          </Typography>
          <Search />
          <SignIn />
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  )
};

export default Navbar;
