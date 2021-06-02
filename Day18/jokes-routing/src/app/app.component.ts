import { Component, OnInit } from '@angular/core';
import { Joke } from './model/joke';
import { HttpRequestService } from './services/http-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jokes-routing';
  constructor(private httpRequestService : HttpRequestService){

  }
  async ngOnInit() : Promise<void>{
  }

}
