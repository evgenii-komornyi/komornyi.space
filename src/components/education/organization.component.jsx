import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

const Organization = ({
    institution,
    grade,
    faculty,
    specification,
    high,
    yearStart,
    yearEnd,
}) => (
    <Card className="education">
        <CardBody className="information">
            <CardText className="institution">{institution}</CardText>
            {high && (
                <>
                    <CardText className="faculty">{faculty}</CardText>
                    <CardText className="specification">
                        {specification}
                    </CardText>
                </>
            )}
            <hr />
            <CardText className="period">
                {`${yearStart} - ${yearEnd}`}
            </CardText>
            <CardText className="grade">{grade}</CardText>
        </CardBody>
    </Card>
);

export default Organization;
