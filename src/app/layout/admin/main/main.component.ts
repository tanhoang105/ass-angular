import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products : any;
  
  constructor( private ps: ProductService) { 

  }

  ngOnInit(): void {
    this.getList();
  }


  // lấy danh sách sản phẩm
  getList(){
    this.ps.getProducts().subscribe(data => {
      this.products = data ;
      console.log(this.products);
    })
  }

  // xóa sản phẩm 
  delete(id:number){
    this.ps.deleteProduct(id).subscribe(data => {
      this.products = data;
      this.getList();
    })
  }

   ConfirmDelete()
 {
  var x = confirm("Bạn chắc chắn muốn xóa sản phẩm chứ");
  if (x)
      return true;
  else
    return false;
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
