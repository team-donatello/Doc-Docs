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
                            <img src="data:image/jpeg;base64,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" height="150" width="850"></img>

                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Login;