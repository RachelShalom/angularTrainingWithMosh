import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
    constructor() { }
    @Input() numberOfLikes:number;
    @Input() isLiked:boolean;

    onlike(){
     


        }

    }

  

}
