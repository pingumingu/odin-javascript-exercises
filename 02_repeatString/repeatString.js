const repeatString = function(word, numberOfTimes) {
    repeatedWord = '';
    if (numberOfTimes >= 0) {
        for (let i=0; i<numberOfTimes; i++) {
            repeatedWord += word;
        }
    } else {
        repeatedWord = "ERROR";
    }
 
    return repeatedWord;

};

// Do not edit below this line
module.exports = repeatString;
