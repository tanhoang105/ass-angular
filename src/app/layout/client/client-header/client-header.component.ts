import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.css']
})
export class ClientHeaderComponent implements OnInit {

  products : any;
  result : any ;
  formInput : FormGroup;
 
 
  constructor( 
    private ps: ProductService
    
  ) { 
   
    this.formInput = new FormGroup({
      ProductValueSearch : new FormControl (''),
      
    });
  }

  ngOnInit(): void {
  
  }

  getList(){
    this.ps.getProducts().subscribe(data => {
      this.products = data;
      
    })
  }

  submit(obj:any){
    console.log(obj)
  }



  // searchValue = '';
  // onSearch(event: any) {
  //   this.searchValue = event.target.value;
    
  //   this.getList();
  //   // Neu gan cho chinh this.product_search
  //   // thi sau khi filter mang goc se thay doi
  //   // xoa filter se khong tra ve kq nua

  //   // Gan phan hien thi cho 1 mang moi
  //   // Su dung mang goc de filter
  //     this.products = this.products.filter((product_search : any)  => {
  //       // 1. Chuyen ca name va searchValue ve dang viet thuong bang toLowerCase
  //       // 2. voi searchValue tien hanh .trim() de loai bo khoang trang o 2 dau
  //         const product_searchNameLowerCase = product_search.name.toLowerCase();
  //         const searchValueLowerCase = this.searchValue.toLowerCase().trim();
  //        return product_searchNameLowerCase.indexOf(searchValueLowerCase) !== -1;
  //         // gán result cho sự kiện trả về cha
  //         // console.log(1111)
  //         this.returnData.emit(this.result);

  //         return this.result
  //       }
  //     );
    
  // }

 
}
