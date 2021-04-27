import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardText,
    CardFooter,
    Button,
} from 'reactstrap';

import './projects.styles.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/projects.json';

const baseImgUrl = 'http://127.0.0.1:8887';

const Projects = () => {
    console.log(data);

    return (
        <>
            <Row>
                <Col>
                    <h1>Projects for studies</h1>
                </Col>
            </Row>
            <Row>
                {data.projects
                    .filter(p => p.type === 'study')
                    .map(project => (
                        <Col key={project.id} xl={4} sm={4} md={6}>
                            <Card className="projects">
                                <CardImg
                                    top
                                    width="100%"
                                    src={baseImgUrl + project.imageUrl}
                                    alt={project.name}
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {project.name}
                                    </CardTitle>
                                    <CardText>
                                        {project.additionalInfo &&
                                            project.additionalInfo}
                                    </CardText>
                                    <CardText className="technologies">
                                        {project.technologies.map(
                                            (tech, index) => (
                                                <FontAwesomeIcon
                                                    key={index}
                                                    icon={['fab', tech]}
                                                    size="2x"
                                                />
                                            )
                                        )}
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <CardText>
                                        <Button
                                            tag="a"
                                            href={project.link}
                                            target="_blank"
                                            outline
                                            color="secondary"
                                        >
                                            Link to project
                                        </Button>
                                    </CardText>
                                </CardFooter>
                            </Card>
                        </Col>
                    ))}
            </Row>
            <Row>
                <Col>
                    <h1>Projects for work</h1>
                </Col>
            </Row>
            <Row>
                {data.projects
                    .filter(p => p.type === 'work')
                    .map(project => (
                        <Col key={project.id} xl={4} sm={4} md={6}>
                            <Card className="projects">
                                <CardImg
                                    top
                                    width="100%"
                                    src={baseImgUrl + project.imageUrl}
                                    alt={project.name}
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {project.name}
                                    </CardTitle>
                                    <CardText>
                                        {project.additionalInfo &&
                                            project.additionalInfo}
                                    </CardText>
                                    <CardText className="technologies">
                                        {project.technologies.map(
                                            (tech, index) => (
                                                <FontAwesomeIcon
                                                    key={index}
                                                    icon={['fab', tech]}
                                                    size="2x"
                                                />
                                            )
                                        )}
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <CardText>
                                        <Button
                                            tag="a"
                                            href={project.link}
                                            target="_blank"
                                            outline
                                            color="secondary"
                                        >
                                            Link to project
                                        </Button>
                                    </CardText>
                                </CardFooter>
                            </Card>
                        </Col>
                    ))}
            </Row>
        </>
    );
};

export default Projects;
