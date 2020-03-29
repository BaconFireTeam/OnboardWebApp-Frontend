import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';
import { HouseService } from '../shared/_service/house.service';


// import { AlertService,
import { AuthService } from '../shared/_service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private houseService: HouseService,
        // private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authService.currentUserValue) { 
            this.router.navigate(['/home']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authService.login(this.f.username.value, this.f.password.value).subscribe(
        (res) => {
          console.log(res);
        
            if (res) {
                this.houseService.employeeID=res.id;
                this.router.navigate(['/home']);
            } else {
                this.loading = false;
                console.log("invalid");
            }
        }
      );
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
                    this.loading = false;
                // });
    }
}
