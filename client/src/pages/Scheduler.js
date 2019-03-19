import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

import Schedulerpage from "../components/Scheduler";

class Scheduler extends Component {


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12 sm-12">
                        <Jumbotron>
                            <h1>Doctor Scheduler</h1>
                        </Jumbotron>
                    </Col>
                </Row>

                <Schedulerpage></Schedulerpage>

            </Container>
        );
    }
}

export default Scheduler;