// CODE here for your Lambda Classes
class Person {
    constructor(name,age,location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from  ${this.location}`);
    }
}
const Gandalf = new Person('Gandalf',100,'Middle Earth');
const Saruman = new Person('Saruman', 240, 'Middle Earth');
const Samwise = new Person('Samwise', 25, 'The Shire');

class Instructor extends Person {
    constructor(specialty,favLanguage,catchPhrase) {
        super(specialty,favLanguage,catchPhrase);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student,subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}
const Chioma = new Instructor('JQuery', 'Java', 'Just Do It');
const Joshua = new Instructor('Sessions', 'Php', 'Gbe body e');
Chioma.age = 36; Chioma.name = 'Chioma';
Joshua.age = 42; Joshua.location = 'Lagos'; Joshua.name = 'Joshua'
console.log(Chioma);
console.log(Joshua);

class Student extends Person {
    constructor(previousBackground,className,favSubjects){
        super(previousBackground,className,favSubjects);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }
    listsSubjects(){
        console.log(favSubjects);
    };
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    };
}
const Babbi = new Student('baby girl','React', ['components', 'props']);
Babbi.name = 'Babbi'; Babbi.age = 18; Babbi.location = 'New York';
const Ife = new Student('student', 'Design', ['Figma', 'Wireframes']);
Ife.name = 'Ife'; Ife.age = 20; Ife.location = 'Ghana';
const Biso = new Student('banker', 'Backend', ['Flask', 'Laravel']);
Biso.name = 'Biso'; Biso.age = '35';
console.log(Babbi);
console.log(Ife);
console.log(Biso);

class ProjectManager extends Instructor{
    constructor(gradClassName, favInstructor){
        super(gradClassName, favInstructor)
        this.gradClassName = gradClassName;
        this.favInstructor =favInstructor;
    }
    standUp(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`);
    }
    debugsCode(student){
        console.log(`${this.name} debugs ${student}'s code on ${this.subject}`)
    }
}

const Femi = new ProjectManager('CS350','Vivo');
const Drake = new ProjectManager('Drake', 'Keri Hilson');
console.log(Drake);
// console.log(Drake.debugsCode('Lucy'));
console.log(Femi);
// console.log(Femi.standUp('General'));