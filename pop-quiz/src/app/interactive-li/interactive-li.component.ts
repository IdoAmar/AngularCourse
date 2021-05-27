import { Component, OnInit } from '@angular/core';

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
    this.isHovered = true;
  }
  onMouseOut(){
    this.isHovered = false;
  }
  onMouseDown(){
    this.isMouseDown = true;
  }
  onMouseUp(){
    this.isMouseDown = false;
  }
}
