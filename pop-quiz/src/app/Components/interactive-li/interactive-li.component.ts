import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-interactive-li',
  templateUrl: './interactive-li.component.html',
  styleUrls: ['./interactive-li.component.css']
})
export class InteractiveLiComponent implements OnInit, AfterViewInit {

  isHovered = false;
  isMouseDown = false;

  @ViewChild('listItem') listItem: ElementRef | undefined;
  currentElement: HTMLElement | undefined
  blurRadius: number = 0;

  readonly intervalTime: number = 6;
  readonly maxBlurRadius: number = 10;
  readonly clickedBlurRadius: number = 4;

  constructor() {
  }
  ngAfterViewInit(): void {
    this.currentElement = this.listItem?.nativeElement;
  }

  ngOnInit(): void {

  }
  onMouseOver() {
    if (this.isMouseDown) {
      this.isHovered = false;
    }
    else {
      this.isHovered = true;
      this.animateHoverFadeIn();
    }
  }


  onMouseOut() {
    this.isHovered = false;
    this.animateHoverFadeOut();
  }



  onMouseDown() {
    let interval = setInterval(() => {
      if (this.currentElement !== undefined) {
        this.currentElement.style.boxShadow = "0px 0px " + this.blurRadius + "px " + "1px " + "gray";
        if (this.blurRadius < this.clickedBlurRadius) {
          this.blurRadius++;
        }
        else {
          this.blurRadius--;
        }
        if (this.blurRadius === this.clickedBlurRadius || !this.isMouseDown) {
          clearInterval(interval);
        }
      }
    }, this.intervalTime);
    this.isMouseDown = true;

  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp() {
    this.isMouseDown = false;
  }


  animateHoverFadeIn(): void {
    if (this.currentElement !== undefined && this.blurRadius < this.maxBlurRadius &&
      this.isHovered && !this.isMouseDown) {

      this.currentElement.style.boxShadow = "0px 0px " + this.blurRadius + "px " + "1px " + "gray"
      this.blurRadius++
      requestAnimationFrame(this.animateHoverFadeIn.bind(this));
    }
    else {
      return;
    }
  }


  animateHoverFadeOut() : void {

    if (this.currentElement !== undefined && !this.isMouseDown && this.blurRadius > 0 &&
      !this.isHovered) {

      this.currentElement.style.boxShadow = "0px 0px " + this.blurRadius + "px " + "1px " + "gray";
      this.blurRadius--;
      requestAnimationFrame(this.animateHoverFadeOut.bind(this));
    }
    else {
      if (this.currentElement !== undefined) {
        this.currentElement.style.boxShadow = "";
      }
      return;
    }
  }

  animateButtonDown() : void {

    if (this.currentElement !== undefined && this.blurRadius !== this.clickedBlurRadius && this.isMouseDown) {
      this.currentElement.style.boxShadow = "0px 0px " + this.blurRadius + "px " + "1px " + "gray";
      if (this.blurRadius < this.clickedBlurRadius) {
        this.blurRadius++;
      }
      else {
        this.blurRadius--;
      }
    }
    else{
      return;
    }  
  }

}
