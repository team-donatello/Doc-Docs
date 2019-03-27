let test = require ("./druginteraction/src/rxnorms")
function callback(status, data){
        console.log(data)
}
test.queryfdaName("Tylenol", callback)