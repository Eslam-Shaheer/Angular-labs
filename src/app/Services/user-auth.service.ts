import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private isUsrLogged: boolean = false;
  constructor() {}
  login(usrEmail: string, usrPass: string) {
    let fakeToken: string = '';
    fakeToken = 'AngDemo123';
    localStorage.setItem('usrToken', fakeToken);
    this.isUsrLogged = true;
  }

  logout() {
    // Call logout API
    localStorage.removeItem('usrToken');

    this.isUsrLogged = false;
  }

  isLogged(): boolean {
    return this.isUsrLogged;
  }
}
