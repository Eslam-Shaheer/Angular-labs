import { Component, OnInit } from '@angular/core';
import { StoreInfo } from 'src/app/Models/store-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cstName: string = '';
  cstCardNumber: any = '';
  show: boolean = true;
  greating: string = '';
  personalInformation: any;
  Pinfo: boolean = true;
  displayName() {
    console.log(this.cstName);
    this.greating = `Welcome Mr ${this.cstName}`;
  }
  showCredit() {
    this.show = !this.show;
  }
  showPinfo() {
    this.Pinfo = !this.Pinfo;
  }
  constructor() {}

  ngOnInit(): void {}
}
