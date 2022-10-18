import React from 'react';
import { Container } from '@mui/material';

import { HelmetSeo } from '../components/helmet-seo/helmet-seo.component';
import Contacts from '../components/contacts/contacts.component';

const ContactsPage = () => {
    return (
        <Container maxWidth="lg">
            <HelmetSeo
                title="Contacts"
                description="This page represents contact information. Links to the github, cv, linked-in and email."
                url="https://komornyi.space/contacts"
            />
            <Contacts />
        </Container>
    );
};

export default ContactsPage;
