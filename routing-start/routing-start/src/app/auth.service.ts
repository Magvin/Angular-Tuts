import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;


  isAuth() {
    const promise = new Promise(
      (res, rej) => {
        setTimeout(() => {
          res(this.loggedIn)
        }, 1000);
      }
    );
    return promise
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
