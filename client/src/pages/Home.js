import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import "../components/style/home.css";
import { DayPilot } from "daypilot-pro-react";

class Login extends Component {

    componentDidMount(){
        let modal = new DayPilot.Modal({

        });
        modal.showUrl("/welcomemodel");
    }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12 sm-12">
                        <Jumbotron>
                            <h1>Doc Docs Home page</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                

            </Container>
        );
    }
}

export default Login;
