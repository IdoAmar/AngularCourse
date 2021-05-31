import { Component } from '@angular/core';
import { Question } from './models/question';
import { questionsArray } from './models/questions-array';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  quizOverText: string;
  currentQuestionIndex: number;
  questionsHistory: Question[];
  testDone: boolean;

  constructor() {
    this.title = 'Pop Quiz';
    this.quizOverText = 'Quiz is over!';
    this.currentQuestionIndex = 0;
    this.questionsHistory = [];
    this.testDone = false;
  }

  public get score(): number {
    let counter = 0;
    for (const item of this.questionsHistory) {
      if (item.correctAnswer == item.userAnswer) {
        counter++;
      }
    }
    return counter / this.questionsHistory.length * 100;
  }
  public get currentQuestion(): Question {
    return questionsArray[this.currentQuestionIndex];
  }

  AddToQuestionHistory(question: Question) {
    this.questionsHistory.push(question);
  }

  AnswerSubmitted(answerIndex: number): void {
    if (!this.testDone) {
      questionsArray[this.currentQuestionIndex].userAnswer = Number(answerIndex + 1);
      this.questionsHistory.push(questionsArray[this.currentQuestionIndex]);
      this.currentQuestionIndex++;
      if (questionsArray[this.currentQuestionIndex] === undefined) {
        this.testDone = true;
      }
    }
  }
}






