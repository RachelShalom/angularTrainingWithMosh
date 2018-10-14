import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome'
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FormsModule} from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { BootstrapCardComponent } from './bootstrap-card/bootstrap-card.component';
import { LikeComponent } from './like/like.component'
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavouriteComponent,
    TitleCaseComponent,
    BootstrapCardComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
