import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  template: `
    <p>
    <span [style.dislpay]="none"><i class="fa fa-star fa-4x" ></i></span>
    <span ><i class="fa fa-star-o fa-4x" ></i></span>
    </p>
  `,
  styles: []
})
export class FavouriteComponent implements OnInit {
  isSelected:boolean = false;

  onClick(){
    this.isSelected=!this.isSelected;
  }

  constructor() { }

  ngOnInit() {
  }

}
