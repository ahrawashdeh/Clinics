import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly TOKEN_KEY = 'my_app_token';
  private readonly USERS_KEY = 'my_app_users';
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor() {}

  public getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY) as string;
  }

  public setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.currentUserSource.next(null);
  }

  public login(username: string, password: string): boolean {

    const token = this.generateToken(username, password);
    this.setToken(token);
    return true;
  }

  public logout(): void {
    this.removeToken();
  }

  public isLoggedIn(): boolean {
    const token = this.getToken();
    
    if (!token) {
      return false;
    }
    return true
    // const decodedToken = this.decodeToken(token);
    // return decodedToken.exp > Date.now() / 1000;
  }

  setCurrentUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  private generateToken(username: string, password: string): string {
    const tokenPayload = {
      sub: username,
      exp: Math.floor(Date.now() / 1000) + (60 * 60) // Token expires in 1 hour
    };
    const tokenData = JSON.stringify(tokenPayload);
    const token = btoa(tokenData + password); // Combine token data with password and encode it using base64
    return token;
  }

  // private decodeToken(token: string): any {
  //   const decodedToken = atob(token); // Decode the token from base64
  //   const tokenPayload = decodedToken.substring(0, decodedToken.length - 8); // Remove password from the decoded token
  //   return JSON.parse(tokenPayload)
  // }

  public register(user: User): void {
    // Generate a unique ID for the new user
    const users = this.getUsers();
    const lastUserId = users.length > 0 ? users[users.length - 1].id : 0;
    const newUserId = lastUserId + 1;
    // Set the ID for the new user and save the user data in local storage
    const newUser = { ...user, id: newUserId };
    users.push(newUser);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    this.setCurrentUser(user)
  }

  private getUsers(): User[] {
    const usersString = localStorage.getItem(this.USERS_KEY);
    if (!usersString) {
      return [];
    }
    return JSON.parse(usersString);
  }
}
