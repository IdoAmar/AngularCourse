import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ServicesService {
    randomColor: string = "";
    randomColor$ = new BehaviorSubject<string>(this.randomColor);
    userColors: string = "";
    userColors$ = new BehaviorSubject<string>(this.userColors);
    constructor() {
    }
    GetRed(): Observable<string> {
        return this.userColors$.pipe(map(s => s.split(",")[0]));
    }

    GetGreen(): Observable<string> {
        return this.userColors$.pipe(map(s => s.split(",")[1]));

    }

    GetBlue(): Observable<string> {
        return this.userColors$.pipe(map(s => s.split(",")[2]));

    }

    SetRed(value: number): void {
        let l = this.userColors.split(",");
        l[0] = value.toString();
        this.userColors = l.join(",")
        this.userColors$.next(this.userColors);
    }


    SetGreen(value: number): void {
        let l = this.userColors.split(",");
        l[1] = value.toString();
        this.userColors = l.join(",")
        this.userColors$.next(this.userColors);
    }

    SetBlue(value: number): void {
        let l = this.userColors.split(",");
        l[2] = value.toString();
        this.userColors = l.join(",")
        this.userColors$.next(this.userColors);

    }

    GetComputerColor(): Observable<[number, number, number]> {
        return this.randomColor$.pipe(map(s => {
            let str = s.split(",");
            return [Number(s[0]),Number(s[1]),Number(s[2])];
        })

    }

    RandomizeColor(): void {

    }
}
