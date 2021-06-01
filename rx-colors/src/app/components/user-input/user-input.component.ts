import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/services/Game.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  constructor(private game : Game) { }

  ngOnInit(): void {
  }

  SetRedColor(input : string){
    this.game.SetRed(Number(input));
  }
  
  SetGreenColor(input : string){
    this.game.SetGreen(Number(input));
  }

  SetBlueColor(input : string){
    this.game.SetBlue(Number(input));
  }
}
