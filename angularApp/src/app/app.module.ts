import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/interceptor';

import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ClockComponent } from './clock/clock.component';
import { SignalRService } from 'src/app/services/signal-r.service';
import { SerComponent } from './ser/ser.component';
import { MapComponent } from './map/map.component';

import { CanActivateViaAuthGuard } from './guard/auth.guard';

import { AgmCoreModule } from '@agm/core';
import { RentComponent } from './rent/rent.component';
import { BranchComponent } from './branch/branch.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { TypeOfVehicleComponent } from './type-of-vehicle/type-of-vehicle.component';
import { SerPreviewComponent } from './ser-preview/ser-preview.component';
import { CommentComponent } from './comment/comment.component';
import { ApproveComponent } from './approve/approve.component';

import { FileSelectDirective } from 'ng2-file-upload';
import { NavbarComponent } from './navbar/navbar.component';

const Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: "reg",
    component: RegComponent
  },
  {
    path: "map",
    component: MapComponent
  },
  {
    path: "vehicle",
    component: VehicleComponent
  },
  {
    path: "approve",
    component: ApproveComponent
  },
  {
    path: "tov",
    component: TypeOfVehicleComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "rent",
    component: RentComponent
  },
  {
    path: '',
    component: SerComponent
  },
  {
    path: 'prev/:id',
    component: SerPreviewComponent
  },
  {
    path: "other",
    redirectTo: ''
  }
]

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ClockComponent,
    SerComponent,
    MapComponent,
    RentComponent,
    BranchComponent,
    VehicleComponent,
    TypeOfVehicleComponent,
    SerPreviewComponent,
    CommentComponent,
    ApproveComponent,
    FileSelectDirective,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    HttpModule,
    HttpClientModule,
    HttpClientXsrfModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDnihJyw_34z5S1KZXp90pfTGAqhFszNJk'})
  ],
  providers: [
    SignalRService, 
    CanActivateViaAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: 'CanAlwaysActivateGuard',
      useValue: () => {
        return true;
      } 
    }],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
