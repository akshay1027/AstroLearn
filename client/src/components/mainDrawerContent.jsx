import {
    Box, Divider, List, ListItem, ListItemIcon, ListItemText,
    createStyles, makeStyles
} from '@material-ui/core';

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
// import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
// import DescriptionIcon from '@material-ui/icons/Description';
// import PagesIcon from '@material-ui/icons/Pages';

const useStyles = makeStyles((theme) => {
    return createStyles({
        toolbar: theme.mixins.toolbar,
        navLink: {
            display: 'flex',
            color: `${theme.palette.third.main}`,
            borderLeft: `4px solid ${theme.palette.fourth.main}`,
            textDecoration: 'none'
        },
        activeLink: {
            color: `${theme.palette.secondary.main}`,
            backgroundColor: `${theme.palette.secondary.main}15`,
            fontWeight: 500,
            borderLeft: `4px solid ${theme.palette.secondary.main}`
        },
        activeIcon: {
            color: `${theme.palette.secondary.main}`
        },
        icon: {
            color: `${theme.palette.third.main}`
        }
    });
}
);

const MainDrawerContent = ({ isOpen, setIsOpen }) => {
    const classes = useStyles();
    const { pathname } = useLocation();

    return (
        <Box>
            <div className={classes.toolbar} />
            <Divider />
            <List component='div'>
                <NavLink to="/app/dashboard" className={classes.navLink} activeClassName={classes.activeLink}>
                    <ListItem button onClick={e => setIsOpen(!isOpen)}>
                        <ListItemIcon className={pathname.startsWith('/app/dashboard') ? classes.activeIcon : classes.icon}>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText Typography primary="Dashboard" style={{ fontWeight: 'inherit !important' }}/>
                    </ListItem>
                </NavLink>
                <NavLink to="/app/tutors" className={classes.navLink} activeClassName={classes.activeLink}>
                    <ListItem button onClick={e => setIsOpen(!isOpen)}>
                        <ListItemIcon className={pathname.startsWith('/app/tutors') ? classes.activeIcon : classes.icon}>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText Typography primary="Tutors" style={{ fontWeight: 'inherit !important' }}/>
                    </ListItem>
                </NavLink>
            </List>
        </Box>
    );
};

export default MainDrawerContent;
