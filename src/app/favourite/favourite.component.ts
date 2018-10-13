import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  template: `
   
    <span (click)="onStarClick()"> 
    <i class="fa fa-4x " [class.fa-star]="isFavourite"></i>
    <i class="fa fa-4x "[class.fa-star-o]="!isFavourite" ></i>
    </span>

  `,
  styles: [
    `
     span { position: absolute; right:50px; top:3px; }
    `]
})
export class FavouriteComponent implements OnInit {
  @Input('is-selected') isFavourite:boolean;
  @Output('change') click= new EventEmitter()

  onStarClick(){
    this.isFavourite=!this.isFavourite;
    this.click.emit({newValue: this.isFavourite});
  }

  constructor() { }

  ngOnInit() {
  }

}
