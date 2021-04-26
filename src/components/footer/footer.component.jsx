import React from 'react';
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import './footer.styles.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
    <>
        <div className="footer">
            <Container>
                <Row>
                    <Col xl={4}>
                        <div className="icons">
                            <a
                                href="https://www.linkedin.com/in/evgenii-komornyi-459476183/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={['fab', 'linkedin']}
                                    size="2x"
                                />
                            </a>
                            <a href="mailto: evgeniikomornyi@gmail.com">
                                <FontAwesomeIcon
                                    icon={['fas', 'envelope']}
                                    size="2x"
                                />
                            </a>
                            <a
                                href="https://cv.lv/en/cvs/730375/pdf?lang=en"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <span>CV</span>
                            </a>
                        </div>
                    </Col>
                    <Col xl={8} className="text-center">
                        <Nav>
                            <NavItem>
                                <NavLink activeClassName="active" to="/" exact>
                                    main page
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="active" to="/about">
                                    about me
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    activeClassName="active"
                                    to="/projects"
                                >
                                    projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    activeClassName="active"
                                    to="/contacts"
                                >
                                    contacts
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
);

export default Footer;
