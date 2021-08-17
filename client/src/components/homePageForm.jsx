import {
    Box, FilledInput, FormControl, FormHelperText, InputLabel, Snackbar,
    Grid, SnackbarContent, Typography, Button, createStyles, makeStyles
} from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => {
    return createStyles({
        button1: {
            backgroundColor: `${theme.palette.fourth.main}`,
            color: `${theme.palette.primary.main}`,
            marginTop: '20px',
            padding: '12px 30px',
            fontWeight: 600,
            fontSize: '17px',
            width: '120px'
        }
    });
}
);

export const LandingPageForm = (params) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setemail] = useState('');
    const [emailError, setemailError] = useState('');
    const [message, setmessage] = useState('');
    const [snackOpen, setSnackOpen] = useState(false);

    const validateForm = () => {
        let errorFlag = false;

        if (name.trim() === '') {
            setNameError('Please enter a valid name');
            errorFlag = true;
        }

        const atposition = email.trim().indexOf('@');
        const dotposition = email.trim().lastIndexOf('.');
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.trim().length) {
            setemailError('Please enter a valid email Id');
            errorFlag = true;
        }

        if (errorFlag) {
            throw new Error('Form validation failed');
        }
    };

    const formSubmit = async () => {
        try {
            validateForm();

            const bodyFormData = new FormData();
            bodyFormData.append('name', name.trim());
            bodyFormData.append('email', email.trim());
            bodyFormData.append('message', message.trim());

            await axios({
                method: 'post',
                url: 'http://localhost:5001/',
                data: {
                    name: name.trim(),
                    email: email.trim(),
                    message: message.trim()
                }
            });
            setSnackOpen(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Grid container maxWidth='lg' style={{ justifyContent: 'center', marginBottom: '50px' }}>
            <Grid item xs={12} sm={12} md={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <>
                    <Typography style={{ fontWeight: 800, fontSize: '35px', textAlign: 'center' }}>
                        Contact Us For<br /> More Queries
                    </Typography>
                </>
            </Grid>
            <Grid item xs={10} sm={10} md={1}></Grid>
            <Grid item xs={10} sm={10} md={5}>
                <Box style={{ display: 'flex', flexDirection: 'column' }}>
                    <FormControl variant="filled" style={{ margin: '16px 0px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)' }} >
                        <InputLabel htmlFor="form-name" style={{ background: 'none', color: '#31343c', fontWeight: 500 }} id='form-navbar'>Name</InputLabel>
                        <FilledInput
                            id="form-name"
                            aria-label="Name"
                            error={nameError !== ''}
                            value={name}
                            style={{ backgroundColor: '#fafafa', fontSize: '16px', color: '#FFFFFF' }}
                            onChange={(e) => {
                                setNameError('');
                                setName(e.target.value);
                            }}
                        />
                        <FormHelperText error={nameError !== ''} style={{ backgroundColor: '#fafafa', margin: 0, padding: '0px 8px' }} >{nameError}</FormHelperText>
                    </FormControl>

                    <FormControl variant="filled" style={{ margin: '16px 0px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)' }}>
                        <InputLabel htmlFor="form-email" style={{ background: 'none', color: '#31343c', fontWeight: 500 }}>Email</InputLabel>
                        <FilledInput
                            id="form-gnail"
                            aria-label="Email"
                            error={emailError !== ''}
                            value={email}
                            style={{ backgroundColor: '#fafafa', fontSize: '16px', color: '#FFFFFF' }}
                            onChange={(e) => {
                                setemailError('');
                                setemail(e.target.value);
                            }}
                        />
                        <FormHelperText error={emailError !== ''} style={{ backgroundColor: '#fafafa', margin: 0, padding: '0px 8px' }} >{emailError}</FormHelperText>
                    </FormControl>

                    <FormControl variant="filled" style={{ margin: '16px 0px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)' }} >
                        <InputLabel htmlFor="form-message" style={{ background: 'none', color: '#31343c', fontWeight: 500 }}>Message</InputLabel>
                        <FilledInput
                            id="form-message"
                            aria-label="Message"
                            multiline
                            value={message}
                            style={{ backgroundColor: '#fafafa', fontSize: '16px', height: '160px', display: 'flex', flexDirection: 'column', color: '#FFFFFF' }}
                            onChange={(e) => {
                                setmessage(e.target.value);
                            }}
                        />
                        <FormHelperText error={message.length > 5000} style={{ backgroundColor: '#fafafa', margin: 0, padding: '0px 8px', color: '#31343c', fontWeight: 500 }} >{`${message.length}/5000`}</FormHelperText>
                    </FormControl>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <Button className={classes.button1} size='large' variant='contained' onClick={formSubmit} >Submit</Button>
                    </Box>
                </Box>

            </Grid>
            {/* <Snackbar
                open={snackOpen}
                autoHideDuration={2000}
                onClose={(e) => setSnackOpen(false)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
            >
                <SnackbarContent className='form-submit' style={{
                    backgroundColor: '#fafafa', opacity: '0.8', flexDirection: 'row', justifyContent: 'center'
                }}
                message={<div style={{ display: 'flex' }}><h2 className='form-message' style={{ backgroundColor: '#fafafa', margin: '-10px', color: 'white' }}>Successfully Submitted</h2></div>}
                />
            </Snackbar> */}
        </Grid>
    );
};

export default LandingPageForm;
