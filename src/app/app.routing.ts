import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
       path: 'login',
       component: AuthenticationComponent
    },
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
