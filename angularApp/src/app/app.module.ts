import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ClockComponent } from './clock/clock.component';
import { SignalRService } from 'src/app/services/signal-r.service';

const Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "reg",
    component: RegComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "clock",
    component: ClockComponent
  },
  {
    path: "other",
    redirectTo: "home"
  }
]

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    HttpModule,
    HttpClientModule,
    HttpClientXsrfModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
