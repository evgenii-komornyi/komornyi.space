import React from 'react';
import {
    Typography,
    AppBar,
    Toolbar,
    Box,
    Stack,
    Chip,
    Button,
    Menu,
    MenuItem,
} from '@mui/material';
import { CopyrightTwoTone, GitHub } from '@mui/icons-material';

import { useMediaQuery } from '@mui/material';

import { useAnchorEl } from '../../hooks/useAnchorEl';

const techStack = ['MongoDB', 'ExpressJS', 'NodeJS', 'ReactJS', 'MaterialUI'];

export const Footer = () => {
    const matches = useMediaQuery('(min-width: 769px)');

    const [anchorEl, open, handleClick, handleClose] = useAnchorEl();

    return (
        <AppBar
            position="fixed"
            color="primary"
            sx={{ top: 'auto', bottom: 0 }}
        >
            <Toolbar>
                <Typography sx={{ fontSize: '14px' }}>
                    <CopyrightTwoTone
                        fontSize="small"
                        sx={{ mr: 1, position: 'relative', top: '5px' }}
                    />{' '}
                    {`${new Date().getFullYear()} Evgenii Komornyi. All rights
                        reserved.`}
                </Typography>
                <Box sx={{ textAlign: 'center', flexGrow: 1 }}>
                    <Button
                        href="https://github.com/evgenii-komornyi/komornyi.space"
                        target="_blank"
                        size="small"
                        variant="outlined"
                        color="warning"
                        startIcon={<GitHub />}
                    >
                        github
                    </Button>
                </Box>
                {matches ? (
                    <>
                        <Typography>Technologies stack: </Typography>
                        <Stack
                            direction={{
                                xs: 'column',
                                sm: 'row',
                                md: 'row',
                                lg: 'row',
                            }}
                            sx={{ ml: 1 }}
                        >
                            {techStack.map((technology, index) => (
                                <Chip
                                    key={index}
                                    variant="outlined"
                                    label={technology}
                                    size="small"
                                />
                            ))}
                        </Stack>
                    </>
                ) : (
                    <>
                        <Button
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Tech
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {techStack.map((technology, index) => (
                                <MenuItem key={index}>{technology}</MenuItem>
                            ))}
                        </Menu>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};
