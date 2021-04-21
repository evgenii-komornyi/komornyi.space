import React from 'react';
import { Col, Card, CardBody, CardTitle, CardImg } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skill = ({ skills }) =>
    skills.map(skill => (
        <Col
            xl={skill.main ? 4 : 2}
            sm={skill.main ? 6 : 4}
            md={skill.main ? 6 : 4}
            key={skill.id}
        >
            <Card>
                {skill.favorite && (
                    <div className="favorite">
                        <FontAwesomeIcon icon={['fas', 'heart']} size="2x" />
                    </div>
                )}
                {skill.icon && (
                    <CardImg
                        top
                        src={skill.icon}
                        alt={skill.skill}
                        className="skill-icon"
                    />
                )}
                <CardBody
                    className={
                        skill.skill.length > 13 ? 'moreThanLimitLength' : ''
                    }
                >
                    <CardTitle tag="h5" className="text-center">
                        {skill.skill}
                    </CardTitle>
                </CardBody>
            </Card>
        </Col>
    ));

export default Skill;
