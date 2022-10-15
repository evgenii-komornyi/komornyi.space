import React, { useEffect } from 'react';
import { Container, Grid } from '@mui/material';

import Jokes from '../components/jokes/jokes.component';
import LastProjects from '../components/projects/lastProjects.component';
import LastReadBooks from '../components/books/lastReadBooks.component';
import { Season } from '../components/season/season.component';

const MainPage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
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
