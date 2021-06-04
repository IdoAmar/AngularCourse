import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionsService } from './Services/questions.service';
import { TestService } from './Services/test.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  title: string = 'Pop Quiz';
  quizOverText: string = 'Quiz is over!';

  constructor(
    private questionsService : QuestionsService,
    private testService : TestService
    ) {}

  public get isTestDone$() : Observable<boolean>{
    return this.testService.getIsTestDone();
  }

  public get score$(): Observable<number>{
    return this.testService.getIsTestDone().pipe(
      map( b => this.testService.getScore())
      );
  }



}






