import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products-default',
  templateUrl: './products-default.component.html',
  styleUrls: ['./products-default.component.css']
})
export class ProductsDefaultComponent implements OnInit {

  products : any;
 
  constructor( private ps: ProductService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.ps.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }

}
