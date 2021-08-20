import React, { lazy, Suspense } from 'react';
import {
    Box, LinearProgress,
    createStyles, makeStyles
} from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Authentication from './components/authentication';

const MainAppBar = lazy(() => import('./components/mainAppBar'));

const HomeScreen = lazy(() => import('./screens/homeScreen'));
const SignUpScreen = lazy(() => import('./screens/signUpScreen'));
const SignInScreen = lazy(() => import('./screens/signInScreen'));
// const LogInScreen = lazy(() => import('./screens/logInScreen'));
// const RegisterScreen = lazy(() => import('./screens/registerScreen'));
// const Logout = lazy(() => import('./components/logout'));

const useStyles = makeStyles((theme) =>
    createStyles({
        toolbar: theme.mixins.toolbar
    })
);

const App = () => {
    const classes = useStyles();
    return (
        <Router>
            <Route path='/' component={Authentication} />
            <Box className={classes.toolbar}>
                <Suspense fallback={<LinearProgress />}>
                    <Route path='/' component={MainAppBar} />
                    <Route path='/' component={HomeScreen} exact />
                    <Route path='/signup' component={SignUpScreen} exact />
                    <Route path='/signin' component={SignInScreen} exact />
                    {/* <Route path='/login' component={LogInScreen} />
                        <Route path='/register' component={RegisterScreen} />
                        <Route path='/pages' component={PagesScreen} />
                        <Route path='/logout' component={Logout} exact /> */}
                    {/* App Routes */}
                    {/* <Route path='/app/dashboard' component={DashboardScreen}/> */}
                </Suspense>
            </Box>
        </Router>
    );
};

export default App;
