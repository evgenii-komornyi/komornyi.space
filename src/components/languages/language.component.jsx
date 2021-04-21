import React from 'react';
import { Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const Language = ({ language }) => (
    <Col xl={4} md={4}>
        <Card className="language">
            <CardImg
                top
                src={language.icon}
                alt={language.language}
                className="language-icon"
            />
            <CardBody>
                <CardTitle tag="h5" className="text-center">
                    {language.language}
                </CardTitle>
                <CardText>{language.level}</CardText>
            </CardBody>
        </Card>
    </Col>
);

export default Language;
