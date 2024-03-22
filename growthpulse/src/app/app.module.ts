import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PlatformComponent } from './pages/platform/platform.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LandingCoverComponent } from './components/landing-cover/landing-cover.component'
import { LandingValuePropositionComponent } from './components/landing-value-proposition/landing-value-proposition.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    PlatformComponent,
    NavigationComponent,
    LandingCoverComponent,
    LandingValuePropositionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
