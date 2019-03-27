import React from "react";
import { Accordion, AccordionItem } from 'react-light-accordion';
import './style.css';

function AccordionMain(props) {
    return (
        <div className="container text-center">
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.date}</h2>

            <div>
                <Accordion atomic={true}>

                    <AccordionItem title="Title 1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </AccordionItem>

                    <AccordionItem title="Title 2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </AccordionItem>

                    <AccordionItem title="Title 3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </AccordionItem>

                </Accordion>
            </div>

        </div>
    );
}


export default AccordionMain;


