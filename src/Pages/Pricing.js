import { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import MoneyIcon from '@mui/icons-material/Money';

const useStyles = makeStyles((theme) => ({
    hero: {
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(215, 244, 255, 1)',
        borderBottomLeftRadius: '50% 0px',
        borderBottomRightRadius: '50% 80px',
        textAlign:'center'
      },
  card: {
    maxWidth: 345,
    margin: '0 16px',
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'transform 0.2s ease-in-out',
    },
  },
  cardContent: {
    padding: '16px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '16px',
  },
  selectedButton: {
    backgroundColor: '#1976d2',
    color: 'white',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    marginBottom: '30px',
  }
}));

const plans = [
  {
    title: 'Basic Plan',
    prices: {
      monthly: 10,
      halfYearly: 50,
      yearly: 100,
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Standard Plan',
    prices: {
      monthly: 20,
      halfYearly: 100,
      yearly: 200,
    },
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Premium Plan',
    prices: {
      monthly: 30,
      halfYearly: 150,
      yearly: 300,
    },
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

const theme = createTheme();

const PricingPage = () => {
  const classes = useStyles();
  const [duration, setDuration] = useState('monthly');

  const handleDurationClick = (duration) => {
    setDuration(duration);
  };

  return (
    <div className={classes.hero}>
        <MoneyIcon style={{ fontSize: '3rem', color: '#3f51b5', marginTop:theme.spacing(12)}} />
        <Typography style={{color:"black"}} align='center' variant="h4" gutterBottom>
                Pricing
              </Typography>
   <div className={classes.buttonContainer}>
        <Button
          className={duration === 'monthly' ? classes.selectedButton : ''}
          onClick={() => handleDurationClick('monthly')}
          variant="outlined"
        >
          Monthly
        </Button>
        <Button
          className={duration === 'halfYearly' ? classes.selectedButton : ''}
          onClick={() => handleDurationClick('halfYearly')}
          variant="outlined"
        >
          Half-Yearly
        </Button>
        <Button
          className={duration === 'yearly' ? classes.selectedButton : ''}
          onClick={() => handleDurationClick('yearly')}
          variant="outlined"
        >
          Yearly
        </Button>
  </div>

  <div style={{ display: 'flex', justifyContent: 'center' }}>
    {plans.map((plan, index) => (
      <Card key={index} className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" align="center">
            {plan.title}
          </Typography>
          <Typography variant="h4" align="center">
            {plan.prices[duration]}
          </Typography>
          <Typography variant="subtitle1" align="center">
            {plan.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button variant="contained" style={{backgroundColor:"#1976d2", color:"#ffffff"}}>
            Buy Now
          </Button>
        </CardActions>
      </Card>
    ))}
  </div>
</div>

  
  );
};

export default PricingPage;