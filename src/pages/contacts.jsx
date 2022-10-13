import React, { useEffect } from 'react';
import { Container } from '@mui/material';

import Contacts from '../components/contacts/contacts.component';

const ContactsPage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Container maxWidth="lg">
            <Contacts />
        </Container>
    );
};

export default ContactsPage;
