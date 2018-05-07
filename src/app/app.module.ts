import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// Components
import { NavbarComponent } from './components/navbar/navbar.component';
// Sections
import { LandingComponent } from './sections/landing/landing.component';
import { IntroductionComponent } from './sections/introduction/introduction.component';
import { ServicesComponent } from './sections/services/services.component';
import { CardComponent } from './components/card/card.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';
import { OurWorkComponent } from './sections/our-work/our-work.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    IntroductionComponent,
    ServicesComponent,
    CardComponent,
    ContactUsComponent,
    OurWorkComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
