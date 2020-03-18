import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from '../shared/domain/User';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})

export class SetupComponent {

  account: User;
  email="name@domain.com";

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.account = new User();
  }

  onSubmit() {
    this.userService.save(this.account).subscribe(result => this.createAccount());
  }

  createAccount() {
    this.router.navigate(['/users']);
  }
}