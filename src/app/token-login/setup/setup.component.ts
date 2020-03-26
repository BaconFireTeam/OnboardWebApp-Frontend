import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from '../../shared/domain/User';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
  providers: [UserService],
})

export class SetupComponent {

  username = 'test';
  account: User;
  email:string = ' ';
  password= 'test';

  constructor(private route: ActivatedRoute
      , private router: Router
      // , private userService: UserService
      , private registerService: RegisterService) {
    this.account = new User();
  }
 
  ngOnInit() {
    this.email = this.registerService.getEmail();
  }
  
  onSubmit() {
    this.router.navigate(['employee/personal']);
    // this.userService.save(this.account).subscribe(result => this.createAccount());
  }

  createAccount() {
    this.router.navigate(['/user']);
  }
}