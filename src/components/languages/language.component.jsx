import React from 'react';
import { Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

// const baseImgUrl = 'http://127.0.0.1:8887/languages/';
const baseImgUrl = 'https://komornyi.space/static/img/languages/';

const Language = ({ language }) => (
    <Col xl={4} md={4}>
        <Card className="language">
            <CardImg
                top
                src={baseImgUrl + language.icon}
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
