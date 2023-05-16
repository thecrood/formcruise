import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '90vh',
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  errorImage: {
    width: '50%',
    marginBottom: theme.spacing(2),
  },
  button: {
      alignItems:'center',
      backgroundColor: '#078dc1',
      color: '#fff',
      transition: 'background-color 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: 'transparent',
        border: '2px solid #078dc1',
        color: '#078dc1',
        cursor: 'pointer'
      }
  }
}));

function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>      
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom>
          Oops! Page not found
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
        </Typography>
        
        <Button component={Link} to="/" variant="contained" color="primary" className={classes.button}>
          Go to Home
        </Button>
      </Container>
    </div>
  );
}

export default NotFound;