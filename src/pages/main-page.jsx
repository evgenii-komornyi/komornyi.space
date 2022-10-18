import React from 'react';
import { Container, Grid } from '@mui/material';

import { HelmetSeo } from '../components/helmet-seo/helmet-seo.component';
import Jokes from '../components/jokes/jokes.component';
import LastProjects from '../components/projects/lastProjects.component';
import LastReadBooks from '../components/books/lastReadBooks.component';
import { Season } from '../components/season/season.component';

const MainPage = () => {
    return (
        <>
            <HelmetSeo
                title="Main page"
                description="My ReactJS child with REST API and other features."
                url="https://komornyi.space"
            />
            <Season />
            <Container maxWidth="lg">
                <Grid
                    container
                    sx={{ mt: 5 }}
                    spacing={2}
                    justifyItems="center"
                >
                    <Jokes />
                    <LastProjects />
                    <LastReadBooks />
                </Grid>
            </Container>
        </>
    );
};
export default MainPage;
