import axios from "axios";

export default {
        searchInteractions: async function (name) {
        //let name = "lipitor";
            const result = await axios.get(`https://rxnav.nlm.nih.gov/REST/rxcui?name=${name}`)
                console.log(result);
                //let rxcui = new DOMParser().parseFromString(result, "application/xml").getElementsByTagName("rxNormId")[0];
                let rxcui = result.data.idGroup.rxnormId[0];

                console.log(rxcui);
                const secondresult = await axios.get(`https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcui}`)
                    console.log(secondresult);
                    return secondresult.data;
            
            
        }
}


