import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Token } from '../shared/domain/token';
import { TokenService } from './token.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-generate-token',
    templateUrl: './token.component.html',
    styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
    tokenObject:Token;
    token: string;
    emailForm: FormGroup;
    submitted = false;
    


    constructor(private formBuilder: FormBuilder,private router: Router,private tokenService: TokenService) { this.tokenObject = new Token();}
    emailsMatchValidator(form: FormGroup) {
        return
    }

    ngOnInit() {
        this.emailForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            confirm: ['', [Validators.required, Validators.email]]
        }, {
            validator: (form: FormGroup) => { return form.get('email').value !== form.get('confirm').value ? { emailMismatch: true } : null }
        }
        );
    }

    get f() { return this.emailForm.controls; }
    get isEmailMismatch() { return this.emailForm.getError('emailMismatch') }


    randomString() {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        this.token = result;
    }

    onSubmit() {
        this.submitted = true;
        this.tokenObject.token = this.token;
        this.tokenObject.email = this.emailForm.controls['email'].value
        
        this.tokenService.save(this.tokenObject);
        if (this.emailForm.invalid) {
            return;
        } else {
            console.log(JSON.stringify(this.emailForm.value));
            console.log(JSON.stringify(this.tokenObject));
            this.tokenService.save(this.tokenObject).subscribe(result => this.goBack());
        }
    }
    goBack() {
        this.router.navigate(['/token-setup']);
      }

}





