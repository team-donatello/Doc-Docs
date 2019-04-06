import React from "react";
import { Accordion, AccordionItem } from 'react-light-accordion';
import './style.css';
import { Col, Row } from "../Grid";
import InteractionModal from "../InteractionModal"


function AccordionMain(props) {
    return (
        <div className="container text-center">
            {/* <h2>{props.name}</h2>
            <h2>{props.age}</h2>
            <h2></h2>
            <h2>{props.date}</h2> */}

            <div>
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');
            </style>
                <Accordion atomic={true}>

                    <AccordionItem title="General Information">

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
                                <h4>Medications:</h4>
                                {props.medications.map(drug => <p>{drug}</p>)}
                                <InteractionModal drugs={props.medications} _id = {props.id}/> 

                            </Col>

                            <Col size="md-6 sm-6">
                                <h4>Conditions :</h4>
                                {props.conditions.map(conditions => <p>{conditions}</p>)}
                            </Col>
                        </Row>

                    </AccordionItem>

                    <AccordionItem title="Allergies & Surgeries">
                        <Row>
                            <Col size="md-6 sm-6">
                                <h4>Allergies : </h4>
                                {props.allergies.map(allergy => <p>{allergy}</p>)}
                            </Col>
                            <Col size="md-6 sm-6">
                                <h4>Surgeries : </h4>
                                {props.surgeries.map(surgeries => <p>{surgeries}</p>)}
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


