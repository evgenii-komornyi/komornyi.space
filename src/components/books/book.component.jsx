import React from 'react';
import { Grid } from '@mui/material';

import BookCard from './bookCard.component';

const Book = ({ book }) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <BookCard book={book} />
        </Grid>
    );
};

export default Book;
