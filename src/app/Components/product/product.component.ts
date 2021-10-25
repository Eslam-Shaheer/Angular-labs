import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productID: number = 1;
  product: Product | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        this.productID = Number(params.get('id'));
        this.product = this.productService.getProductByID(this.productID);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  prevProduct() {
    this.router.navigate(['/product/', --this.productID]);
  }
  nextProduct() {
    this.router.navigate(['/product/', ++this.productID]);
  }
}
