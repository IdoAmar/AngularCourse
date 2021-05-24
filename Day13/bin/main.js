"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var question_1 = require("./question");
var exam_1 = require("./exam");
console.log("Hey");
var exam = new exam_1.Exam();
exam.addQuestion(new question_1.Question("What is ido's favorite animal?", [
    "Dog",
    "Snake",
    "Hamster",
    "Panda"
], 1));
exam.addQuestion(new question_1.Question("What is ido's favorite dog breed?", [
    "Huski",
    "Corgi",
    "Golden retriever",
    "German Shepard"
], 2));
exam.addQuestion(new question_1.Question("What is ido's favorite culinary culture?", [
    "Indie",
    "Korean",
    "Israeli",
    "Japanese"
], 4));
exam.addQuestion(new question_1.Question("What is ido's favorite colour?", [
    "Yellow",
    "Purple",
    "Red",
    "Blue"
], 1));
exam.print();
var answers1 = [1, 2, 4, 1];
console.log(exam.grade(answers1));
var answers2 = [1, 3, 3, 1];
console.log(exam.grade(answers2));
var answers3 = [1, 1, 1, 1];
console.log(exam.grade(answers3));
//# sourceMappingURL=main.js.map