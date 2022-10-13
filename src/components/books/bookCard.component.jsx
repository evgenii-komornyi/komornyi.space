import React from 'react';
import { CardActionArea, Card, CardContent, Typography } from '@mui/material';

import Progress from './progress.component';

import { useStyles } from './books.styles';

const BookCard = ({ book }) => {
    const classes = useStyles();

    return (
        <CardActionArea sx={{ mb: 3 }}>
            <Card variant="outlined" className={classes.library}>
                <Progress book={book} />
                <CardContent>
                    <img
                        src={process.env.REACT_APP_BOOKS_IMAGES + book.image}
                        alt={book.title}
                        className={classes.bookImage}
                    />
                    <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.bookTitle}
                    >
                        {book.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        className={classes.bookAuthorSpan}
                    >
                        by {book.author}
                    </Typography>
                </CardContent>
            </Card>
        </CardActionArea>
    );
};

export default BookCard;
