import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'app-questions-history',
  templateUrl: './questions-history.component.html',
  styleUrls: ['./questions-history.component.css']
})
export class QuestionsHistoryComponent implements OnInit {

  @Input() questionsHistory: Question[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
