import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from '../model/joke';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  
  baseUrl : string = "http://localhost:3000/jokes";
  jokeTypes! : Promise<string[]>;
  constructor(private http: HttpClient){
    this.getJokeTypes();
  }

  getJoke(keyword : string , index : number, type : string) : Promise<Joke>{
    let params = (new HttpParams()).set('q',keyword).set('_start',index).set('_limit',1);
    if(type !== '' && type !== null && type !== undefined){
      params = params.set('type',type);
    }
    return this.http.get<Joke[]>(this.baseUrl,{params}).pipe(
      map( a => a[0])
    ).toPromise();
  }
   getJokeTypes(): void{
    this.jokeTypes = this.http.get<Joke[]>(this.baseUrl).pipe(
      map( a => ([...new Set(a.map(v => v.type))]))
    ).toPromise();
  }
}
