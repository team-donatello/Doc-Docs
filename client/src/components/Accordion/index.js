import React from "react";
import { Accordion, AccordionItem } from 'react-light-accordion';
import './style.css';
import { Col, Row } from "../Grid";

function AccordionMain(props) {
    return (
        <div className="container text-center">
            {/* <h2>{props.name}</h2>
            <h2>{props.age}</h2>
            <h2></h2>
            <h2>{props.date}</h2> */}

            <div>
                <Accordion atomic={true}>

                    <AccordionItem title="General Infirmation">
                        <Row>
                            <Col size="md-4 sm-4">
                                <h4>Age : {props.age}</h4>
                                <h4>Gender : {props.gender}</h4>
                            </Col>
                            <Col size="md-4 sm-4">
                                <h4>Height : {props.height}</h4>
                                <h4>Weight : {props.weight}</h4>
                            </Col>
                            <Col size="md-4 sm-4">
                                <h4>Heartrate : {props.heartrate}</h4>
                                <h4>Bloodpressure : {props.bloodpressure}</h4>
                            </Col>
                        </Row>
                    </AccordionItem>

                    <AccordionItem title="Medications & Conditions">
                    <Row>
                            <Col size="md-6 sm-6">
                                <h4>Medications : {props.medications}</h4>                                
                            </Col>
                            <Col size="md-6 sm-6">
                                <h4>Conditions : {props.conditions}</h4>                                
                            </Col>                            
                        </Row>
                        
                    </AccordionItem>

                    <AccordionItem title="Allergies & Surgeries">
                    <Row>
                            <Col size="md-6 sm-6">
                                <h4>Allergies : {props.allergies}</h4>                                
                            </Col>
                            <Col size="md-6 sm-6">
                                <h4>Surgeries : {props.surgeries}</h4>                                
                            </Col>                            
                        </Row>
                    </AccordionItem>

                    <AccordionItem title="Patient Personal Info">
                    <Row>
                            <Col size="md-6 sm-6">
                                <h4>Email : {props.email}</h4>                                
                            </Col>
                            <Col size="md-6 sm-6">
                                <h4>Phone : {props.phone}</h4>                                
                            </Col>                            
                        </Row>
                    </AccordionItem>

                </Accordion>
            </div>

        </div>
    );
}


export default AccordionMain;


