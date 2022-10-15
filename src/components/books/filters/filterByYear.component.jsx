import React from 'react';
import { Grid, Button, Menu, MenuItem } from '@mui/material';
import { useAnchorEl } from '../../../hooks/useAnchorEl';

const FilterByYear = ({
    data,
    setBooks,
    filterBooks,
    filter,
    setFilter,
    setProgress,
}) => {
    const [anchorEl, open, handleClick, handleClose] = useAnchorEl();

    const yearsUnique = new Set();
    data.map(
        book =>
            book.year &&
            yearsUnique.add(book.year > 2016 ? book.year : 'earlier')
    );

    const handleYear = e => {
        e.preventDefault();
        const { progress, year } = e.target.dataset;
        setBooks(filterBooks(progress, +year));
        setFilter(year);
        setProgress(progress);
        handleClose();
    };

    const handleAllBooks = () => {
        setBooks(data);
        setFilter(null);
        setProgress(null);
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
                Filter by year {filter !== null && `: ${filter}`}
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
                {[...yearsUnique]
                    .sort((a, b) => b - a)
                    .map((year, index) => (
                        <MenuItem
                            key={index}
                            variant="outlined"
                            data-progress="complete"
                            data-year={year === 'earlier' ? 2015 : year}
                            onClick={e => handleYear(e)}
                            sx={{ textTransform: 'uppercase' }}
                        >
                            {year}
                        </MenuItem>
                    ))}
            </Menu>
        </Grid>
    );
};

export default FilterByYear;
