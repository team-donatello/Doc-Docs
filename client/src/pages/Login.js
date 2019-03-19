import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Login from "../components/Login";

class Log extends Component {
    

render(){
    return (
        <Container fluid>
            <Row>
                <Col size="md-12 sm-12">
                    <Jumbotron>
                        <h1>Doctor Login page</h1>
                    </Jumbotron>
                </Col>
            </Row>            
            <Login></Login>          
            
        </Container>
    );
}
}

export default Log;