
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import "../components/style/home.css";

class WelComePage extends Component {

    

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12 sm-12">
                        <Jumbotron>
                            <h1>DISCLAIMER</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <h2>This application, Doc-Docs, is a proof of concept. It is not certified for use in a real world professional medical environment, nor is it HIPAA compliant. You may use this application solely at your own risk.</h2>

            </Container>
        );
    }
}

export default WelComePage;
