import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-case',
  template: `
  <h3>Title Case </h3>
    <input [(ngModel)]="title" (keyup)="toTitle()" type="text" class="form-control">
    <p>{{toTitle()}}</p>
  `,
  styles: [`p { text-transform:capitalize}`]
})
export class TitleCaseComponent implements OnInit {
    title:string='';
    toTitle(): string{
        return this.title.toLowerCase().split(' ').map((word)=>{
            return word.charAt(0).toUpperCase()+word.slice(1);
        }).join(' ');
    }

  constructor() { }

  ngOnInit() {
  }

}
