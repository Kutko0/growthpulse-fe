import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ValuePropositionLandingComponent } from './components/value-proposition-landing/value-proposition-landing.component';
import { LandingCoverComponent } from './components/landing-cover/landing-cover.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ValuePropositionLandingComponent,
    LandingCoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
