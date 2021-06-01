import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, observable, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Game } from './services/Game.service';
import { Color } from './models/color-type';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rx-colors';
  isWon$!: Observable<boolean>;
  isGameStarted$ : BehaviorSubject<boolean> =new BehaviorSubject<boolean>(false);
  isGameStartedObservable$ :Observable<boolean> = this.isGameStarted$.asObservable();
  
  combinedCondition$! : Observable<"NotStarted"|"Started"|"Won">;
  constructor(private game: Game) {

  }

  ngOnInit() {
    let userColor$ = combineLatest([this.game.GetRed(),
    this.game.GetGreen(),
    this.game.GetBlue()]);

    this.isWon$ = combineLatest([this.game.GetComputerColor(), userColor$])
                 .pipe(
                  map(t => this.compareRGB(t[0],t[1]))
                  );

    this.combinedCondition$ = combineLatest([this.isGameStarted$,this.isWon$])
                              .pipe(
                                    map( t => {
                                      if(!t[0]){
                                        return "NotStarted";
                                      }
                                      if(t[0] && !t[1]){
                                        return "Started";
                                      }
                                      return "Won";
                                    }
                                    ));
  }

  onRandomizePress() {
    this.isGameStarted$.next(true);
    this.game.RandomizeColor();
  }

  private compareRGB(firstColor: Color, secondColor: Color) {
    if (firstColor[0] === secondColor[0] &&
      firstColor[1] === secondColor[1] &&
      firstColor[2] === secondColor[2]) {
      return true;
    }
    return false;
  }
}
