const Person = function (firstName, lastName, age, jobTitle) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.jobTitle = jobTitle
}

const whoAmI = new Person('Benjamin', 'TheDev', 37, 'JavaScript Developer');

console.log(whoAmI);

console.log(whoAmI.age);
console.log(whoAmI.jobTitle);

whoAmI.age = 99;
console.log(whoAmI.age);

whoAmI.firstName = 'Hello World';
console.log(whoAmI.firstName);