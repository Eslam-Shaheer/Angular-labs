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
  constructor() {}

  ngOnInit(): void {}
}
