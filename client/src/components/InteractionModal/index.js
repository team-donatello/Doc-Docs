import React from "react";
import drugAPI from "../../utils/drugAPI";
import API from "../../utils/API";
import Modal from "../test_Modal";


class InteractionModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            showModal: false,
            searchParam: "",
            searchResult: []
        }
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSearch = this.handleSearch.bind(this)

    }
    componentDidMount(){
        console.log(this.props);
    }
    handleSearch = async (searchParam) => {
        this.setState({loading: true});
        console.log(searchParam);
        let result = await drugAPI.searchInteractions(searchParam);
        this.setState({loading: false});
        console.log(result);
        if (result){
        let filteredResult = +result.userInput.rxcui ? result.interactionTypeGroup[0].interactionType[0].interactionPair.filter(drug => this.props.drugs.includes(drug.interactionConcept[1].sourceConceptItem.name)) : null;
        let displayResult = filteredResult.map(drug => drug = {
            name: drug.interactionConcept[1].sourceConceptItem.name,
            description: drug.description
        })
        console.log(displayResult);
        this.setState({ searchResult: displayResult })
        } else{
            this.setState({searchResult: []});
        }
    }

    handleSearchInputChange = (e) => {
        this.setState({ searchParam: e.target.value })
        this.handleSearch(e.target.value);

    }

    handleAdd = () => {
        console.log(typeof this.props._id);
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
                    <Modal onClose={this.handleClose}>
                        <div className="Header">
                            <h1>Add a medication!</h1>
                        </div>

                        <div className="input">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter New Perscription" value={this.state.searchParam} onChange={this.handleSearchInputChange} />
                                
                                    <button id="add" onClick={this.handleAdd}>
                                        Add
                                    </button>
                            </div>
                            
                        </div>

                        <div className="results">
                            {this.state.loading ? <h2>loading...</h2> :
                                this.state.searchResult.length ? <div>
                                    <h2>Drug Interactions</h2>
                                    <ul>{this.state.searchResult.map(result => <li><h4>{result.name}</h4><p>{result.description}</p></li>)}</ul>
                                </div> : <h2>No Interactions With Current Medications</h2>}
                        </div>
                    </Modal> : null}

            </>

        )
    }

}

export default InteractionModal;