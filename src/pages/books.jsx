import React, { useEffect } from 'react';
import { Container } from '@mui/material';

import Books from '../components/books/books.component';

const BooksPage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Container maxWidth="lg">
            <Books />
        </Container>
    );
};

export default BooksPage;
