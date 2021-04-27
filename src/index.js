import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.sass';
import './font-awesome';

import App from './App';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
