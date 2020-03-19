import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_service/auth.service'
import { User } from '../../domain/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   currentUser:User;
  constructor(private authService: AuthService) { 
    
  }

  
  ngOnInit(): void {
    this.currentUser = this.authService.currentUserValue;
  }

}
