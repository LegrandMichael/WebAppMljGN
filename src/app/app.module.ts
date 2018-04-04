import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
