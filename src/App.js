import { Route, Switch } from 'react-router-dom';

import './App.css';

import MainPage from './pages/main-page';
import AboutMePage from './pages/about-me.jsx';
import ContactsPage from './pages/contacts';
import ProjectsPage from './pages/projects';
import BooksPage from './pages/books';
import MusicPage from './pages/music';

import Header from './components/header/header.component';

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route
                    exact
                    path="/"
                    component={() => <MainPage title="Main page" />}
                />
                <Route
                    exact
                    path="/about"
                    component={() => <AboutMePage title="About me" />}
                />
                <Route
                    exact
                    path="/contacts"
                    component={() => <ContactsPage title="My contacts" />}
                />
                <Route
                    exact
                    path="/projects"
                    component={() => <ProjectsPage title="My projects" />}
                />
                <Route
                    exact
                    path="/library"
                    component={() => <BooksPage title="My library" />}
                />
                <Route
                    exact
                    path="/music"
                    component={() => <MusicPage title="My music from LastFM" />}
                />
            </Switch>
        </>
    );
}

export default App;
