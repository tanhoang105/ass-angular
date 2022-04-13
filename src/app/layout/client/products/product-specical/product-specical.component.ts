import { Component, OnInit } from '@angular/core';
import { ProductSpecicalService } from 'src/app/service/product-specical.service';

@Component({
  selector: 'app-product-specical',
  templateUrl: './product-specical.component.html',
  styleUrls: ['./product-specical.component.css']
})
export class ProductSpecicalComponent implements OnInit {

  products : any;
 
  constructor( private ps: ProductSpecicalService) { }

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
