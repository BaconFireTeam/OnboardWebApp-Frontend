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

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'token', component: TokenLoginComponent},
  { path: 'setup', component: SetupComponent},
  { path: 'home', component: HomeComponent},
  { path: 'tokens', component: TokenComponent },
  { path: 'personal', component: OnboardingComponent },
  { path: 'work-status', component: WorkStatusComponent },
  { path: 'driver', component: DrivingStatusComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: 'emergency', component: EmergencyContactComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
