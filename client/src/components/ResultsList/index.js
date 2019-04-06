import React from "react";

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            storedResult: []
        }
    }

    shouldComponentUpdate() {
        if (this.state.storedResult == this.state.searchResult){
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <div>
                <h2>Drug Interactions</h2>
                <ul>{this.state.storedResult.map(result => <li><h1>{result.name}</h1><p>{result.description}</p></li>)}</ul>
            </div>
        )
    }
}

export default Results;