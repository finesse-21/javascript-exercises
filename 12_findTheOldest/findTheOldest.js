const findTheOldest = function(array) {
    array.forEach((i) => {
        if (!i.yearOfDeath) {
            i.yearOfDeath = new Date().getFullYear();
        }
    });
    return array.reduce((max, old) => (max.yearOfDeath - max.yearOfBirth) > (old.yearOfDeath - old.yearOfBirth) ? max : old);
};

// Do not edit below this line
module.exports = findTheOldest;
