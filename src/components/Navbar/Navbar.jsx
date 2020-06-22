import React from 'react';
import clsx from 'clsx';

// ROUTER
import { NavLink } from 'react-router-dom';

// ASSETS
import Logo from '../../assets/logo.png';

// // MATERIAL UI
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { CssBaseline, AppBar, Toolbar, Drawer, Divider, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LocalHospitalSharpIcon from '@material-ui/icons/LocalHospitalSharp';
import MapSharpIcon from '@material-ui/icons/MapSharp';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    toolbar: {
        background: "#36d4c1",
        display: "flex",
        justifyContent: "space-between"
    },
    logoButton: {
        marginRight: theme.spacing(2),
        padding: 6,
    },
    logoImg: {
        width: 50,
        height: 50,
        filter: "brightness(0) invert(1)"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    menuLink: {
        padding: "20px",
        color: "black",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        '& > *': {
            marginLeft: theme.spacing(5),
            color: "black",
            textDecoration: "none"
        },
        '&:focus, &:hover': {
            color: "white",
            background: "#36d4c1",
            '& .MuiSvgIcon-root': {
                color: "white"
            }
        },
        '& .MuiSvgIcon-root': {
            marginRight: 10
        }
    },
    activeMenuLink: {
        color: "white",
        background: "#36d4c1",
        '& .MuiSvgIcon-root': {
            color: "white"
        }
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar className={classes.toolbar}>
                    <NavLink to="/" exact>
                        <IconButton className={classes.logoButton} edge="start" color="inherit" aria-label="menu">
                            <img className={classes.logoImg} src={Logo} alt="logo" />
                        </IconButton>
                    </NavLink>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                        style={{ padding: 6, marginRight: 0 }}
                    >
                        <MenuIcon style={{ fontSize: 40 }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <Typography variant="button">
                    <NavLink to="/" exact className={classes.menuLink} activeClassName={classes.activeMenuLink}>
                        <LocalHospitalSharpIcon />Status</NavLink>
                    <Divider />
                    <NavLink to="/Map" className={classes.menuLink} activeClassName={classes.activeMenuLink}>
                        <MapSharpIcon />Map</NavLink>
                    <Divider />
                    <NavLink to="/About" className={classes.menuLink} activeClassName={classes.activeMenuLink}>
                        <InfoSharpIcon />About</NavLink>
                </Typography>
                <Divider />
            </Drawer>
        </div>
    );
}

export default Navbar;