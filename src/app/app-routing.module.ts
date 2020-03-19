import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TokenLoginComponent } from './token-login/token-login.component';
import { SetupComponent } from './token-login/setup/setup.component';
import { HomeComponent } from './shared/component/home/home.component';
import {TokenComponent} from './generate-token/token.component';
import { OnboardingComponent } from './token-login/setup/onboarding/onboarding.component';
import { WorkStatusComponent } from './token-login/setup/work-status/work-status.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'token', component: TokenLoginComponent},
  { path: 'setup', component: SetupComponent},
  { path: 'home', component: HomeComponent},
  { path: 'tokens', component: TokenComponent },
  { path: 'personal', component: OnboardingComponent },
  { path: 'work-status', component: WorkStatusComponent },
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
