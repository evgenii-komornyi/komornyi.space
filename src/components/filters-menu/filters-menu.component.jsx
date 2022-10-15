import React from 'react';

import { Button, Menu, MenuItem } from '@mui/material';

import { useAnchorEl } from '../../hooks/useAnchorEl';

export const FiltersMenu = ({
    buttonText,
    arrayMenus,
    resetFilters,
    applyFilters,
}) => {
    const [anchorEl, open, handleClick, handleClose] = useAnchorEl();

    return (
        <>
            <Button
                id="positioned-button"
                aria-controls="positioned-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {buttonText}
            </Button>
            <Menu
                id="positioned-menu"
                aria-labelledby="positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem
                    onClick={resetFilters}
                    sx={{ textTransform: 'uppercase' }}
                >
                    all
                </MenuItem>
                {arrayMenus.sort().map((keyword, i) => (
                    <MenuItem
                        key={i}
                        variant="outlined"
                        onClick={e => {
                            applyFilters(e);
                            handleClose();
                        }}
                        sx={{ textTransform: 'uppercase' }}
                    >
                        {keyword}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};
