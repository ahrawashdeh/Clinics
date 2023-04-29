import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return this.accountService.currentUser$.subscribe(response => {
      if (response)
        return true
      return false
    });
  }

  logout() {
    this.accountService.logout();
  }
}
