import React from 'react';
import { Row, Col } from 'reactstrap';

import aboutPhoto from '../../img/about_photo_1.jpg';

import './about.style.sass';

const About = () => (
    <>
        <Row>
            <Col>
                <h1>About Me</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <img src={aboutPhoto} className="me" alt="It is me" />
                <p>Hello, world!</p>

                <p>
                    My name is Evgenii. Currently I am in search of a Junior
                    .NET/C# and ReactJS developer job. I learn ReactJS and C#
                    myself, but I still need some guidance from more experience
                    people.
                </p>

                <p>
                    I was born in Bishkek, Kyrgyzstan, but in 2019 I have moved
                    to Riga.
                </p>

                <p>
                    In my free time I play the drums, read sci-fi, horror and
                    popular science books. I like to play the chess, ride a
                    bicycle and to swim in the waves.
                </p>

                <p>
                    I am communicative and non-conflict person. I love to learn
                    and I am not afraid to invest time in that. I do not let
                    failures get me down. If I do not know something, I google,
                    or ask somebody who knows.
                </p>

                <p>
                    I have speech impediment, people that do not know me well
                    have difficulties understanding me, but it becomes easier
                    over time. I also type quickly, so I can communicate with
                    anybody online.
                </p>
            </Col>
        </Row>
    </>
);

export default About;
