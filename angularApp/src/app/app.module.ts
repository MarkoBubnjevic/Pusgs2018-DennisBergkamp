import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    HttpModule,
    HttpClientModule,
    HttpClientXsrfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
