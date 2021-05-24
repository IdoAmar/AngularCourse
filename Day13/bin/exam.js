"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    function Exam() {
        this.questionsArray = [];
    }
    Exam.prototype.addQuestion = function (question) {
        this.questionsArray.push(question);
    };
    Exam.prototype.grade = function (answers) {
        var correctQuestions = 0;
        for (var i = 0; i < Math.min(answers.length, this.questionsArray.length); i++) {
            if (answers[i] == this.questionsArray[i].correctIndex) {
                correctQuestions++;
            }
        }
        return correctQuestions / this.questionsArray.length * 100;
    };
    Exam.prototype.print = function () {
        var counter = 1;
        this.questionsArray.forEach(function (element) {
            console.log("Question No." + counter + " Question : " + element.caption);
            element.answers.forEach(function (element) {
                var innerCounter = 1;
                console.log(innerCounter + ". " + element);
            });
        });
    };
    return Exam;
}());
exports.Exam = Exam;
//# sourceMappingURL=exam.js.map