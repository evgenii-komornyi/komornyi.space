import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import useProjectsStore from './app/projectsStore';
import useBooksStore from './app/booksStore';
import useMenuStore from './app/menuStore';

import { useCancelToken } from './hooks/useCancelToken';

import { Header } from './components/header/header.component';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { Main } from './App.styles';
import { Loader } from './components/loader/loader.component';
import { Footer } from './components/footer/footer.component';
import { Routes } from './routes/routes';

import './styles/app.css';

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

    const { newCancelToken, isCancel } = useCancelToken();

    useEffect(() => {
        fetchBooks(newCancelToken(), isCancel);
        console.log('fetch books');
    }, [fetchBooks, newCancelToken, isCancel]);

    useEffect(() => {
        fetchProjects(newCancelToken(), isCancel);
        console.log('fetch projects');
    }, [fetchProjects, newCancelToken, isCancel]);

    const isProjectsLoaded = useProjectsStore(state => state.isLoaded);
    const isBooksLoaded = useBooksStore(state => state.isLoaded);

    const { isOpen } = useMenuStore(state => state.isOpen);

    const helmetContext = {};

    return (
        <ThemeProvider theme={darkTheme}>
            <HelmetProvider context={helmetContext}>
                <CssBaseline />
                <Header />
                <Main open={isOpen}>
                    {isProjectsLoaded && isBooksLoaded ? (
                        <Routes />
                    ) : (
                        <Loader />
                    )}
                </Main>
                <Footer />
            </HelmetProvider>
        </ThemeProvider>
    );
};

export default App;
