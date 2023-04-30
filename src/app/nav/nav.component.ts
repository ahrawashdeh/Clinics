import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (user) 
          return true
        else 
          return false
      })
    )
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/login')
  }
}
