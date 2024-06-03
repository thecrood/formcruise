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
                    Retrieve images and text dynamically from a server upon button click.
                    </Typography>

                    <Typography variant="h6" component="h3" style={{ fontSize: '1rem',}} gutterBottom>
                    Retrieve images and text from a server upon button click in the browser for dynamic content. This process triggers a server request, fetching the specified data, enhancing user experience with real-time updates and customization. It enables adaptability to changing requirements, catering to diverse user needs efficiently. This approach promotes scalability, flexibility, and responsiveness, enhancing usability.
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
                <Typography variant="h4" component="h1" style={{ color: '#078dc1', marginBottom:'4%' }}>Auto Fetch Images</Typography>

                    <Typography variant="h6" align="justify" style={{ fontSize: '1rem'}}>
                    Auto-fetching images involves a mechanism where images are automatically retrieved from a server or external source without explicit user action. This process typically occurs in the background, triggered by predefined events or intervals. By implementing auto-fetching, applications can continuously update their content, ensuring that users have access to the latest information without manual intervention. This enhances user experience by providing fresh and relevant visual content, improving engagement and retention. Additionally, auto-fetching can optimize resource utilization by fetching images preemptively, reducing load times and improving overall performance.
                    </Typography>
                </div>
        
                    <img src={Home2} alt="Your image description" align='center' className={classes.imageA} />

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

                <Typography variant="h4" component="h1" style={{ color: '#078dc1', marginBottom:'4%' }}>Auto Fetch Text</Typography>

                    <Typography variant="h6" align="justify" style={{ fontSize: '1rem'}}>
                    Auto-fetching text involves automatically retrieving text content from a server or external source without user intervention. This process occurs in the background, often triggered by specific events or intervals. By implementing auto-fetching, applications can continuously update their text content, ensuring users receive the latest information seamlessly. This enhances user experience by providing fresh, relevant content and improving engagement. Additionally, auto-fetching can optimize performance by preloading text, reducing wait times, and ensuring the application remains responsive. This approach is particularly useful for news updates, live feeds, and dynamic content, maintaining a consistent flow of information.
                     </Typography>
                </div>
        
                <img src={Home4} alt="Your image description" align='center' className={classes.imageC} />

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
                    You can use our service to auto-fetch text and images via the user interface or, if you prefer, through our REST API for complete integration. Our REST API is free of cost, with no extra licenses or charges. You can use any programming language to integrate with our REST API, enabling you to perform all operations, including fetching new text and images, providing metadata information, sending links to external users, and downloading the fetched content.
                    </Typography>
                </div>
        

                    </div>

            </motion.div>

            <ScrollTop />

        </>

    );
}

export default Home;
