import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  currentNumber1 : number = 0;
  currentNumber2 : number = 0;
  savedNumber1 : number = 0;
  savedNumber2 : number = 0;
  addRes : number = 0;
  subRes : number = 0;
  mulRes : number = 0;
  show : boolean = false;
  setNumber1(num : string) : void{
      this.currentNumber1 = Number(num);
  }
  setNumber2(num : string) : void{
      this.currentNumber2 = Number(num);
  }
  add() : number{
      return this.currentNumber1 + this.currentNumber2;
  }
  sub() : number{
      return this.currentNumber1 - this.currentNumber2;
  }
  multiply() : number{
      return this.currentNumber1 * this.currentNumber2;
  }

  assignResults() : void{
      this.addRes = this.add();
      this.subRes = this.sub();
      this.mulRes = this.multiply();
      this.savedNumber1 = this.currentNumber1;
      this.savedNumber2 = this.currentNumber2;
      this.show = true;
  }
}

