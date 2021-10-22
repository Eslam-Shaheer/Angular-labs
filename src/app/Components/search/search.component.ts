import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  categoriesList: Category[] = [];
  category: number = 0;
  constructor() {
    this.categoriesList = [
      {
        ID: 1,
        Name: 'Iphone',
      },
      {
        ID: 2,
        Name: 'Xiaomi',
      },
      {
        ID: 3,
        Name: 'Huwaei',
      },
    ];
  }

  ngOnInit(): void {}
}
