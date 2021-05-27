import { Component, OnInit, Input, HostListener} from '@angular/core';
@Component({
  selector: 'app-interactive-li',
  templateUrl: './interactive-li.component.html',
  styleUrls: ['./interactive-li.component.css']
})
export class InteractiveLiComponent implements OnInit {

  isHovered = false;
  isMouseDown = false;
  ngOnInit(): void {
  }
  onMouseOver(){
    if(this.isMouseDown){
      this.isHovered = false;
    }
    else{
    this.isHovered = true;
    }
  }
  onMouseOut(){
    this.isHovered = false;
  }
  onMouseDown(){
    this.isMouseDown = true;
  }

  @HostListener('document:mouseup',['$event'])
  onMouseUp(){
    this.isMouseDown = false;
  }
  
}
