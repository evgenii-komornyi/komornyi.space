import React, { useEffect } from 'react';
import { Container } from 'reactstrap';

import Contacts from '../components/contacts/contacts.component';

const ContactsPage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Container>
            <Contacts />
        </Container>
    );
};

export default ContactsPage;
