import React from 'react';
import { Row, Col } from 'reactstrap';

import './experience.style.sass';

import data from '../../data/cv.json';

const Experience = () => (
    <>
        <Row>
            <Col>
                <h1>Experience</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                {data.experience.map(exp => (
                    <div className="job" key={exp.id}>
                        <h3 className="jobTitle">{exp.job}</h3>
                        <span className="specification">
                            {exp.specification}
                        </span>
                        <div className="period">
                            Period:{' '}
                            <span>
                                {`${exp.periodFrom} - ${exp.periodTo}. (about ${
                                    exp.periodTo - exp.periodFrom
                                } years)`}
                            </span>
                        </div>
                        <div className="jobDescription">
                            <p>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </Col>
        </Row>
    </>
);

export default Experience;
