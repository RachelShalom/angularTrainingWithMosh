import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  template: `
   
    <span (click)="onStarClick()"> 
    <i class="fa fa-4x " [class.fa-star]="isSelected"></i>
    <i class="fa fa-4x "[class.fa-star-o]="!isSelected" ></i>
    </span>

  `,
  styles: [`
     span { position: absolute; right:50px; top:3px; }
    `]
})
export class FavouriteComponent implements OnInit {
  isSelected:boolean = false;

  onStarClick(){
    this.isSelected=!this.isSelected;
  }

  constructor() { }

  ngOnInit() {
  }

}
