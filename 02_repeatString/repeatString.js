const repeatString = function(string, num) {
    let phrase = "";
    if (num < 0) {
        return 'ERROR'
    } else {
        for (let i = 1; i <= num; i++) {
            phrase += string
        }
        return phrase
    }
};

let string = "";
let num = 10;

repeatString(string, num);

// Do not edit below this line
module.exports = repeatString;
