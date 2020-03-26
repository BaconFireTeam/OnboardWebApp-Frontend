import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TokenLoginComponent } from './token-login/token-login.component';
import { SetupComponent } from './token-login/setup/setup.component';
import { HomeComponent } from './shared/component/home/home.component';
import {TokenComponent} from './generate-token/token.component';
import { OnboardingComponent } from './token-login/setup/onboarding/onboarding.component';
import { WorkStatusComponent } from './token-login/setup/work-status/work-status.component';
import { DrivingStatusComponent } from './token-login/setup/driving-status/driving-status.component';
import { ReferenceComponent } from './token-login/setup/reference/reference.component';
import { EmergencyContactComponent } from './token-login/setup/emergency-contact/emergency-contact.component';
import { DocumentsComponent } from './token-login/setup/documents/documents.component';
import { EmpVisaComponent } from './emp-visa/emp-visa.component';

import { HrVisaComponent } from './hr-visa/hr-visa.component';
import { ErrorComponent } from './shared/component/error/error.component';

import { HrHouseComponent } from './hr-house/hr-house.component';
import { HouseComponent } from './house/house.component';
import {HrHouseDetailComponent} from './hr-house-detail/hr-house-detail.component';
import { from } from 'rxjs';


const routes: Routes = [
  
  { path: 'login', component: LoginComponent},
  { path: 'token', component: TokenLoginComponent},

  { path: 'employee', children: [
    { path: 'personal', component: OnboardingComponent},
    { path: 'home', component: HomeComponent},
    // { path: 'personal', component: OnboardingComponent },
    { path: 'work-status', component: WorkStatusComponent },
    { path: 'driver', component: DrivingStatusComponent },
    { path: 'reference', component: ReferenceComponent },
    { path: 'emergency', component: EmergencyContactComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'visa', component: EmpVisaComponent},
    { path: 'detailhouse', component: HouseComponent },
    { path: '**', redirectTo: 'home'}
  ]},

  { path: 'hr', children: [
    { path: 'visa', component: HrVisaComponent },
    { path: 'listhouse', component: HrHouseComponent },
    { path: 'detailhouse', component: HrHouseDetailComponent }
  ]},

  { path: 'setup', component: SetupComponent},
  { path: 'token-setup', component: TokenComponent },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
