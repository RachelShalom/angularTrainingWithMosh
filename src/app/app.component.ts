import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My new App';
  post={
      title:"Hello",
      isFavourite:true
  }
  onStarChange(eventArgs){
      console.log("THe star has changed: "+ JSON.stringify(eventArgs));
  }
}
