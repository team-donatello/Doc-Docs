import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";


class AddDoctor extends Component {
    state = {
        name: "",
        username: "",
        password: ""
    }
    componentDidMount(){
        this.loadData();
    }
    loadData=()=>{
        API.getDoctors()
            .then(res =>
                this.setState({ doctors: res.data })
            )
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("click");
        if(this.state.name && this.state.username && this.state.password){
            API.saveDoctor({
                name: this.state.name,
                username: this.state.username,
                password: this.state.password
            })
                .then(res => this.loadData())
                .catch(err => console.log(err));
            window.location.reload();
        }else{
            alert("Fill All Doctor Detail");
        }
    }

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
                        <Row>
                            <Col size="md-6 sm-6">
                                <Input
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    name="name"
                                    placeholder="Doctor Name (Required)">
                                </Input>
                            </Col>
                            <Col size="md-6 sm-6">
                                <Input
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                    name="username"
                                    placeholder="User Name (Required)">
                                </Input>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-6 sm-6">
                                <Input
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    name="password"
                                    placeholder="Password (Required)">
                                </Input>
                            </Col>
                            <Col size="md-6 sm-6">
                                {/* <Input
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                    name="username"
                                    placeholder="User Name (Required)">
                                </Input> */}
                            </Col>
                        </Row>
                        <Row>
                        <FormBtn
                                // disabled={!(this.state.name && !this.state.age && this.state.gender && this.state.enterDate && this.state.time)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit
                            </FormBtn>
                        </Row>
                        
                        <Col size="md-4 md-offset-1">
                            <Link to={{
                                pathname: '/adminPage'
                            }}
                            >← Back to Admin Page</Link>
                        </Col>
                    </Container>
                </Row>
            </Container>
        )

    }
}

export default AddDoctor;