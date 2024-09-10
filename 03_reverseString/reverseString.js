const reverseString = function(string) {
    let stringArray = string.split("")
    let reverseString = stringArray.reverse()
    return reverseString.join("")
};

let string = '';

reverseString(string);

// Do not edit below this line
module.exports = reverseString;
