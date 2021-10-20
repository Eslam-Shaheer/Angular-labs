import { Component, OnInit } from '@angular/core';
import { StoreInfo } from 'src/app/Models/store-info';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cstName: string = '';
  Store: StoreInfo = {
    name: 'Pluto Store',
    logo: 'assets/download.png',
    services: ['Mobile', 'Tablet', 'Laptop'],
    establishDate: new Date(),
  };
  greating: string = '';
  displayName() {
    console.log(this.cstName);
    this.greating = `Welcome Mr ${this.cstName}`;
  }

  constructor() {}

  ngOnInit(): void {}
}
