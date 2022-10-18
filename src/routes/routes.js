import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from '../pages/main-page';
import AboutMePage from '../pages/about-me.jsx';
import ContactsPage from '../pages/contacts';
import ProjectsPage from '../pages/projects';
import BooksPage from '../pages/books';
import MusicPage from '../pages/music';

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/about',
        component: AboutMePage,
    },
    {
        path: '/contacts',
        component: ContactsPage,
    },
    {
        path: '/projects',
        component: ProjectsPage,
    },
    {
        path: '/library',
        component: BooksPage,
    },
    {
        path: '/music',
        component: MusicPage,
    },
];

export const Routes = memo(() => {
    return (
        <Switch>
            {routes.map(({ path, component }, key) => (
                <Route exact key={key} path={path} component={component} />
            ))}
        </Switch>
    );
});
