import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Toolbar,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    IconButton,
} from '@mui/material';
import {
    Apps,
    ChevronLeft,
    ChevronRight,
    AccountCircleTwoTone,
    HomeTwoTone,
    WorkTwoTone,
    LibraryBooksTwoTone,
    LibraryMusicTwoTone,
    ContactMailTwoTone,
} from '@mui/icons-material';

import {
    drawerWidth,
    DrawerHeader,
    AppBar,
    LinkContainer,
} from './header.styles';
import useMenuStore from '../../app/menuStore';

export const Header = () => {
    const theme = useTheme();

    const { isOpen, setIsOpen } = useMenuStore();

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" open={isOpen}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={setIsOpen}
                        edge="start"
                        sx={{ mr: 2, ...(isOpen && { display: 'none' }) }}
                    >
                        <Apps />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        MENU
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={isOpen}
            >
                <DrawerHeader>
                    <IconButton onClick={setIsOpen}>
                        {theme.direction === 'rtl' ? (
                            <ChevronRight />
                        ) : (
                            <ChevronLeft />
                        )}
                    </IconButton>
                </DrawerHeader>
                <List>
                    <LinkContainer to="/" onClick={setIsOpen}>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeTwoTone />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </LinkContainer>
                </List>
                <Divider />
                <List>
                    <LinkContainer to="/about" onClick={setIsOpen}>
                        <ListItem button>
                            <ListItemIcon>
                                <AccountCircleTwoTone />
                            </ListItemIcon>
                            <ListItemText primary="About me" />
                        </ListItem>
                    </LinkContainer>
                </List>
                <List>
                    <LinkContainer to="/projects" onClick={setIsOpen}>
                        <ListItem button>
                            <ListItemIcon>
                                <WorkTwoTone />
                            </ListItemIcon>
                            <ListItemText primary="Projects" />
                        </ListItem>
                    </LinkContainer>
                </List>
                <Divider />
                <List>
                    <LinkContainer to="/library" onClick={setIsOpen}>
                        <ListItem button>
                            <ListItemIcon>
                                <LibraryBooksTwoTone />
                            </ListItemIcon>
                            <ListItemText primary="Books library" />
                        </ListItem>
                    </LinkContainer>
                </List>
                <List>
                    <LinkContainer to="/music" onClick={setIsOpen}>
                        <ListItem button>
                            <ListItemIcon>
                                <LibraryMusicTwoTone />
                            </ListItemIcon>
                            <ListItemText primary="Music library" />
                        </ListItem>
                    </LinkContainer>
                </List>
                <Divider />
                <List>
                    <LinkContainer to="/contacts" onClick={setIsOpen}>
                        <ListItem button>
                            <ListItemIcon>
                                <ContactMailTwoTone />
                            </ListItemIcon>
                            <ListItemText primary="Contacts" />
                        </ListItem>
                    </LinkContainer>
                </List>
            </Drawer>
        </Box>
    );
};
