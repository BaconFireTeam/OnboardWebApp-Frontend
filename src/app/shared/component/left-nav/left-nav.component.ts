import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_service/auth.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  currentUserRole:string;
  currentUserId:number;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUserRoleSubject.subscribe((role) => {
      this.currentUserRole = role;
    });
    this.authService.currentUserIdSubject.subscribe((id) => {
      this.currentUserId = id;
    });
  }

}
