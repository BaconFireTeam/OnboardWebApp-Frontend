import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  AlertService } from '../shared/_service/alert.service';
import {  AuthService } from '../shared/_service/auth.service';

import { first } from 'rxjs/operators';

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

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService,
      private alertService: AlertService
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
      this.authService.checkToken(this.f.email.value, this.f.token.value).subscribe(
        (res) => {
          console.log(res);
        
            if (res.success) {
                this.router.navigate(['/setup']);
            } else {
                this.loading = false;
                console.log("invalid");
            }
        }
      );
    //   this.authService.validToken(this.f.email.value, this.f.token.value)
            // .pipe(first())
            // .subscribe(
            //     data => {
            //         this.router.navigate([this.returnUrl]);
            //     },
            //     error => {
            //         this.alertService.error(error);
            //         this.loading = false;
            //     });
  }

}
