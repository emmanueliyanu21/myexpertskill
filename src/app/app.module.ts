import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RecruiterComponent } from './components/pages/recruiter/recruiter.component';
import { RegisterComponent } from './components/pages/register/register.component'; 
import { ConsultantComponent } from './components/pages/consultant/consultant.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { FormsModule } from '@angular/forms';
import { ConfirmEqualValidatorDirective } from './components/shared/confirm-equal-validator-directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RecruiterComponent,
    RegisterComponent,
    ConsultantComponent,
    ContactUsComponent,
    BlogComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
