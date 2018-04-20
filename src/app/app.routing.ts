import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { TaskComponent } from './task/task.component';
import { AuthGuard } from './_guard/index';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'connexion',
        component: AuthenticationComponent
    },
    {
        path: 'demandes',
        component: TaskComponent,
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
