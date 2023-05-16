import React from 'react';
import { Typography, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PlayArrow } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(4),
    maxWidth: 'auto'
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(4),
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: '2rem',
    color: theme.palette.secondary.main,
  },
  iframeWrapper: {
    position: 'relative',
    paddingTop: '56.25%',
    height: 0,
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  }
}));

const VideosPage = () => {
  const classes = useStyles();

  const videos = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/-dxaM5GGBaI',
      title: 'Auto-fill ACORD Forms with JSON, Edit in the browser, ESigning, and more',
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/mioagc9aAAY',
      title: 'How to prefill ACORD 90 and get it E-Signed',
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/miwe3yrnK0M',
      title: 'Present a simpler Web Form on top of an ACORD Form',
    },
  ];

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h4" component="h1" className={classes.heading}>
          <PlayArrow className={classes.icon} />
          Related Videos
        </Typography>
        <Grid container spacing={4}>
          {videos.map((video) => (
            <Grid item xs={12} md={6} key={video.id}>
              <Typography  component="h2" style={{fontSize:'1rem'}} gutterBottom>
                {video.title}
              </Typography>
              <div className={classes.iframeWrapper}>
                <iframe
                  src={video.url}
                  className={classes.iframe}
                  allowFullScreen
                ></iframe>
              </div>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default VideosPage;
