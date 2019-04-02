import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { Input, FormBtn, PasswordInput } from "../components/Form";
import "../components/style/login.css";
// import { Link } from "react-router-dom";


class Login extends Component {
    state = {
        doctors: [],
        name: "",
        username: "",
        password: ""
    }

    componentDidMount() {
        this.loadDoctors();
    }

    loadDoctors = () => {
        API.getDoctors()
            .then(res =>
                this.setState({ doctors: res.data, name: "", username: "", password: "" })
            )
            .catch(err => console.log(err));
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        for (let i = 0; i < this.state.doctors.length; i++) {

            if (this.state.doctors[i].username === this.state.username && this.state.doctors[i].password === this.state.password) {
                // console.log("Login Username = " + this.state.doctors[i].username + " Login Password = " + this.state.doctors[i].password);
                window.location.assign("/scheduler/" + this.state.doctors[i].username);
                return
            } else if (this.state.username === "admin" && this.state.password === "admin@123") {
                window.location.assign("/adminPage");                
                return
            }
        }
        alert("Plese Enter Valid Username and Password ");
        window.location.reload();
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12 sm-12">
                    <style>
                    @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');
                    </style> 
                    <Jumbotron>
                        
                            <h1>Doctor Login </h1>
                            
                        </Jumbotron>
                    </Col>
                </Row>
                {/* <LoginPage></LoginPage> */}
                <Container>
                    <Row>
                        <Col size="md-12 sm-12">
                            <Input
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                name="username"
                                placeholder="User Name(Required)"
                            />
                            <PasswordInput
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="Password (Required)"
                            />
                            <FormBtn
                                disabled={!this.state.username && this.state.password}
                                onClick={this.handleFormSubmit}
                            >
                                Login
                            </FormBtn>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEgJDYO5AuG-reU0v0Ok9YmzOGOkAopb6gFZzZTUQlpuCF7qAUw" height="220" width="850"></img>

                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Login;