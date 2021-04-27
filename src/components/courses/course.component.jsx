import React, { useState } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Card,
    CardBody,
    CardTitle,
    Progress,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const baseImgUrl = 'http://127.0.0.1:8887/certificates/';

const Course = ({ course, progress, progressValue, certificate }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <Card className="course">
                <CardBody>
                    <div
                        className={
                            progress === 'complete' ? 'complete' : 'in-progress'
                        }
                        title={progress}
                    >
                        <FontAwesomeIcon
                            icon={
                                progress === 'complete'
                                    ? ['far', 'check-circle']
                                    : ['fas', 'hourglass-start']
                            }
                        />
                    </div>
                    <CardTitle>{course}</CardTitle>
                    {progressValue && (
                        <div className="progressValue">
                            <Progress value={progressValue}>
                                {progressValue}%
                            </Progress>
                        </div>
                    )}
                </CardBody>
                {certificate && (
                    <div
                        className="certificate"
                        style={{ backgroundImage: `url(${certificate})` }}
                        onClick={toggle}
                    />
                )}
            </Card>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{course}</ModalHeader>
                <ModalBody>
                    <img src={baseImgUrl + certificate} alt={course} />
                </ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
        </>
    );
};

export default Course;
