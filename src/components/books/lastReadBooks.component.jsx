import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

import BookCard from './bookCard.component';

import { useStyles } from './books.styles';
import useBooksStore from '../../app/booksStore';

const LastReadBooks = () => {
    const classes = useStyles();
    const { books } = useBooksStore();

    const filteredBooks = books.filter((_, index) => index < 4);

    return (
        <>
            <Grid item xs={8} sm={8} md={10} lg={10} xl={10} sx={{ mt: 5 }}>
                <Typography variant="h1" className={classes.title}>
                    Last read books
                </Typography>
            </Grid>
            <Grid
                item
                xs={4}
                sm={4}
                md={2}
                lg={2}
                xl={2}
                sx={{ mt: 5, textAlign: 'center' }}
            >
                <Button variant="outlined" href="/library">
                    See all
                </Button>
            </Grid>
            {filteredBooks.map(book => (
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={book._id}>
                    <BookCard book={book} />
                </Grid>
            ))}
        </>
    );
};

export default LastReadBooks;
