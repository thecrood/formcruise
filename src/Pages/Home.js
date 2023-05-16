import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Home1 from "../Images/home1.png"
import Home2 from "../Images/home2.png"
import Home3 from "../Images/home3.png"
import Home4 from "../Images/home4.png"
import { Typography, Button } from '@material-ui/core';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollTop from "../Components/BacktoTop"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(215, 244, 255, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        borderBottomLeftRadius: '50% 80px',
        borderBottomRightRadius: '50% 0px',
    },
    image: {
        width: '38%',
        height: '60%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginRight: '6rem',
        animation: '$slideInRight 1s ease-in-out forwards',
    },
    card: {
        width: '50%',
        height: '60%',
        margin: '6rem',
        animation: '$slideInLeft 1s ease-in-out forwards',
    },
    '@keyframes slideInRight': {
        '0%': {
            transform: 'translateX(100%)'
        },
        '100%': {
            transform: 'translateX(0)'
        }
    },
    '@keyframes slideInLeft': {
        '0%': {
            transform: 'translateX(-100%)'
        },
        '100%': {
            transform: 'translateX(0)'
        }
    },
    button: {
        marginTop: theme.spacing(14),
        backgroundColor: 'transparent',
        border: '2px solid #078dc1',
        color: '#078dc1',
        padding: '8px 16px',
        transition: 'background-color 0.2s ease-in-out',
        '&:hover': {
            backgroundColor: '#078dc1',
            color: '#fff',
            cursor: 'pointer'
        }
    },
    rootA: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    cardA: {
        width: '50%',
        height: '60%',
        margin: '6%',
    },
    imageA: {
        padding: '12% 15%'
    },
    imageB: {
        height: '40vh',
        padding: '10% 15%'
    },
    imageC: {
        height: '30vh',
        padding: '11% 11%'
    }

}));



function Home() {
    const classes = useStyles();

    const [ref1, inView1] = useInView({
        threshold: 0.1,
        triggerOnce: false,
      });


    const [ref2, inView2] = useInView({
        threshold: 0.1,
        triggerOnce: false,
      });


      const [ref3, inView3] = useInView({
        threshold: 0.1,
        triggerOnce: false,
      });
    
      const variants = {
        hidden: {
          y: 50,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        },
      };
    




    return (
        <>
            {/* div one */}
            <div className={classes.root}>
                <div className={classes.card}>
                    <Typography variant="h3" component="h1" style={{ color: '#078dc1', fontWeight: 'bold', fontSize: '2.7rem' }} gutterBottom>
                        Autofill ACORD or other Forms in the Browser
                    </Typography>

                    <Typography variant="h6" component="h3" style={{ fontSize: '1rem',}} gutterBottom>
                        Autofill PDF forms with data, Edit in the browser, Get forms E-Signed, Save PDF & data back to your system. Do all of this with REST API without coming over to the UI if you prefer so.
                    </Typography>

                    <Button className={classes.button}> Get Strated</Button>
                </div>

                <img src={Home1} alt="Your image description" className={classes.image}/>
            </div>


            {/* div two */}
            <motion.div
                ref={ref1}
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                variants={variants}
            >
                <Typography variant="h4" component="h1" align='center' style={{ marginTop: '2rem' }}>
                    Feature Rich
                </Typography>

                <div className={classes.rootA}>
                <div className={classes.cardA}>
                <Typography variant="h4" component="h1" style={{ color: '#078dc1', marginBottom:'4%' }}>Autofill ACORD Forms</Typography>

                    <Typography variant="h6" align="justify" style={{ fontSize: '1rem'}}>
                    It has been a difficult problem to autofill ACORD forms and to bring them online for a long time. Form Cruise solves this problem. We are an ACORD Member so if you are an agency you can use the ACORD forms on our behalf. If you are not an agency you can still use our platform but you need to have the ACORD Forms license. We do provide all the latest forms out of the box but you can also upload any form (only once), and start using it. You can have a button in your system on Contact, Account, or Policy to launch the form, prefill it with data from your system and email it to a customer to complete or Sign. Form Cruise makes it easy to generate Insurance Certificates and send them to your clients with the click of a button. In addition, fill any supplementary forms as easily.
                    </Typography>
                </div>
        
                    <img src={Home2} alt="Your image description" align='center' className={classes.imageA} />

                    </div>

            </motion.div>





            {/* div three */}
            <motion.div
                ref={ref2}
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={variants}
            >

                <div className={classes.rootA} >
                <img src={Home3} alt="Your image description" align='center' className={classes.imageB} />

                <div className={classes.cardA}>

                <Typography variant="h4" component="h1" style={{ color: '#078dc1', marginBottom:'4%' }}>Seamless integration through REST API</Typography>

                    <Typography variant="h6" align="justify" style={{ fontSize: '1rem'}}>
                    Form Cruise can be used via the user interface or if you prefer use our REST API for complete integration. Our REST API is provided free of cost without any extra license or charges. You can use any programming language to integrate with Form Cruise REST API, which lets you perform all the operations including but not limited to uploading a new form, prefilling it with JSON from your system, providing the signatory information, sending form links to external users, and downloading the signed or filled PDF.                    </Typography>
                </div>
        

                    </div>

            </motion.div>




            {/* div four */}
            <motion.div
                ref={ref3}
                initial="hidden"
                animate={inView3 ? "visible" : "hidden"}
                variants={variants}
            >

                <div className={classes.rootA} >
                <div className={classes.cardA}>

                <Typography variant="h4" component="h1" style={{ color: '#078dc1', marginBottom:'4%' }}>Form Cruise works for any Industry</Typography>

                    <Typography variant="h6" align="justify" style={{ fontSize: '1rem'}}>
                    If you are not from the insurance industry but use editable PDF forms to collect data but you are not able to get these forms filled online then your problem is solved. You can publish your PDF form on Form Cruise, it will be displayed in the browser, you can send the link to your users, they can fill the data, submit the form, and the populated data is sent back to your system in the form of JSON, as well as PDF. You can then receive this JSON and save it in your system. Not only that you can also prefill some of the form fields to initialize the form when the user will open the form.                   
                     </Typography>
                </div>
        
                <img src={Home4} alt="Your image description" align='center' className={classes.imageC} />

                    </div>

            </motion.div>

            <ScrollTop />

        </>

    );
}

export default Home;
