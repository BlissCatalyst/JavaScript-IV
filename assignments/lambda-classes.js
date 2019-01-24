// CODE here for your Lambda Classes
class Person {
    constructor(personAtr) {
        this.name = personAter.name;
        this.age = personAtr.age;
        this.location = personAtr.location;
        this.gender = personAtr.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructAtr) {
        super(instructAtr);
        this.specialty = instructAtr.specialty;
        this.favLanguage = instructAtr.favLanguage;
        this.catchPhrase = instructAtr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(PMAtr) {
        super(PMAtr);
        this.gradClassName = PMAtr.gradClassName;
        this.favInstructor = PMAtr.favInstructor;
    }
    standUp(slack) {
        return `${this.name} announces to ${slack} @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

class Student extends Person {
    constructor(studentAtr) {
        super(studentAtr);
        this.previousBackground = studentAtr.previousBackground;
        this.className = studentAtr.className;
        this.favSubjects = studentAtr.favSubjects;
    }
    listsSubjects() {
        studentAtr.favSubjects.forEach(function() {
            console.log(studentAtr.favsubjects);
        })
    }
    PRAssignment(subject) {
        return `${this.name} has begun the sprint challenge on ${subject}`;
    }
}