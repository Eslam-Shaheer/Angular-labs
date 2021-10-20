import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  prdoductsList: Product[];
  categoriesList: Category[];
  category: string = 'Iphone';
  selectedCategory(): any {
    switch (this.category) {
      case 'Iphone':
        return 1;
      case 'Xiaomi':
        return 2;
      case 'Huwaei':
        return 3;
    }
  }

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
    this.prdoductsList = [
      {
        ID: 1,
        Name: 'Iphone se',
        Price: 10000,
        Quantity: 101,
        ImgURL: 'assets/mi-11-lite-product-image-blue_grande_1.png',
        CategoryID: 1,
      },
      {
        ID: 2,
        Name: 'Iphone x',
        Price: 11200,
        Quantity: 20,
        ImgURL: 'assets/mi-11-lite-product-image-blue_grande_1.png',
        CategoryID: 1,
      },
      {
        ID: 3,
        Name: 'Ipohne 6s',
        Price: 15000,
        Quantity: 110,
        ImgURL: 'assets/mi-11-lite-product-image-pink_grande.png',
        CategoryID: 1,
      },
      {
        ID: 4,
        Name: 'Huwaei mate 10',
        Price: 6400,
        Quantity: 240,
        ImgURL: 'assets/mi-11-lite-product-image-pink_grande.png',
        CategoryID: 2,
      },
      {
        ID: 5,
        Name: 'Huwaei p30',
        Price: 7500,
        Quantity: 50,
        ImgURL: 'assets/mi-11-lite-product-image-blue_grande_1.png',
        CategoryID: 2,
      },
      {
        ID: 6,
        Name: 'Huwaei p40',
        Price: 5600,
        Quantity: 30,
        ImgURL: 'assets/mi-11-lite-product-image-pink_grande.png',
        CategoryID: 2,
      },
      {
        ID: 7,
        Name: 'Mi Note 5',
        Price: 4700,
        Quantity: 70,
        ImgURL: 'assets/mi-11-lite-product-image-blue_grande_1.png',
        CategoryID: 3,
      },
      {
        ID: 5,
        Name: 'Mi Note 6',
        Price: 5800,
        Quantity: 80,
        ImgURL: 'assets/mi-11-lite-product-image-pink_grande.png',
        CategoryID: 3,
      },
      {
        ID: 6,
        Name: 'Mi Note 7',
        Price: 3900,
        Quantity: 90,
        ImgURL: 'assets/mi-11-lite-product-image-blue_grande_1.png',
        CategoryID: 3,
      },
    ];
  }

  ngOnInit(): void {}
}
