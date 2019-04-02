import axios from "axios";
export default function searchInteractions(name) {
        //let name = "lipitor";
        axios.get(`https://rxnav.nlm.nih.gov/REST/rxcui?name=${name}`)
        .then( (result) => {
            let rxcui = result.getElementsByTagName("rxNormId")[0];
            console.log(rxcui);
            axios.get(`https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcui}`)
            .then( (result) => {
                console.log(result);
                return result;
            })
        })
}


