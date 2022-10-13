import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './font-awesome';

import ScrollToTop from './components/scrollToTop/scrollToTop.component';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
