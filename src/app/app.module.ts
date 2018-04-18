import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink, Router, RouterModule } from '@angular/router';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { AuthGuard } from './_guard/index';
import { Routing } from './app.routing';

import { AccountComponent } from './account/account.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationService } from './authentication/authentication.service';
import { DocumentsComponent } from './documents/documents.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventsComponent } from './events/events.component';
import { InformationsComponent } from './informations/informations.component';
import { TaskComponent } from './task/task.component';
import { TrainingComponent } from './training/training.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({}), http, options);
}


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
        FormsModule,
        RouterModule,
        HttpModule,
        Routing
    ],
    providers: [
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        },
        AuthGuard,
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
