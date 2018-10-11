import {Component} from "@angular/core"
import { getOrCreateInjectable } from "../../node_modules/@angular/core/src/render3/di";
import { CoursesService } from "./courses.service";

@Component({
    selector:"courses",
    template:`
    <favourite></favourite>
    <h2>{{getTitle()}}</h2>
    <p>{{text|summary:20}}</p>
    <ul>
    <li *ngFor="let course of courses">{{course}}</li>
    </ul>
    <div (click)=onDivClick($event)>
    <button (click)= onclick() type="button" class="btn btn-primary">Save</button>
    <input type="text"  [(ngModel)]="email" (keydown.enter)="onkeypress()" class="form-control">
    </div>
    <p>
    {{course.title |uppercase}}<br>
    {{course.rating | number:'1.1-1'}}<br>
    {{course.students}}<br>
    {{course.price | currency: "USD":"symbol-narrow" }}<br>
    {{course.date | date:'fullDate'}}<br>
    </p>
    `,
    // url=https://source.unsplash.com/random
    //<img [src]= "url" >
    styles:[`table, th, td {
        border: 1px solid black;
    }`]
})
export class CoursesComponent{
    title="List of courses"
    text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    courses;
    email="email";
    isActive=false;
    course={
        title:"The complete Angular course",
        rating:5.95645,
        students:150,
        price:20,
        date:new Date(1,1,2018)
    }
   


    getTitle(){
        return this.title
    }
    onkeypress(){
        console.log(this.email)

    }

    onclick(inputRef){
        event.stopPropagation();
        console.log("a button was clicked", this.email)
    }
    onDivClick(event){
        console.log(" a div was clicked", event.target)
    }
// here we added courses service as a dependency of this class ( we need to register it as a provider in the app module)
    constructor(service: CoursesService){
        this.courses= service.getCourses();
    }
}