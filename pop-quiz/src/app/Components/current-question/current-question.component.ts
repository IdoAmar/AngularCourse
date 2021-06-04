import { Component, OnInit , Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { Question } from '../../models/question';
import { TestService } from 'src/app/Services/test.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-current-question',
  templateUrl: './current-question.component.html',
  styleUrls: ['./current-question.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentQuestionComponent implements OnInit {

  constructor(
    private testService : TestService
  ) { 

  }

  public get currentQuestion$() : Observable<Question>{
    return this.testService.getCurrentQuestion();
  }


  ngOnInit(): void {
  }
  onUserAnswerChosen(index : number){
    this.testService.SubmitAnswer(index);
  }
}
