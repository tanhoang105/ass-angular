import { Component, OnInit } from '@angular/core';
import { ProductSimilarService } from 'src/app/service/product-similar.service';

@Component({
  selector: 'app-products-similar',
  templateUrl: './products-similar.component.html',
  styleUrls: ['./products-similar.component.css']
})
export class ProductsSimilarComponent implements OnInit {

  
  products : any;
 
  constructor( private ps: ProductSimilarService) { }

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
