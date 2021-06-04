import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Question } from '../models/question';
import { QuestionsService } from './questions.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private currentQuestionIndex: number = 0;
  private questionsHistory: Question[] = [];
  private testDone: boolean = false;
  private questionsArray: Question[];

  private currentQuestion$: BehaviorSubject<Question>;

  private questionsHistory$: BehaviorSubject<Question[]> =
    new BehaviorSubject(this.questionsHistory);

  private testDone$: BehaviorSubject<boolean> =
    new BehaviorSubject(this.testDone);


  constructor(private questionsService: QuestionsService) {
    this.questionsArray = questionsService.getQuestionsArray();
    this.currentQuestion$ = new BehaviorSubject(
      this.questionsArray[this.currentQuestionIndex])
  }

  public getScore(): number {
    let counter = 0;
    for (const item of this.questionsHistory) {
      if (item.correctAnswer == item.userAnswer) {
        counter++;
      }
    }
    return counter / this.questionsHistory.length * 100;
  }

  public getCurrentQuestion(): Observable<Question> {
    return this.currentQuestion$.asObservable();
  }

  public getQuestionsHistory(): Observable<Question[]> {
    return this.questionsHistory$.asObservable();
  }

  public getIsTestDone(): Observable<boolean> {
    return this.testDone$.asObservable();
  }

  AddToQuestionHistory(question: Question) {
    this.questionsHistory.push(question);
    this.questionsHistory$.next(this.questionsHistory);
  }

  SubmitAnswer(answerIndex: number): void {
    if (!this.testDone) {
      this.questionsArray[this.currentQuestionIndex].userAnswer = Number(answerIndex + 1);

      this.questionsHistory.push(this.questionsArray[this.currentQuestionIndex]);
      this.questionsHistory$.next(this.questionsHistory);

      this.currentQuestionIndex++;
      this.currentQuestion$.next(this.questionsArray[this.currentQuestionIndex])

      if (this.questionsArray[this.currentQuestionIndex] === undefined) {
        this.testDone = true;
        this.testDone$.next(this.testDone);
      }
    }
  }
}
