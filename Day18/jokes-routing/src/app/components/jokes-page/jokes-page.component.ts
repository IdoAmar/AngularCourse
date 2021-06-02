import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Joke } from 'src/app/model/joke';
import { HttpRequestService } from 'src/app/services/http-request.service';
@Component({
  selector: 'app-jokes-page',
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.css']
})
export class JokesPageComponent implements OnInit {

  currentJoke$!: Observable<Joke>;
  nextJokeExist$!: Observable<boolean>;
  previousExist$!: Observable<boolean>;
  isHidden : boolean = false;
  isHidden$: BehaviorSubject<boolean> = new BehaviorSubject(this.isHidden);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {

    let p$ : Observable<[string,string,string]> = this.route.params.pipe(
      map(p => [p['keyword'], p['index'],p['type']]));

    this.currentJoke$ = p$.pipe(
      mergeMap(p =>
        {
        return this.httpRequestService.getJoke(p[0], Number(p[1]), p[2]
      )}
      ),
    );

    this.previousExist$ = p$.pipe(
      mergeMap( p => this.httpRequestService.getJoke(p[0], Number(p[1]) - 1, p[2])),
      map( j =>  j !== undefined)
    );

    this.nextJokeExist$ = p$.pipe(
      mergeMap( p => this.httpRequestService.getJoke(p[0], Number(p[1]) + 1, p[2])),
      map( j => j !== undefined)
    );

  }

  onPunchLineClicked(){
    this.isHidden$.next(true);
  }

  onPreviousClicked() {
    let p = this.route.snapshot.params;
    this.isHidden$.next(false);
    this.router.navigate(["jokes",p['keyword'],Number(p['index']) - 1, p['type']]);
  }

  onNextClicked(){
    let p = this.route.snapshot.params;
    this.isHidden$.next(false);
    this.router.navigate(["jokes",p['keyword'],Number(p['index']) + 1, p['type']]);
  }

  onNewSearchClicked(){
    this.router.navigate([""]);
  }
}
