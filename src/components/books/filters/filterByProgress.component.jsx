import React, { useState } from 'react';
import { Grid, Button, Menu, MenuItem } from '@mui/material';

const FilterByProgress = ({
    data,
    setBooks,
    filterBooks,
    filter,
    setFilter,
    setYear,
}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const progressUnique = new Set();
    data.map(book => progressUnique.add(book.progress));

    const handleProgress = e => {
        e.preventDefault();
        const { progress } = e.target.dataset;
        setBooks(filterBooks(progress));
        setFilter(progress);
        setYear(null);
        handleClose();
    };

    const handleAllBooks = () => {
        setBooks(data);
        setFilter(null);
        setYear(null);
        handleClose();
    };

    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            sx={{ textAlign: 'center' }}
        >
            <Button
                id="positioned-button"
                aria-controls="positioned-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Filter by progress {filter !== null && `: ${filter}`}
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
                    onClick={() => handleAllBooks()}
                    sx={{ textTransform: 'uppercase' }}
                >
                    all
                </MenuItem>
                {[...progressUnique].map((progress, index) => (
                    <MenuItem
                        key={index}
                        variant="outlined"
                        data-progress={progress}
                        onClick={e => handleProgress(e)}
                        sx={{ textTransform: 'uppercase' }}
                    >
                        {progress}
                    </MenuItem>
                ))}
            </Menu>
        </Grid>
    );
};

export default FilterByProgress;
