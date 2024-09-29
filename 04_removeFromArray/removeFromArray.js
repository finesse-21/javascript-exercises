const removeFromArray = function(array, ...keys) {
    for (let i = 0; i < keys.length; i++) {
      while(array.includes(keys[i])) {
        array.splice(array.findIndex((element) => element === keys[i]), 1);
      }
    }
   return array;
 };
// Do not edit below this line
module.exports = removeFromArray;
