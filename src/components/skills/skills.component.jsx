import React, { useState } from 'react';
import { Row, Col, Button } from 'reactstrap';

import './skills.style.sass';

import data from '../../data/cv.json';

import Skill from './skill.component';

const Skills = () => {
    const [skills] = useState(data.skills);

    const keywordsUnique = new Set();
    data.skills.map(skill =>
        skill.keywords.map(keyword => keywordsUnique.add(keyword))
    );

    const filterSkills = keyword => {
        return skills.filter(sk => sk.keywords.includes(keyword));
    };

    const [fSkills, setFilteredSkills] = useState(null);

    const handleClick = e => {
        e.preventDefault();
        setFilteredSkills(filterSkills(e.target.textContent));
    };

    return (
        <>
            <Row>
                <Col>
                    <h1>Skills</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="skill-filter">
                        <Button
                            outline
                            color="secondary"
                            onClick={() => setFilteredSkills(null)}
                        >
                            all
                        </Button>
                        {[...keywordsUnique].map((keyword, i) => (
                            <Button
                                key={i}
                                outline
                                color="secondary"
                                onClick={e => handleClick(e)}
                            >
                                {keyword}
                            </Button>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row>
                {fSkills !== null ? (
                    <Skill skills={fSkills} />
                ) : (
                    <Skill skills={skills} />
                )}
            </Row>
        </>
    );
};

export default Skills;
