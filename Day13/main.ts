import {Question} from "./question";
import {Exam} from "./exam";
console.log("Hey");

let exam = new Exam();
exam.addQuestion(new Question(
    "What is ido's favorite animal?",
    [
        "Dog",
        "Snake",
        "Hamster",
        "Panda"
    ]
    ,1));

exam.addQuestion(new Question(
    "What is ido's favorite dog breed?",
    [
        "Huski",
        "Corgi",
        "Golden retriever",
        "German Shepard"
    ]
    ,2));

exam.addQuestion(new Question(
    "What is ido's favorite culinary culture?",
    [
        "Indie",
        "Korean",
        "Israeli",
        "Japanese"
    ]
    ,4));

exam.addQuestion(new Question(
    "What is ido's favorite colour?",
    [
        "Yellow",
        "Purple",
        "Red",
        "Blue"
    ]
    ,1));


exam.print();

let answers1 : number[] = [1,2,4,1];
console.log(exam.grade(answers1));

let answers2 : number[] = [1,3,3,1];
console.log(exam.grade(answers2));

let answers3 : number[] = [1,1,1,1];
console.log(exam.grade(answers3));
