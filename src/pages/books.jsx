import React from 'react';
import { Container } from '@mui/material';

import { HelmetSeo } from '../components/helmet-seo/helmet-seo.component';
import Books from '../components/books/books.component';

const BooksPage = () => {
    return (
        <Container maxWidth="lg">
            <HelmetSeo
                title="Books library"
                description="This page represents my books' library."
                url="https://komornyi.space/library"
            />
            <Books />
        </Container>
    );
};

export default BooksPage;
