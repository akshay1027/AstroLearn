import React, { lazy } from 'react';
import { Box, Typography, Container, createStyles, makeStyles, Grid, Button } from '@material-ui/core';
import tutor from '../assests/tutor.svg';
import HomePageForm from '../components/homePageForm';

const useStyles = makeStyles((theme) => {
    return createStyles({
        titleBackground: {
            backgroundColor: `${theme.palette.secondary.main}60`
        },
        button1: {
            backgroundColor: `${theme.palette.primary.main}`,
            marginTop: '20px',
            padding: '15px 30px',
            fontWeight: 600,
            fontSize: '17px'
        },
        svg: {
            height: '300px',
            width: 'auto'
        }
    });
}
);

const homeScreen = () => {
    const classes = useStyles();
    return (
        <Box width='100%'>
            <Box py={10}>
                <Grid container maxWidth='lg' style={{ justifyContent: 'center' }}>
                    <Grid item sm={12} md={5} className={classes.titleBackground} style={{ margin: '0px 10px' }}>
                        <Box py={10} px={2} display="flex" flexDirection='column' alignItems= 'center' justifyContent='center'>
                            <Typography style={{ fontWeight: 800, fontSize: '40px', textAlign: 'center' }}>
                                AstroLearn Is Revolutionising How People Learn.
                            </Typography>
                            <Button className={classes.button1} size='large' variant='contained'>
                                Check Out Tutors
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Box display='flex' alignItems= 'center' justifyContent= 'center'>
                            <img src={tutor} className={classes.svg}/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <HomePageForm />
            </Box>
        </Box>
    );
};

export default homeScreen;
