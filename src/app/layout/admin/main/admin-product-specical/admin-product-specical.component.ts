import { Component, OnInit } from '@angular/core';
import { ProductSpecicalService } from 'src/app/service/product-specical.service';

@Component({
  selector: 'app-admin-product-specical',
  templateUrl: './admin-product-specical.component.html',
  styleUrls: ['./admin-product-specical.component.css']
})
export class AdminProductSpecicalComponent implements OnInit {
  products : any
  constructor( private ps: ProductSpecicalService) { }

  ngOnInit(): void {
    this.getList()
  }


  getList(){
    this.ps.getProducts().subscribe(data => {
      this.products = data ;
      console.log(this.products);
    })
  }

  delete(id:number){
    this.ps.deleteProduct(id).subscribe(data => {
      this.products = data;
      this.getList();
    })
  }


  parentChangeStatus(newStatus:number, productId:number) {
    const currentProduct = this.products.find((product:any) =>
      product.id === productId
    );

    if (currentProduct) {
      this.ps.upDateProduct(
        productId,
        {
          ...currentProduct,
          status: newStatus
        }
      ).subscribe((data) => {
        this.getList();
      });
    }


  }

}
