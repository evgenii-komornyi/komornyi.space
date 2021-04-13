import React from 'react';
import { Row, Col } from 'reactstrap';

import './education.style.sass';

import data from '../../data/cv.json';

import Organization from './organization.component';

const Education = () => (
    <>
        <Row>
            <Col>
                <h1>Education</h1>
            </Col>
        </Row>
        <Row>
            {data.education.map(ed => (
                <Col key={ed.id}>
                    <Organization
                        institution={ed.institution}
                        grade={ed.grade}
                        faculty={ed.faculty}
                        specification={ed.specification}
                        high={ed.high}
                        yearStart={ed.yearStart}
                        yearEnd={ed.yearEnd}
                    />
                </Col>
            ))}
        </Row>
    </>
);

export default Education;
