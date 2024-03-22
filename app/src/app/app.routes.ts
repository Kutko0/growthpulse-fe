import {Routes} from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PlatformComponent } from './pages/platform/platform.component';

export const routes = [
    {path: '/', component: LandingPageComponent},
    {path: '/login', component: LoginComponent},
    {path: '/register', component: RegisterComponent},
    {path: '/platform', component: PlatformComponent},
];