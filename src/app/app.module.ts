import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';
import { InformationsComponent } from './informations/informations.component';
import { DocumentsComponent } from './documents/documents.component';
import { TrainingComponent } from './training/training.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TaskComponent,
    LoginComponent,
    InformationsComponent,
    DocumentsComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
