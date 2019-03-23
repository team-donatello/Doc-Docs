import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
// import LoginPage from "../components/Login";
import API from "../utils/API";
import { Input, FormBtn, PasswordInput } from "../components/Form";
// import { Link } from "react-router-dom";
// import SchedulerPage from "../components/Scheduler";

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
            if (this.state.doctors[i].username === "admin" && this.state.doctors[i].password === "admin") {
                window.location.assign("/adminPage");
                // alert("this is admin");
                return
            }else if (this.state.doctors[i].username === this.state.username && this.state.doctors[i].password === this.state.password) {
                // console.log("Login Username = " + this.state.doctors[i].username + " Login Password = " + this.state.doctors[i].password);
                window.location.assign("/scheduler/"+this.state.doctors[i].username);              
                return
            } 
        }
        alert("Plese Enter Valid Username and Password ");
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12 sm-12">
                        <Jumbotron>
                            <h1>Doctor Login page</h1>
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
                                >  {/*<Link to={"/scheduler"}> */}                                   
                                    Login                                
                                 {/* </Link>*/}
                            </FormBtn>
                            {/* <SchedulerPage>

                            </SchedulerPage> */}
                            {/* <Link to = {{
                                pathname: '/scheduler',
                                state: {
                                    loginDoctorName : true
                                }
                            }}>Nikunj</Link> */}
                                

                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Login;