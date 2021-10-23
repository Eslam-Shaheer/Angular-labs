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
  cartItems: any[] = [];

  totalPrice: number = 0;
  totalPriceWithTax: number = 0;
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

  addItemToshoppingCartItems(UserCartItems: any) {
    this.totalPrice = 0;
    this.totalPriceWithTax = 0;
    let newItem = this.cartItems.find(
      (item, index) => UserCartItems.productID == item.productID
    );
    if (newItem) {
      newItem.selectedQuantity = UserCartItems.selectedQuantity;
    } else {
      this.cartItems.push(UserCartItems);
    }
    for (let i of this.cartItems) {
      this.totalPrice += i.unitPrice * i.selectedQuantity;
      this.totalPriceWithTax = this.totalPrice * 1.14;
    }
  }
}
