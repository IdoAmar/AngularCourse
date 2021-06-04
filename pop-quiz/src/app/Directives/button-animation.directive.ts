import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appButtonAnimation]'
})
export class ButtonAnimationDirective {
  isHovered: boolean = false;
  isMouseDown: boolean = false;
  blurRadius: number = 0;
  
  @Input()
  maxBlurRadius: number = 10;
  @Input()
  clickedBlurRadius: number = 4;



  constructor(private elementRef: ElementRef) {
  }

  @HostListener('mousedown')
  onMouseDown() {    
    this.isMouseDown = true;
    this.animateMouseDown();
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp() {  
    this.isMouseDown = false;
    if (this.isHovered) {
      this.animateFadeIn();
    }
    else {
      this.animateFadeOut();

    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {  
    this.isHovered = true;
    requestAnimationFrame(this.animateFadeIn.bind(this));
  }

  @HostListener('mouseleave')
  onMouseLeave() {  
    this.isHovered = false;
    this.animateFadeOut();
  }

  animateFadeIn(): void {
    if (this.elementRef !== undefined && this.blurRadius < this.maxBlurRadius &&
      this.isHovered && !this.isMouseDown) {

      this.elementRef.nativeElement.style.boxShadow =
        "0px 0px " + this.blurRadius + "px " + "1px " + "gray"
      this.blurRadius++
      requestAnimationFrame(this.animateFadeIn.bind(this));
    }
    else {
      return;
    }
  }


  animateFadeOut(): void {

    if (this.elementRef !== undefined && !this.isMouseDown && this.blurRadius > 0 &&
      !this.isHovered) {

      this.elementRef.nativeElement.style.boxShadow =
        "0px 0px " + this.blurRadius + "px " + "1px " + "gray";
      this.blurRadius--;
      requestAnimationFrame(this.animateFadeOut.bind(this));
    }
    else {
      if (this.elementRef !== undefined && !this.isMouseDown) {
        this.elementRef.nativeElement.style.boxShadow = "";
      }
      return;
    }
  }

  animateMouseDown(): void {

    if (this.elementRef !== undefined && this.blurRadius !== this.clickedBlurRadius && this.isMouseDown) {
      
      this.elementRef.nativeElement.style.boxShadow =
        "0px 0px " + this.blurRadius + "px " + "1px " + "gray";
      if (this.blurRadius < this.clickedBlurRadius) {
        this.blurRadius++;
        requestAnimationFrame(this.animateMouseDown.bind(this));
      }
      else {
        console.log("blur radius is:" + this.blurRadius)
        this.blurRadius--;
        requestAnimationFrame(this.animateMouseDown.bind(this));
      }
    }
    else {
      return;
    }
  }

}
