import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: any = {}

  constructor(private authService: AccountService, private router: Router) {}

  register() {
    this.authService.register(this.user);
    this.router.navigate(['/login']);
  }

}
