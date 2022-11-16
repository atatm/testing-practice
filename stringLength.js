const { error } = require("console");

const stringLength = (str) => {
    if(str.length < 1){
        throw new Error ("the string length should be at least one");
    }else if(str.length > 10){
        throw new Error ("the string length should not be more than ten");
    }
    return str.length;
};

//console.log(stringLength("this is for test purpose"))
module.exports = stringLength;
