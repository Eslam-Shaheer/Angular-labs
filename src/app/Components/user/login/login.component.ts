import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private usrAuthService: UserAuthService) {}
  login() {
    this.usrAuthService.login('email@email.com', '12345');
    console.log(this.usrAuthService.isLogged());
  }

  logout() {
    this.usrAuthService.logout();
  }
  ngOnInit(): void {}
}
