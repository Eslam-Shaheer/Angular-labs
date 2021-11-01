import { Component, OnInit } from '@angular/core';
import { Reqresproduct } from 'src/app/Models/reqresproduct';
import { ReqresapiService } from 'src/app/Services/reqresapi.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-reqresproduct',
  templateUrl: './reqresproduct.component.html',
  styleUrls: ['./reqresproduct.component.scss'],
})
export class ReqresproductComponent implements OnInit {
  productList!: Reqresproduct[];
  constructor(private reqresProduct: ReqresapiService) {}

  ngOnInit(): void {
    this.reqresProduct
      .getAllProduct()
      .pipe(
        map((data) => {
          return data.data;
        })
      )
      .subscribe((products) => {
        this.productList = products;
        console.log(this.productList);
      });
  }
}
