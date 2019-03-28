import React from "react";
import drugAPI from "../../utils/drugAPI"

class interactionModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            searchParam: "",
            searchResult: {}
        }
    }

    componentDidUpdate = async() => {
        let result = await drugAPI.searchInteractions(this.state.searchParam);
        let filteredResult = result;
        this.setState({searchResult:filteredResult})
    }

    handleSearchInputChange = (e) => {
        const target = e.target;
        const value = target.value;

        if(value){
            this.setState({searchParam:value})
        }

    }

    render() {
        return (
            <div className = "modal">
                <div className = "inputDiv">
                    <input></input>
                </div>
                <div className = "resultDiv">
                    
                </div>
            
            </div>
        )
    }

}

export default interactionModal;