import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RetrievalService } from './retrieval.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticateService } from './authenticate.service';
import { AuthguardService } from './authguard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PricePipe } from './price.pipe';
import { TimestampPipe } from './timestamp.pipe';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PricePipe,
    TimestampPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    HttpClientModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [
    AuthenticateService,
    AuthguardService,
    RetrievalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
