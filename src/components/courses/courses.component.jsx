import React from 'react';
import { Row, Col } from 'reactstrap';

import data from '../../data/cv.json';

import Course from './course.component';

import './courses.style.sass';

const Courses = () => (
    <>
        <Row>
            <Col>
                <h1>Courses</h1>
            </Col>
        </Row>
        <Row>
            {data.courses.map(course => (
                <Col xl={3} sm={6} key={course.id}>
                    <Course
                        id={course.id}
                        course={course.course}
                        institution={course.institution}
                        year={course.year}
                        certificate={course.certificate}
                        progress={course.progress}
                        progressValue={course.progressValue}
                    />
                </Col>
            ))}
        </Row>
    </>
);

export default Courses;
