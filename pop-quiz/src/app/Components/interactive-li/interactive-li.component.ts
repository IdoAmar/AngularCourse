import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-interactive-li',
  templateUrl: './interactive-li.component.html',
  styleUrls: ['./interactive-li.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteractiveLiComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {
  }


}
