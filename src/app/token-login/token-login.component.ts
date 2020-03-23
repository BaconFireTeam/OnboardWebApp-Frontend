import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  AlertService } from '../shared/_service/alert.service';
import {  AuthService } from '../shared/_service/auth.service';

import { first } from 'rxjs/operators';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-token-login',
  templateUrl: './token-login.component.html',
  styleUrls: ['./token-login.component.css']
})
export class TokenLoginComponent implements OnInit {

  tokenValidForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  testEmail: string = "test@mail.com";
  testToken: string = 't3sT';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService,
      private alertService: AlertService,
      private registerService: RegisterService
  ) {
      // redirect to home if already logged in
      // if (this.authenticationService.currentUserValue) { 
      //     this.router.navigate(['/']);
      // }
  }

  ngOnInit() {
      this.tokenValidForm = this.formBuilder.group({
          email: ['', Validators.required],
          token: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.tokenValidForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.tokenValidForm.invalid) {
          return;
      }

      console.log(this.f.email.value)
      console.log(this.f.token.value)

      this.loading = true;
      if(this.f.email.value == this.testEmail && this.f.token.value == this.testToken) {
        this.registerService.setEmail(this.f.email.value);
        this.router.navigate(['/setup']);
      } else {
        this.loading = false;
        console.log("invalid");
      }
// comment for front end test
//////////////////////////////////////////////////////////////////////////      
  //     this.authService.checkToken(this.f.email.value, this.f.token.value).subscribe(
  //       (res) => {
  //         console.log(res);
        
  //           if (res.success) {
  //               this.registerService.setEmail(this.f.email.value);
  //               this.router.navigate(['/setup']);
  //           } else {
  //               this.loading = false;
  //               console.log("invalid");
  //           }
  //       }
  //     );
  }

}
