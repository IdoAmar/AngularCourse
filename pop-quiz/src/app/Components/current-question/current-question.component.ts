import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { EmptyError } from 'rxjs';
import { Question } from '../../models/question';

@Component({
  selector: 'app-current-question',
  templateUrl: './current-question.component.html',
  styleUrls: ['./current-question.component.css']
})
export class CurrentQuestionComponent implements OnInit {
  @Input() currentQuestion: Question = {
    caption : "",
    answers : [],
    correctAnswer : 0,
    userAnswer : 0
  }
  @Output() userAnswerChosenEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  onUserAnswerChosen(index : number){
    this.userAnswerChosenEvent.emit(index)
  }
}
