import React from 'react';
import { Container } from 'reactstrap';

import Books from '../components/books/books.component';

const BooksPage = () => (
    <Container>
        <Books filter={-1} />
    </Container>
);

export default BooksPage;
