const palindromes = function (phrase) {
    strippedStr = phrase.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();
    reversedStr = strippedStr.split("").reverse().join("");
    if (strippedStr == reversedStr) {
        return true
    } else return false
};

// Do not edit below this line
module.exports = palindromes;
