import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import "../components/style/home.css";
import "../components/image/green_dust_scratch.png";


class Login extends Component {
 


    render() {
        return (
           
            <Container fluid>
            
                <Row>
                    <Col size="md-12 sm-12">
                        <Jumbotron>
                        <style>
            @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');
            <style>
            @import url('https://fonts.googleapis.com/css?family=Baloo+Chettan');
           </style>
            </style>
                            <h1>Doc-Docs</h1>
                            <h2>Managing your schedule just got a whole lot easier.</h2>
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9KAKD2BKnLB4ejeoEndPOw2xlMGbwNz64L5FPx9j2wji5WE2d" height="150" width="850"></img>

                            
                        
                        
                        </Jumbotron>
                    </Col>
                </Row>
                

            </Container>
        );
    }
}

export default Login;
