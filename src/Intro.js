import React from 'react';
import myPhoto from './ACE.jpg'; 
import { Container, Row, Col, Image } from 'react-bootstrap';

const Intro = () => {
    return (
        <Container fluid style={{ backgroundColor: '#f3f3f3', padding: '2rem', paddingTop: '10rem', paddingBottom: '10rem'}}>
            <Row className="align-items-center">
                <Col>
                    <h1 className="display-1 mb-0 font-weight-bold" style={{ color:'#000', fontWeight: 'bold' }}><b>Sreemannarayana</b></h1>
                    <h2 className="text-left mt-3" style={{ color: '#955' }}>A Machine Learning and Deep Learning enthusiast with experience building awesome models.</h2>
                </Col>
                <Col className="d-flex justify-content-end">
                    <Image src={myPhoto} alt="Profile Pic" rounded style={{ width: '350px' }} />
                </Col>
            </Row>
        </Container>
    );
};

export default Intro;
