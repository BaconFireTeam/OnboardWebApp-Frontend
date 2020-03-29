import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TokenLoginComponent } from './token-login/token-login.component';
import { SetupComponent } from './token-login/setup/setup.component';
import { HomeComponent } from './shared/component/home/home.component';
import { TokenComponent } from './generate-token/token.component';
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
import { HrHouseDetailComponent } from './hr-house-detail/hr-house-detail.component';
import { from } from 'rxjs';

import { HrReviewApplicationComponent } from './hr-review/hr-review-application/hr-review-application.component';
import { ApplicationDetailComponent } from './hr-review/application-detail/application-detail.component';
import { ApplicationFilesComponent } from './hr-review/application-files/application-files.component';

import { ReportCommentComponent } from './report-comment/report-comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { AddCommentHrComponent } from './add-comment-hr/add-comment-hr.component';
import { AddReportComponent } from './add-report/add-report.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonDetailEmployeeComponent } from './person-detail-employee/person-detail-employee.component'
const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'token', component: TokenLoginComponent },
  
  { path: 'employee', children: [
    // { path: 'personal', component: OnboardingComponent},
    { path: 'home', component: HomeComponent},
    { path: 'personal', component: OnboardingComponent },
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
    { path: 'detailhouse', component: HrHouseDetailComponent },
    { path: 'reviewapplication', component: HrReviewApplicationComponent },
    { path: 'applicationdetail', component: ApplicationDetailComponent },
    { path: 'filesdetail', component: ApplicationFilesComponent },
  ]},

  { path: 'setup', component: SetupComponent},
  { path: 'home', component: HomeComponent },
  { path: 'token-setup', component: TokenComponent },
  { path: 'personal', component: OnboardingComponent },
  { path: 'work-status', component: WorkStatusComponent },
  { path: 'driver', component: DrivingStatusComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: 'emergency', component: EmergencyContactComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'emp-visa', component: EmpVisaComponent },
  { path: 'hr/listhouse', component: HrHouseComponent },
  { path: 'report-detail', component: ReportCommentComponent },
  { path: 'hr/detailhouse', component: HrHouseDetailComponent },
  { path: 'add-comment', component: AddCommentComponent },
  { path: 'add-comment-hr', component: AddCommentHrComponent },
  { path: 'add-report', component: AddReportComponent },
  { path: 'person-detail', component: PersonDetailComponent },
  { path: 'person-detail-employee', component: PersonDetailEmployeeComponent },
  { path: 'employee/detailhouse', component: HouseComponent },
  { path: '**', redirectTo: '/login' }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
