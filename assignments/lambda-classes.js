// CODE here for your Lambda Classes
class Person {
    constructor(att) {
        this.name = att.name;
        this.age = att.age;
        this.location = att.location;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(att) {
        super(att);
        this.specialty = att.specialty;
        this.favLanguage = att.favLanguage;
        this.catchPhrase = att.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(att) {
        super(att);
        this.previousBackground = att.previousBackground;
        this.className = att.className;
        this.favSubjects = att.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach((item) => console.log(item));
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun spring challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(att) {
        super(att);
        this.gradClassName = att.gradClassName;
        this.favInstructor = att.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}\'s code on ${subject}.`)
    }
}

//Person Testing

const personOne = new Person({
    name: 'Jeff',
    age: 35,
    location: "Arizona",
});

const personTwo = new Person({
    name: 'Rebecca',
    age: 23,
    location: "New York",
});

personOne.speak(); //Hello, my name is Jeff, I am from Arizona.
personTwo.speak(); //Hello, my name is Rebecca, I am from New York.

//Student Testing

const studentOne = new Student({
    name: 'Sam',
    age: 21,
    location: "Miami",
    previousBackground: "Finance",
    className: "CS130",
    favSubjects: ["HTML", "CSS", "Javascript", "Math"],
});

const studentTwo = new Student({
    name: 'Ashley',
    age: 29,
    location: "Malibu",
    previousBackground: "Film",
    className: "CS201",
    favSubjects: ["HTML", "CSS", "Javascript", "Film Studies"],
});

studentOne.speak(); //Hello, my name is Sam, I am from Miami.
studentOne.listsSubjects(); // HTML CSS Javascript Math
studentTwo.PRAssignment("responsive design"); //Ashley has submitted a PR for responsive design
studentTwo.sprintChallenge("responsive design"); //Ashley has begun spring challenge on responsive design

// Instructor Testing

const instructorOne = new Instructor({
    name: 'Michael',
    age: 45,
    location: "San Fran",
    specialty: "Redux",
    favLanguage: "Python",
    catchPhrase: "Don't forget the homies",
});

const instructorTwo = new Instructor({
    name: 'Brittany',
    age: 31,
    location: "Salt Lake City",
    specialty: "HTML",
    favLanguage: "Javascript",
    catchPhrase: "It's almost over",
});

instructorOne.speak(); //Hello, my name is Michael, I am from San Fran.
instructorOne.demo("Javascript"); //Today we are learning about Javascript
instructorTwo.grade(studentTwo, "JSON"); //Ashley receives a perfect score on JSON

const projectManagerOne = new ProjectManager({
    name: 'Alex',
    age: 63,
    location: "Alaska",
    specialty: "CSS",
    favLanguage: "Elm",
    catchPhrase: "I'm about done with you",
    gradClassName: "CS01",
    favInstructor: "Michael",
});

const projectManagerTwo = new ProjectManager({
    name: 'Leah',
    age: 15,
    location: "London",
    specialty: "Android",
    favLanguage: "Java",
    catchPhrase: "Let's get started",
    gradClassName: "CS81",
    favInstructor: "Brittany",
});

projectManagerOne.speak(); //Hello, my name is Alex, I am from Alaska.
projectManagerOne.grade(studentOne, "CSS"); //Sam receives a perfect score on CSS
projectManagerTwo.standUp("@home"); //Leah announces to @home, @channel standy times!
projectManagerTwo.debugsCode(studentTwo, "HTML"); //Leah debugs Ashley's code on HTML.