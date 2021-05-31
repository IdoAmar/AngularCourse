import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class Game {
    
    private r : number = 0;
    private g : number = 0;
    private b : number = 0;

    private r$ : BehaviorSubject<number> = new BehaviorSubject(this.r);
    private g$ : BehaviorSubject<number> = new BehaviorSubject(this.g);
    private b$ : BehaviorSubject<number> = new BehaviorSubject(this.b);

    private randomRgbSet : [number,number,number] = [0,0,0];

    private randomRgbSet$ : BehaviorSubject<[number,number,number]> = new BehaviorSubject(this.randomRgbSet);


    constructor() {
    }
    GetRed(): Observable<number> {
        return this.r$.asObservable();
    }

    GetGreen(): Observable<number> {
        return this.g$.asObservable();
    }

    GetBlue(): Observable<number> {
        return this.b$.asObservable();
    }

    SetRed(value: number): void {
        this.r = value;
        this.r$.next(this.r);
    }


    SetGreen(value: number): void {
        this.g = value;
        this.g$.next(this.g);
    }

    SetBlue(value: number): void {
        this.b = value;
        this.b$.next(this.b);
    }

    GetComputerColor(): Observable<[number, number, number]> {
        return this.randomRgbSet$.asObservable();
    }

    RandomizeColor() : void{
        this.randomRgbSet = [this.getRandomColor(),this.getRandomColor(),this.getRandomColor()];
        this.randomRgbSet$.next(this.randomRgbSet);
    }

    private getRandomColor(): number {
        return Math.floor((Math.random() * 256));
    }
}
