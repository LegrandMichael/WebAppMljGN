import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TaskComponent } from './task/task.component';
import { InformationsComponent } from './informations/informations.component';
import { DocumentsComponent } from './documents/documents.component';
import { TrainingComponent } from './training/training.component';
import { EventsComponent } from './events/events.component';
import { AccountComponent } from './account/account.component';
import { AuthenticationComponent } from './authentication/authentication.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TaskComponent,
    InformationsComponent,
    DocumentsComponent,
    TrainingComponent,
    EventsComponent,
    AccountComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
