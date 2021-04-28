import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    Button,
} from 'reactstrap';

import './contacts.styles.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contacts = () => (
    <>
        <Row>
            <Col>
                <h1>Contacts</h1>
            </Col>
        </Row>
        <Row>
            <Col xl={4} className="text-center">
                <Card className="contacts">
                    <CardBody>
                        <CardTitle tag="h5">LinkedIn</CardTitle>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
                        <CardText>You can connect me via linked-in</CardText>
                    </CardBody>
                    <CardFooter>
                        <Button
                            color="secondary"
                            outline
                            href="https://www.linkedin.com/in/evgenii-komornyi-459476183/"
                        >
                            Connect
                        </Button>
                    </CardFooter>
                </Card>
            </Col>
            <Col xl={4} className="text-center">
                <Card className="contacts">
                    <CardBody>
                        <CardTitle tag="h5">E-Mail</CardTitle>
                        <FontAwesomeIcon icon={['fas', 'envelope']} size="3x" />
                        <CardText>You can send me e-mail</CardText>
                    </CardBody>
                    <CardFooter>
                        <Button
                            color="secondary"
                            outline
                            href="mailto:evgeniikomornyi@gmail.com"
                        >
                            Send e-mail
                        </Button>
                    </CardFooter>
                </Card>
            </Col>
            <Col xl={4} className="text-center">
                <Card className="contacts">
                    <CardBody>
                        <CardTitle tag="h5">Full CV</CardTitle>
                        <div className="cv">CV</div>
                        <CardText>You can view my CV</CardText>
                    </CardBody>
                    <CardFooter>
                        <Button
                            color="secondary"
                            outline
                            href="https://cv.lv/en/cvs/730375/pdf?lang=en"
                        >
                            View CV
                        </Button>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
    </>
);

export default Contacts;
