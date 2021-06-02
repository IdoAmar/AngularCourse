import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  jokeTypes : string[] = [];
  currentJokeType : string = "";
  constructor(
    private httpRequestService : HttpRequestService,
    private router : Router) { }

  async ngOnInit(): Promise<void> {
   this.jokeTypes = await this.httpRequestService.jokeTypes;

  }

  async ngAfterViewInit(): Promise<void> {
  }

  onSelectionChanged(argument : string){
    this.currentJokeType = argument;

  }

  onSearchInit(keyword : string){
    this.router.navigate(["jokes",keyword,"0",this.currentJokeType])
  }
}
