import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TokenLoginComponent } from './token-login/token-login.component';
import { SetupComponent } from './token-login/setup/setup.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './shared/component/home/home.component';
import { UserService } from './token-login/setup/user.service'
import { HouseService } from './shared/_service/house.service'
import { TokenComponent } from './generate-token/token.component';
import { OnboardingComponent } from './token-login/setup/onboarding/onboarding.component';
import { WorkStatusComponent } from './token-login/setup/work-status/work-status.component';
import { DrivingStatusComponent } from './token-login/setup/driving-status/driving-status.component';
import { ReferenceComponent } from './token-login/setup/reference/reference.component';
import { EmergencyContactComponent } from './token-login/setup/emergency-contact/emergency-contact.component';
import { DocumentsComponent } from './token-login/setup/documents/documents.component';
import { EmpVisaComponent } from './emp-visa/emp-visa.component';
import { HouseComponent } from './house/house.component';
import { HrHouseComponent } from './hr-house/hr-house.component';
import { HrHouseDetailComponent } from './hr-house-detail/hr-house-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TokenLoginComponent,
    SetupComponent,
    NavbarComponent,
    HomeComponent,
    TokenComponent,
    OnboardingComponent,
    WorkStatusComponent,
    DrivingStatusComponent,
    ReferenceComponent,
    EmergencyContactComponent,
    DocumentsComponent,
    EmpVisaComponent,
    HouseComponent,
    HrHouseComponent,
    HrHouseDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
