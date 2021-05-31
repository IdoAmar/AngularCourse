import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from '../../services/Game.service';
@Component({
  selector: 'app-display-color',
  templateUrl: './display-color.component.html',
  styleUrls: ['./display-color.component.css']
})
export class DisplayColorComponent implements OnInit {

  userColor$!: Observable<string>;

  constructor(public game: Game) { }

  ngOnInit(): void {
    this.userColor$ = combineLatest(
      [this.game.GetRed(),
       this.game.GetGreen(),
       this.game.GetBlue()]).pipe(
                                  map(o => `rgb(${o[0]},${o[1]},${o[2]})`));
      
  }
}
