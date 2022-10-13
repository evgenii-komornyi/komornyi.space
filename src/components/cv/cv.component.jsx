import React from 'react';

import Experience from '../experience/experience.component';
import Education from '../education/education.component';
import Courses from '../courses/courses.component';
import Skills from '../skills/skills.component';
import Languages from '../languages/languages.component';

const CV = () => (
    <>
        <Experience />
        <Education />
        <Courses />
        <Skills />
        <Languages />
    </>
);

export default CV;
