import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, IconButton } from '@material-ui/core';
import { Link } from '@mui/material';
import { LinkedIn, Twitter, YouTube, GitHub } from '@mui/icons-material';


const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: 0,
    width: '100%',
    backgroundColor: '#3f51b5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
  <Container maxWidth="sg">
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ul style={{ listStyleType: 'none', margin: 0 }}>
        <li style={{ marginRight: '2rem' }}>
          <Link
            href="/blogs"
            variant="body2"
            color="textSecondary"
            align="left"
            style={{ color: 'white' }}
          >
            About Company
          </Link>
        </li>
        <li style={{ marginRight: '2rem' }}>
          <Link
            href="#"
            variant="body2"
            color="textSecondary"
            align="left"
            style={{ color: 'white' }}
          >
            Support and Maintenance
          </Link>
        </li>
        <li>
          <Link
            href="#"
            variant="body2"
            color="textSecondary"
            align="left"
            style={{ color: 'white' }}
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>


      <div style={{ display: 'flex', alignItems: 'center', marginRight:"70px" }}>
            <IconButton href="https://www.github.com/thecrood">
              <GitHub style={{ color: 'white' }} />
            </IconButton>
            <IconButton href="https://www.linkedin.com/rohit-chaudhary-038171158/">
              <LinkedIn style={{ color: 'white' }} />
            </IconButton>
            <IconButton href="#">
              <Twitter style={{ color: 'white' }} />
            </IconButton>
            <IconButton href="#">
              <YouTube style={{ color: 'white' }} />
            </IconButton>
          </div>




      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ listStyleType: 'none', margin: 0 }}>
          <li style={{ marginRight: '2rem' }}>
            <Link
              href="#"
              variant="body2"
              color="textSecondary"
              align="right"
              style={{ color: 'white' }}
            >
              Photo Gallery
            </Link>
          </li>
          <li style={{ marginRight: '2rem' }}>
            <Link
              href="/contactus"
              variant="body2"
              color="textSecondary"
              align="right"
              style={{ color: 'white' }}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="#"
              variant="body2"
              color="textSecondary"
              align="right"
              style={{ color: 'white' }}
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </div>
    
    <div style={{ flexGrow: 1 }}></div>
    <p align="center" style={{ color: 'white', marginBottom: 0 }}>
      © 2024 Compania mea
    </p>
  </Container>
</footer>

  );
}

export default Footer;