const palindromes = function (word) {
    let result = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(" ").join('');
    res = true;
    for (let i = 0; i < result.length / 2; i++) {
        if (result[i] != result.at(-1 - i)) {
            res = false;
            break
        }
    }
    return res;
};
// Do not edit below this line
module.exports = palindromes;
