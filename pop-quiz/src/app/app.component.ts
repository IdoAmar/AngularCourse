import { Component } from '@angular/core';
import { Question } from './models/question';

const questionsArray: Question[] = [
  {
    caption: 'What is ido\'s favorite animal?',
    answers: ["Dog", "Snake", "Hamster", "Panda"],
    correctAnswer: 1,
    userAnswer: 0,
  },
  {
    caption: 'What is ido\'s favorite dog breed?',
    answers: ["Huski", "Corgi", "Golden retriever", "Gernan Shepard"],
    correctAnswer: 2,
    userAnswer: 0,
  },
  {
    caption: 'What is ido\'s favorite culinary culture?',
    answers: ["Indie", "Korean", "Middle Eastern", "Japanese"],
    correctAnswer: 4,
    userAnswer: 0,
  },
  {
    caption: 'What is ido\'s favorite colour?',
    answers: ["Yellow", "Purple", "Red", "Blue"],
    correctAnswer: 2,
    userAnswer: 0,
  }
]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Pop Quiz';
  quizOverText: string = "Quiz is over!";
  currentQuestionIndex: number = 0;
  questionsHistory: Question[] = [];
  testDone: boolean = false;

  public get score(): number{
    let counter = 0;
    for (const item of this.questionsHistory) {
      if(item.correctAnswer == item.userAnswer){
        counter++;
      }
    }
    return counter/this.questionsHistory.length * 100;
  }
  public get currentQuestion(): Question {
    return questionsArray[this.currentQuestionIndex];
  }

  AddToQuestionHistory(question: Question) {
    this.questionsHistory.push(question);
  }

  AnswerSubmitted(answerIndex: number): void {
    if (this.currentQuestionIndex <= questionsArray.length -1) {
      console.log(answerIndex);
      questionsArray[this.currentQuestionIndex].userAnswer = Number(answerIndex + 1);
      this.questionsHistory.push(questionsArray[this.currentQuestionIndex]);
      this.currentQuestionIndex++;
      if(this.currentQuestionIndex === questionsArray.length){
        this.testDone = true;
      }
    }
  }



}

