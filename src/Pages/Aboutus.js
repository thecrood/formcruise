import React from 'react';
import { Typography, Container, Grid, Paper, Card, CardHeader, Avatar, CardContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main:{
    backgroundColor: 'rgba(215, 244, 255, 1)',
    width: '100%',
    height: '100vh',
    borderBottomLeftRadius: '50% 0px',
    borderBottomRightRadius: '50% 80px',
  },
  root: {
    marginBottom: theme.spacing(4),
  },
  heading: {
    fontWeight: 'bold',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(2),
  },
  content: {
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
  },
  card: {
    marginBottom: theme.spacing(4),
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'transform 0.2s ease-in-out',
    }
  },
  avatar: {
    backgroundColor: "#3f51b5",
  },
  button: {
      alignItems:'center',
      backgroundColor: '#078dc1',
      border: '2px solid #078dc1',
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

const AboutUsPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
    <Container maxWidth="md" className={classes.root}>
      <div elevation={3} className={classes.paper}>
        <Typography variant="h4" component="h1" className={classes.heading}>
          About Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Our Story" className={classes.avatar}>
                    S
                  </Avatar>
                }
                title="Our Story"
              />
              <CardContent>
                <Typography variant="body1" component="p" className={classes.content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget purus auctor,
                  tristique ex sed, commodo est. In faucibus eget tellus vel bibendum. Fusce gravida
                  nisl nibh, eu iaculis tellus vehicula sed.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Our Mission" className={classes.avatar}>
                    M
                  </Avatar>
                }
                title="Our Mission"
              />
              <CardContent>
                <Typography variant="body1" component="p" className={classes.content}>
                  Vestibulum varius mi non eros volutpat, at convallis massa varius. Nulla facilisi.
                  Vivamus pulvinar ipsum in augue pulvinar, vel bibendum mi malesuada. Nunc non nunc
                  rhoncus, dapibus nunc ut, scelerisque nisi.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Button variant="contained" target="_blank" href="https://winsurtech.com/" color="primary" className={classes.button}>
          Learn More
        </Button>
      </div>
    </Container>
    </div>
  );
};

export default AboutUsPage;
