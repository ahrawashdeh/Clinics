import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  name: string = '';
  password: string = '';

  constructor(private authService: AccountService, private router: Router, private toaster: ToastrService) {}

  login() {
    const token = this.authService.login(this.name, this.password);

    if (token) {
      this.router.navigate(['/']);
    } else {
      this.toaster.error("Invalid email or password")
    }
  }

}
