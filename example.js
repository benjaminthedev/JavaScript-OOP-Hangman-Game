const Person = function (firstName, lastName, age, jobTitle, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.jobTitle = jobTitle
    this.likes = likes
}


Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age} and works as ${this.jobTitle}`;

    //Using .Map 
    this.likes.map(like => {
        bio += ` ${this.firstName} like ${like}.`
    })



    //Using ForEach
    // this.likes.forEach((like) => {
    //     //bio = bio + ` ${this.firstName} like ${like}.`
    //     bio += ` ${this.firstName} like ${like}.`
    // });


    return bio;
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
}

const whoAmI = new Person('Benjamin', 'TheDev', 37, 'JavaScript Developer', ['JavaScipt', 'ReactJS', 'Coffee', 'Tea']);
whoAmI.setName("Umma TheDev");
console.log(whoAmI.getBio());

// console.log(whoAmI.age);
// console.log(whoAmI.jobTitle);

whoAmI.age = 99;
//console.log(whoAmI.age);

whoAmI.firstName = 'Hello World';
// console.log(whoAmI.firstName);





const person2 = new Person('Bob', 'The Builder', 88, 'Old Builder');

console.log(person2.getBio());

// console.log("whoAmI");
// console.log(whoAmI);

