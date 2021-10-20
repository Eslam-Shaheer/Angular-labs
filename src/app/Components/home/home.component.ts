import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  asideElem: string[] = [
    'Home',
    'Dashboard',
    'About us',
    'contact',
    'Customer',
    'Product',
  ];
  constructor() {}

  ngOnInit(): void {}
}
