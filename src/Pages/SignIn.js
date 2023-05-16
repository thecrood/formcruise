import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Link,
  FormControlLabel,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { createTheme } from '@mui/material/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import $ from 'jquery';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'auto',
    height:'auto'
  },
  formElement: {
    margin: theme.spacing(1),
  },
  button: {
    float:'right',
      backgroundColor: 'transparent',
      alignItems:'right',
      border: '2px solid #078dc1',
      color: '#078dc1',
      transition: 'background-color 0.2s ease-in-out',
      '&:hover': {
          backgroundColor: '#078dc1',
          color: '#fff',
          cursor: 'pointer'
      }
  },
  buttonCancel: {
      float:'right',
      backgroundColor: '#078dc1',
      border: '2px solid #078dc1',
      margin: theme.spacing(1),
      alignItems:'right',
      color: '#fff',
      transition: 'background-color 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: 'transparent',
        border: '2px solid #078dc1',
        color: '#078dc1',
          cursor: 'pointer'
      }
  },
  root: {
    backgroundColor: 'rgba(215, 244, 255, 1)',

    borderBottomLeftRadius: '50% 80px',
    borderBottomRightRadius: '50% 0px',
},
dialog: {
  maxWidth: '600px',
  maxHeight: '550px',
}
}));

const theme = createTheme();





const SignIn = ({changeColor}) => {
  const classes = useStyles();
  const [showSignUp, setShowSignUp] = useState(false);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [textColor, settextColor] = useState("#3f51b5");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      settextColor("#ffffff");
    } else {
      settextColor("#3f51b5");
    }
  };





  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUsername('');
    setPassword('');
    setRememberMe(false);
    setUsernameError(false);
    setPasswordError(false);
  };



  


  const handleSignIn = () => {

    if (!username) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (username && password) {
      // handle sign in logic here
    }

  };


  const handleSignUpClick = () => {
    $('#signUpDialog').show()
    setShowSignUp(true);
  };

  const handleSignUpClose = () => {
    setShowSignUp(false);
    setOpen(false);
  };



  window.addEventListener('scroll', handleScroll);


  return (
    <>
      <IconButton color="inherit" onClick={handleOpen}>
        <Button style={{color:textColor}} startIcon={<AccountCircleIcon />}>
            Login/Signup
          </Button>
      </IconButton>
      <Dialog id="signInDialog" open={open} onClose={handleClose} >
        <DialogTitle align="center">
        <LockOutlinedIcon style={{ fontSize: '3rem', color: '#3f51b5', alignItems:'center'}} />
        <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          </DialogTitle>
        <DialogContent>
          <form className={classes.form}>
            <TextField
              autoFocus
              className={classes.formElement}
              label="Username"
              variant="outlined"
              error={usernameError}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              className={classes.formElement}
              label="Password"
              variant="outlined"
              type="password"
              error={passwordError}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
           <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    color="primary"
                  />
                }
                label="Remember Me"
              />
            </Grid>
            <Grid item>
              <Link href="#" color="primary">
                Forgot Password?
              </Link>
            </Grid>
          </Grid>

     
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <Button onClick={handleClose} className={classes.buttonCancel} color="primary">
            Cancel
          </Button>
          <Button type="submit" className={classes.button} onClick={handleSignIn} style={{margin: theme.spacing(1)}}>
            Sign In
          </Button>
        </div>

            





            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<FaGoogle />}
                  onClick={() => {
                    // handle sign in with Google
                  }}
                >
                  Sign In with Google
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<FaLinkedin />}
                  onClick={() => {
                    // handle sign in with LinkedIn
                  }}
                >
                  Sign In with LinkedIn
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>


        <DialogActions>
        <Grid container spacing={2} justify="center" className={classes.root}>
        <Typography component="h5" style={{margin: theme.spacing(2)}}>
            Don't have an account? 
            <Button
              type="submit"
              className={classes.button}
              onClick={handleSignUpClick}
              style={{height:'5vh', marginLeft:theme.spacing(2)}}
            >
              Sign Up
            </Button>
          </Typography>
          </Grid>
        </DialogActions>
        {showSignUp && <SignUpDialog onClose={handleSignUpClose} />}
      </Dialog>
    </>
  );
};






// Sign Up dialog box component
const SignUpDialog = ({ open, onClose, onSignUp  }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [timezone, setTimezone] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  const handleTimezoneChange = (event) => {
    setTimezone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };



  
  const handleClose = () => {
   $('#signUpDialog').hide()
  };

  

 

  return (
    <Dialog id="signUpDialog" open={true} onClose={onClose}  classes={{ paper: classes.dialog }}>
      <DialogTitle align="center">
      <AccountCircleIcon style={{ fontSize: '3rem', color: '#3f51b5'}} />
      <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
        </DialogTitle>
       <DialogContent align="center">
       <form className={classes.form} onSubmit={handleSubmit}>
  
       <Grid container spacing={4}>
       <Grid item xs={12} >
            <TextField
              required
              id="name"
              label="Name"
              variant="outlined"
              
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              required
              id="email"
              label="Email"
              variant="outlined"
              style={{marginLeft:'2rem'}}
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              id="company"
              label="Company"
              variant="outlined"
              
              value={company}
              onChange={handleCompanyChange}
            />
            <TextField
              required
              id="country"
              label="Country"
              variant="outlined"
              style={{marginLeft:'2rem'}}
              value={country}
              onChange={handleCountryChange}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="state"
              label="State"
              variant="outlined"
   
              
              value={state}
              onChange={handleStateChange}
            />
            <TextField
              required
              id="city"
              label="City"
              variant="outlined"
              style={{marginLeft:'2rem'}}
              value={city}
              onChange={handleCityChange}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="Zip"
              label="Zip"
              variant="outlined"

              
              value={zip}
              onChange={handleZipChange}
            />
            <TextField
              required
              id="timezone"
              label="Time Zone"
              variant="outlined"
 
              style={{marginLeft:'2rem'}}
              value={timezone}
              onChange={handleTimezoneChange}
            />
          </Grid>
    </Grid>

      </form>
      </DialogContent>
      <DialogActions>
      <Button id="backButton" onClick={handleClose} startIcon={<ArrowBackIcon />}>
        Back
      </Button>
      <div style={{ marginLeft: 'auto' }}>
        <Button id="cancelButton" onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button className={classes.button} id="signUpButton">Sign Up</Button>
      </div>
    </DialogActions>
    </Dialog>
  );
};






export default SignIn;
