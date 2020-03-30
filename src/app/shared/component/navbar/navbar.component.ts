import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_service/auth.service';
import { Role } from '../../domain/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUserRole:Role;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    //this.currentUserRole = this.authService.currentUserRoleValue;
  }

  logout() {
    this.authService.logout();
  }
}
