import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  prdoductsList: Product[] = [];

  constructor() {
    this.prdoductsList = [
      {
        ID: 1,
        Name: 'Iphone se',
        Price: 10000,
        Quantity: 101,
        ImgURL: 'assets/iphone.png',
        CategoryID: 1,
      },
      {
        ID: 2,
        Name: 'Iphone x',
        Price: 11200,
        Quantity: 2,
        ImgURL: 'assets/iphone2.png',
        CategoryID: 1,
      },
      {
        ID: 3,
        Name: 'Ipohne 6s',
        Price: 15000,
        Quantity: 110,
        ImgURL: 'assets/mxw_640,f_auto.png',
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
        Quantity: 2,
        ImgURL: 'assets/mi-11-lite-product-image-blue_grande_1.png',
        CategoryID: 3,
      },
      {
        ID: 8,
        Name: 'Mi Note 6',
        Price: 5800,
        Quantity: 1,
        ImgURL: 'assets/mi-11-lite-product-image-pink_grande.png',
        CategoryID: 3,
      },
      {
        ID: 9,
        Name: 'Mi Note 7',
        Price: 3900,
        Quantity: 0,
        ImgURL: 'assets/mi-11-lite-product-image-blue_grande_1.png',
        CategoryID: 3,
      },
    ];
  }
  getAllProducts(): Product[] {
    return this.prdoductsList;
  }

  getProductsByCatID(catID: number): Product[] {
    return this.prdoductsList.filter((item) => item.CategoryID == catID);
  }

  getProductByID(pID: number): Product | undefined {
    return this.prdoductsList.find((item) => item.ID == pID);
  }
}
