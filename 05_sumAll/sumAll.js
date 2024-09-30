const sumAll = function(first, second) {
    let result = 0;
    //if (second < first) return 'ERROR';
    if (first < 0 || second < 0) return 'ERROR';
    if (!Number.isInteger(first) || !Number.isInteger(second)) return 'ERROR';
    for (let i = Math.min(first,second); i < Math.max(first, second) + 1; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
