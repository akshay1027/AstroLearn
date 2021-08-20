import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useSnackbar } from 'notistack';
import api from '../config/axiosConfig';

const Authentication = () => {
    const location = useLocation();
    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();

    const fetchUserDetails = async () => {
        try {
            const res = await api.get('/api/businessUser');
            // dispatch(storeUser(res.data));
        } catch (error) {
            if (error?.response?.status === 400) {
                enqueueSnackbar(error.response.data.message, { variant: 'error', autoHideDuration: 3500 });
            } else {
                enqueueSnackbar('Something went wrong', { variant: 'error', autoHideDuration: 2000 });
            }
        }
    };

    useEffect(() => {
        // Check if user is logged in by checking if a token exists in local storage
        const token = localStorage.getItem('jwtToken');
        if (location.pathname.startsWith('/') || location.pathname.startsWith('/logout') || location.pathname.startsWith('/merchant-terms') || location.pathname.startsWith('/terms-and-use')) {
            return;
        }

        // Check if user object exists in redux, if not make an api call
        if (token) {
            // fetchUserDetails();
        }

        if (!token && location.pathname.startsWith('/app') === true) {
            // Redirect to login if user is not authenticated
            history.push('/signup');
        } else if (token && location.pathname.startsWith('/app') === false) {
            // Redirect to profile if user is authenticated, but is on the register or login page
            history.push('/app/profile');
        }
    }, [location]);

    return null;
};

export default Authentication;
