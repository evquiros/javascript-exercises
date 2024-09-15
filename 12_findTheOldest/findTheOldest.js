const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {

  let currentAge = getAge(person.yearOfDeath, person.yearOfBirth)

  let oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth)

  return oldestAge > currentAge ? oldest : person
  })
};

const getAge = function(death, birth){
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth
}

// Do not edit below this line
module.exports = findTheOldest;
