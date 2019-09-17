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
    constructor({name,age,location,specialty,favLanguage,catchPhrase}) {
        super(name,age,location);
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
const Joshua = new Instructor({
    name:'Joshua',
    age: 42,
    location: 'Lagos',
    specialty: 'Sessions',
    favLanguage: 'Php',
    catchPhrase: 'Gbe body e'
});

const Chioma = new Instructor({
    name:'Chioma',
    age: 36,
    location: 'Zamfara',
    specialty: 'JQuery',
    favLanguage: 'Java',
    catchPhrase: 'Just Do It'
});
console.log(Chioma);
console.log(Joshua);

class Student extends Person {
    constructor({name,age,location,previousBackground,className,favSubjects}){
        super(name,age,location);
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
const Babbi = new Student({
    name: 'Bambi',
    age: 18,
    location: 'New York',
    previousBackground: 'baby girl',
    className: 'React',
    favSubjects: ['components', 'props']
});

const Ife = new Student({
    name: 'Ife',
    age: 23,
    location: 'York Aba',
    previousBackground: 'student',
    className: 'UI/UX',
    favSubjects: ['Figma', 'Wireframes']
});

const Biso = new Student({
    name: 'Biso',
    age: 30,
    location: 'Ghana',
    previousBackground: 'Banker',
    className: 'Backend',
    favSubjects: ['Flask', 'Laravel']
});

console.log(Babbi);
console.log(Ife);
console.log(Biso);

class ProjectManager extends Instructor{
    constructor({name,age,location,specialty,favLanguage,catchPhrase,gradClassName, favInstructor}){
        super({name,age,location,specialty,favLanguage,catchPhrase});
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

const Femi = new ProjectManager({
    name: 'Femi',
    age: 27,
    location: 'CSA',
    specialty: 'Pivotal Tracker',
    favLanguage: 'Python',
    catchPhrase: 'Zagadat',
    gradClassName: 'CS350',
    favInstructor: 'Vivo'
});
const Drake = new ProjectManager({
        name: 'Drake',
        age: 28,
        location: 'Jigawa',
        specialty: 'Pivotal Tracker',
        favLanguage: 'Google Analytics',
        catchPhrase: 'Que Sera Sera',
        gradClassName: 'SEO',
        favInstructor: 'Keri Hilson',
        subject: 'Maths'
    });

console.log(Drake);
console.log(Drake.debugsCode('Lucy'));
console.log(Femi);
console.log(Femi.standUp('General'));