import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../../register.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  public firstName: string = '';
  public lastName: string = '';
  public middleName: string = '';
  public email: string = '';
  public gender: string;
  public cellPhone: string = '';
  public altPhone: string = '';
  public ssn: string = '';
  public dob: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private registerService: RegisterService) { }

  
  ngOnInit(): void {
    this.email = this.registerService.getEmail();
  }

  chooseGender(event: any){
    this.gender = event.target.value;
  }

  onSubmit(){
    this.router.navigate(['/work-status']);
  }
}
