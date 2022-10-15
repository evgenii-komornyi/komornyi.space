import React, { useEffect } from 'react';

import useProjectsStore from './app/projectsStore';
import useBooksStore from './app/booksStore';

import { Header } from './components/header/header.component';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { Main } from './App.styles';
import { Loader } from './components/loader/loader.component';
import { Footer } from './components/footer/footer.component';
import { Routes } from './routes/routes';
import useMenuStore from './app/menuStore';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        info: {
            main: '#0057b7',
        },
        warning: {
            main: '#ffd700',
        },
    },
});

const App = () => {
    const { fetchProjects } = useProjectsStore();
    const { fetchBooks } = useBooksStore();

    useEffect(() => {
        try {
            fetchBooks();
        } catch (error) {
            console.log(error.message);
        }
    }, [fetchBooks]);

    useEffect(() => {
        try {
            fetchProjects();
        } catch (error) {
            console.log(error.message);
        }
    }, [fetchProjects]);

    const isProjectsLoaded = useProjectsStore(state => state.isLoaded);
    const isBooksLoaded = useBooksStore(state => state.isLoaded);

    const { isOpen } = useMenuStore(state => state.isOpen);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Header />
            <Main open={isOpen}>
                {isProjectsLoaded && isBooksLoaded ? <Routes /> : <Loader />}
            </Main>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
