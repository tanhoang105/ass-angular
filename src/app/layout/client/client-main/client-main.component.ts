import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-client-main',
  templateUrl: './client-main.component.html',
  styleUrls: ['./client-main.component.css']
})
export class ClientMainComponent implements OnInit {
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
