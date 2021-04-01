import { Route, Switch } from 'react-router-dom';

import './App.css';

import MainPage from './pages/main-page';
import AboutMePage from './pages/about-me.jsx';
import ContactsPage from './pages/contacts';
import CVPage from './pages/cv';
import ProjectsPage from './pages/projects';
import BooksPage from './pages/books';

import Header from './components/header/header.component';

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/about" component={AboutMePage} />
                <Route exact path="/contacts" component={ContactsPage} />
                <Route exact path="/cv" component={CVPage} />
                <Route exact path="/projects" component={ProjectsPage} />
                <Route exact path="/library" component={BooksPage} />
            </Switch>
        </>
    );
}

export default App;
