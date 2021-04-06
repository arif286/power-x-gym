import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <h5>POWER <span>X</span></h5>
                    </Col>
                    <Col xs={12} sm={6} md={3}></Col>
                    <Col xs={12} sm={6} md={3}></Col>
                    <Col xs={12} sm={6} md={3}></Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;