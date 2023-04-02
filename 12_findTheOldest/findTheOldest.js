const findTheOldest = function(people) {
    ageArray = people.map((person) => {
        if (person.yearOfDeath == undefined) {
            let today = new Date();
            let currentYear = today.getFullYear();
            return currentYear - person.yearOfBirth;
        } else {
        let age = person.yearOfDeath - person.yearOfBirth;
        return age;
        }
    })
    
    let highestAge = ageArray[0];
    let highestAgeIndex = 0;

    for (let i=1; i<ageArray.length; i++) {
        if (ageArray[i]>highestAge) {
            highestAge = ageArray[i];
            highestAgeIndex = i;
        }
    }

    return people[highestAgeIndex];

};

// Do not edit below this line
module.exports = findTheOldest;
