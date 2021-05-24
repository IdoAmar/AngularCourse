import {Question} from "./question";

export class Exam{
    private questionsArray : Question[] = [];
    constructor() {

    }
    addQuestion(question : Question) : void{
        this.questionsArray.push(question);
    }

    grade(answers : number[]): number{
        let correctQuestions = 0;
        for (let i = 0; i < Math.min(answers.length,this.questionsArray.length); i++) {
            if(answers[i] == this.questionsArray[i].correctIndex){
                correctQuestions++;
            }        
        }
        return correctQuestions / this.questionsArray.length * 100;
    }

    print() : void{
        let counter : number = 1;
        this.questionsArray.forEach(element => {
            console.log(`Question No.${counter} Question : ${element.caption}`);
            element.answers.forEach(element => {
                let innerCounter = 1;
                console.log(innerCounter + ". " + element);
            });
        });
    }


}