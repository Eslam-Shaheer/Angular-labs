import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.scss'],
})
export class CategorySearchComponent implements OnInit {
  categoriesList: Category[] = [];
  selectedCategory: number = 0;
  totalPriceForBoughtItems: number = 0;
  cartItems: any[] = [];
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
  onTotalPriceChanged(OrderTotalPrice: number) {
    this.totalPriceForBoughtItems = OrderTotalPrice;
  }
  onShoppingCartChanged(UserCartItems: any) {
    this.cartItems = UserCartItems;
    console.log(this.cartItems);
  }
}
