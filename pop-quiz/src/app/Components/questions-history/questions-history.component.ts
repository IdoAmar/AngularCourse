import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { TestService } from 'src/app/Services/test.service';
import { Question } from '../../models/question';

@Component({
  selector: 'app-questions-history',
  templateUrl: './questions-history.component.html',
  styleUrls: ['./questions-history.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionsHistoryComponent implements OnInit {

  
  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  public get questionsHistory$() : Observable<Question[]>{
    return this.testService.getQuestionsHistory();
  }
}
