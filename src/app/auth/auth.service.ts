import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 public _userIsAuthenticated=false;
 get userIsAuthenticated(){
   return this._userIsAuthenticated;
 }
 constructor() { }
  login(){
    this._userIsAuthenticated= true;
  }
  logout(){
    this._userIsAuthenticated= false;
  }
}
