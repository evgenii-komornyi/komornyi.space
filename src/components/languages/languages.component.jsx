import React from 'react';
import { Row } from 'reactstrap';

import './languages.style.sass';

import data from '../../data/cv.json';

import Language from './language.component';

const Languages = () => (
    <>
        <Row>
            <h1>Languages</h1>
        </Row>
        <Row>
            {data.languages.map(language => (
                <Language language={language} key={language.id} />
            ))}
        </Row>
    </>
);

export default Languages;
