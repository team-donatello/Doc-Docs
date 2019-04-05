import React from "react";
import drugAPI from "../../utils/drugAPI";
import API from "../../utils/API";
import Modal from "../test_Modal";


class InteractionModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            searchParam: "Tylenol",
            searchResult: []
        }
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    async componentDidMount() {
        let result = await drugAPI.searchInteractions(this.state.searchParam);
        console.log(+result.userInput.rxcui);
        let filteredResult = +result.userInput.rxcui ? result.interactionTypeGroup[0].interactionType[0].interactionPair.filter(drug => this.props.drugs.includes(drug.interactionConcept[1].sourceConceptItem.name)) : null;
        let displayResult = filteredResult ? filteredResult.map(drug => drug = {
            name: drug.interactionConcept[1].sourceConceptItem.name,
            description: drug.description
        }) : null;
        console.log(displayResult);
        this.setState({ searchResult: displayResult })
    }

    async componentWillUpdate() {
        // let result = await drugAPI.searchInteractions(this.state.searchParam);
        // let filteredResult = result.interactionTypeGroup[0].interactionType[0].interactionPair.filter(drug => this.props.drugs.includes(drug.interactionConcept[1].sourceConceptItem.name));
        // let displayResult = filteredResult.map(drug => drug = {
        //     name: drug.interactionConcept[1].sourceConceptItem.name,
        //     description: drug.description
        // });
        // console.log(displayResult);
        // this.setState({ searchResult: displayResult })
    }



    handleSearchInputChange = (e) => {
        const target = e.target;
        const value = target.value;

        if (value) {
            this.setState({ searchParam: value })
        }

    }

    handleAdd = () => {
        API.updatePatient(this.props._id, this.state.searchParam);
    }

    handleOpen = () => {
        this.setState({ show: true });
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    render() {
        return (

            <>
                <button className="btn btn-primary" onClick={this.handleOpen}>Add New Medications</button>

                {this.state.show ? 
                    <Modal onClose = {this.handleClose}>
                        <div className="Header">
                            <h1>Add a medication!</h1>
                        </div>

                        <div className="input">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter New Perscription" value={this.state.searchParam} onChange={this.handleSearchInputChange} />
                                <div className="input-group-btn">
                                    <button className="btn btn-default" id="add" onClick={this.handleAdd} disabled={this.state.searchResult.length > 0}>
                                        <i className="glyphicon glyphicon-plus" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className = "results">
                            {this.state.searchResult.length ? <div>
                                                            <h2>Drug Interactions</h2>
                                                            <ul>{this.state.searchResult.map(result => <li><h1>{result.name}</h1><p>{result.description}</p></li>)}</ul>
                                                        </div> : <h2>No Interactions With Current Medications</h2>}
                        </div>
                    </Modal>: null}

            </>

        )
    }

}

export default InteractionModal;