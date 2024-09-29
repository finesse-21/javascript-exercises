const reverseString = function(string) {
    let newString = string.split();
    let resArray = [];
    for (let i = 0; i < newString.length; i++) {
        resArray.push(newString.at(-1 - i));
    }
    let temp = "";
    for (let i = 0; i < resArray.length; i++) {
        for (let j = 1; j < resArray[i].length + 1; j++) {
            temp += resArray[i].at(-j);
        }
        console.log(temp)
        resArray.splice(i, 1, temp);
        temp = "";
    }
    let result = resArray.join(" "); 
    return result;
};  

// Do not edit below this line
module.exports = reverseString;
