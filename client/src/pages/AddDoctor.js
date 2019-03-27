import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import API from "../utils/API";
// import { Input, FormBtn, PasswordInput } from "../components/Form";


class AddDoctor extends Component {

    render() {
        return (
            <Container fluid>
                <Row >
                    <Col size="md-12 as=12">
                        <Jumbotron>
                            <h1>Add New Doctor</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Container>
                        <Col size="md-2 md-offset-1">
                            <Link to={{
                                pathname: '/adminPage' 
                            }}
                            >← Back to Scheduler</Link>
                        </Col>
                    </Container>
                </Row>
            </Container>
        )

    }
}

export default AddDoctor;