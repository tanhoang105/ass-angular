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



  searchValue = '';
  onSearch(event: any) {
    this.searchValue = event.target.value;
    

    // Neu gan cho chinh this.product_search
    // thi sau khi filter mang goc se thay doi
    // xoa filter se khong tra ve kq nua

    // Gan phan hien thi cho 1 mang moi
    // Su dung mang goc de filter
    this.products = this.products.filter((product_search : any)  => {
      // 1. Chuyen ca name va searchValue ve dang viet thuong bang toLowerCase
      // 2. voi searchValue tien hanh .trim() de loai bo khoang trang o 2 dau
      const product_searchNameLowerCase = product_search.name.toLowerCase();
      const searchValueLowerCase = this.searchValue.toLowerCase().trim();

      return product_searchNameLowerCase.indexOf(searchValueLowerCase) !== -1;
    }
    );
  }


  ProductSearch(event:any){

  }
}
