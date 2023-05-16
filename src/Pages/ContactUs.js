import React, { useState } from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { createTheme } from '@mui/material/styles';
import { Email } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      backgroundColor: 'rgba(215, 244, 255, 1)',
      margin: theme.spacing(1),
      borderBottomLeftRadius: '50% 80px',
      borderBottomRightRadius: '50% 0px',
    },
    '& .MuiButton-root': {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  inputRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    width: '10vw',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  inputCol: {
    flex: 1,
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
    }
}));

const theme = createTheme();

const ContactUsForm = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className={classes.form}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Grid container spacing={2} style={{marginTop:theme.spacing(10)}}>
        <Grid item xs={12} className={classes.inputRow}>
        <Email style={{ fontSize: '3rem', color: '#3f51b5'}} />
          </Grid>
          <Grid item xs={12} className={classes.inputRow}>
          <Typography variant="h5" align="center" gutterBottom>
          Contact Me
        </Typography>
          </Grid>
 
          <Grid item xs={12} className={classes.inputRow}>
            <TextField
              required
              id="name"
              label="Name"
              variant="outlined"
              className={classes.inputCol}
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              required
              id="email"
              label="Email"
              variant="outlined"
              className={classes.inputCol}
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12} className={classes.inputRow}>
            <TextField
              id="company"
              label="Company"
              variant="outlined"
              className={classes.inputCol}
              value={company}
              onChange={handleCompanyChange}
            />
            <TextField
              required
              id="subject"
              label="Subject"
              variant="outlined"
              className={classes.inputCol}
              value={subject}
              onChange={handleSubjectChange}
            />
          </Grid>
          <Grid item xs={12} className={classes.inputRow}>
            <TextField
              required
              id="message"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={message}
              onChange={handleMessageChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              className={classes.button}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ContactUsForm;
