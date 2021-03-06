import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {styled, alpha} from '@mui/material/styles';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import {AnimatePresence} from "framer-motion";
import {Routes, Route, useLocation, NavLink, Navigate} from "react-router-dom";
import {LessonsList} from "../Lessons/LessonsList/LessonsList";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {AddLessonForm} from "../AddLessonForm/AddLessonForm";
import {Lesson} from "../Lessons/Lesson/Lesson";
import {useAppDispatch, useAppSelector} from "../../redux/app/hooks";
import {Avatar, CircularProgress, Grid} from "@mui/material";
import {useEffect} from "react";
import {getLessonsAsync} from "../../redux/features/lessons-slice";

const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const drawerItemsList = [
    [
        {
            title: 'Lessons',
            link: '/lessons',
            icon: <PlayLessonIcon/>
        },
        {
            title: 'Single Lesson',
            link: '/single-lesson',
            icon: <PlayLessonIcon/>
        },
        {
            title: 'Add Lesson',
            link: '/add-lesson',
            icon: <AddCircleOutlineIcon/>
        }
    ],
    // [
    //   {
    //     title: 'Tags',
    //     icon: <MailIcon/>
    //   }
    // ]
]

export const Dashboard = (props: Props) => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(store => store.user.user)
    const lessons = useAppSelector(store => store.lessons.lessons)
    const location = useLocation()
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    useEffect(() => {
        dispatch(getLessonsAsync())
    }, [])

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    if (!user || !lessons) {
        return <CircularProgress/>
    }

    const drawer = (
        <div>
            <Toolbar/>
            {user && <Grid container spacing={1} sx={{padding: '20px 0'}}>
                <Grid item xs={12}>
                    <Avatar sx={{margin: '0 auto', width: 56, height: 56}}>{user.name[0].toUpperCase()}</Avatar>
                </Grid>
                <Grid item xs={12}>
                    <Typography gutterBottom sx={{typography: {sm: 'h5', xs: 'h6'}, textAlign: 'center'}}>
                        {user.name}
                    </Typography>
                </Grid>
            </Grid>}
            {drawerItemsList.map((list, index) => (
                <div key={index}>
                    <Divider/>
                    {
                        list.map((el, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton component={NavLink} to={el.link}>
                                    <ListItemIcon>
                                        {el.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={el.title}/>
                                </ListItemButton>
                            </ListItem>
                        ))

                    }
                </div>
            ))
            }
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar position="fixed"
                    sx={{
                        zIndex: {sm: '1201'},
                        // width: { sm: `calc(100% - ${drawerWidth}px)` },
                        // ml: { sm: `${drawerWidth}px` },
                    }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        Tutorial Notes
                    </Typography>
                    {location.pathname === '/lessons' && <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search???"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>}
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{flexGrow: 1, p: {xs: 1, sm: 3}, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
                <Toolbar/>
                <AnimatePresence exitBeforeEnter>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Navigate replace to="/lessons"/>}/>

                        <Route path={"/lessons"} element={<LessonsList lessons={lessons}/>}/>
                        <Route path={"/single-lesson"} element={<Lesson/>}/>
                        <Route path={"/add-lesson"} element={<AddLessonForm/>}/>
                        {/*<Route path={"/info"} element={<Info/>}/>*/}
                    </Routes>
                </AnimatePresence>

            </Box>
        </Box>
    );
}
