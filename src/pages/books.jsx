import React, { useEffect } from 'react';
import { Container } from 'reactstrap';

import Books from '../components/books/books.component';

const BooksPage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Container>
            <Books filter={-1} />
        </Container>
    );
};

export default BooksPage;
