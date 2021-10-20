import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  asideElem: string[] = [
    'Home',
    'Dashboard',
    'Order',
    'About us',
    'contact',
    'Customer',
    'Product',
  ];
  constructor() {}

  ngOnInit(): void {}
}
