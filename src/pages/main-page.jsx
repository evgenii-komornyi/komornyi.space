import React, { useEffect } from 'react';
import { Container, Grid } from '@mui/material';

// import Covid from '../components/covid/covid.component';
import { Holidays } from '../components/holidays/holidays.component';
import Jokes from '../components/jokes/jokes.component';
import LastProjects from '../components/projects/lastProjects.component';
import LastReadBooks from '../components/books/lastReadBooks.component';

const MainPage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Container maxWidth="lg">
            <Grid container sx={{ mt: 5 }} spacing={2} justifyItems="center">
                {/* <Covid /> */}
                <Holidays />
                <Jokes />
                <LastProjects />
                <LastReadBooks />
            </Grid>
        </Container>
    );
};
export default MainPage;
