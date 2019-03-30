import React from "react";
import drugAPI from "../../utils/drugAPI"


class InteractionModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            searchParam: "",
            searchResult: []
        }
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleAdd = this.handleSearchInputChange.bind(this);
    }

    componentDidUpdate = async() => {
        let result = await drugAPI.searchInteractions(this.state.searchParam);
        let filteredResult = result.interactionTypeGroup[0].interactionType[0].interactionPair.filter(drug => props.drugs.includes(drug.interactionConcept[1].sourceConceptItem.name));
        let displayResult = filteredResult.map( drug => drug = {
            name: drug.interactionConcept[1].sourceConceptItem.name,
            description: drug.description
        });
        this.setState({searchResult:displayResult})
    }

    handleSearchInputChange = (e) => {
        const target = e.target;
        const value = target.value;

        if(value){
            this.setState({searchParam:value})
        }

    }

    handleAdd = (e) => {

        //adds drug to database


    }

    render() {
        return (
            <div className = "modal fade" id = "interactionModal" role ="dialog">
                <div className = "modal-dialog">
                
                    <div className = "modal">
                        <button type="button" class="close" data-dismiss="modal"> &times; </button>
                        <div className = "input-group">
                            <input type= "text" className = "form-control" placeholder="Enter New Perscription" value = {this.state.searchParam} onChange = {this.handleSearchInputChange}/>
                            <div className = "input-group-btn">
                                <button className = "btn btn-default" id = "add" onClick = {this.handleAdd} disabled={this.state.searchResult.length >0}>
                                    <i className = "glyphicon glyphicon-plus" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className = "resultDiv">
                        {this.state.searchResult.length ? this.state.searchResult.map(drug => <div key={drug.name}><h3>{drug.name}</h3><p>{drug.description}</p></div>) : <p>No Adverse Drug Interactions Found</p>}
                    </div>
                </div>
            
            </div>
        )
    }

}

export default InteractionModal;