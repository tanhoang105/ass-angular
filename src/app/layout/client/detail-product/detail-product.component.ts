import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  detailProduct: any;
  similar_pr : any;
  id : any;
  constructor(
    private activRoute: ActivatedRoute, // su dung de lay id tren url
    private router: Router, // su dung de dieu huong
    private ps: ProductService
    
  ) { }

  ngOnInit(): void {
    // this.id = this.activRoute.snapshot.params['id'];
    // // sản phẩm detail
    // this.ps.getProduct(this.id).subscribe(data => {
    //   this.detailProduct = data
    //   this.detailProduct.name = this.detailProduct.name.toUpperCase();
    // });
    // // sản phẩm tương tự
    // this.ps.getProducts().subscribe(data=> {
    //   this.similar_pr = data;
    //   console.log(this.similar_pr)
    // })
    this.showDetail();
  }

  showDetail(){
    this.id = this.activRoute.snapshot.params['id'];
    // sản phẩm detail
    this.ps.getProduct(this.id).subscribe(data => {
      this.detailProduct = data
      this.detailProduct.name = this.detailProduct.name.toUpperCase();
      console.log(this.detailProduct)
    });
    // sản phẩm tương tự
    this.ps.getProducts().subscribe(data=> {
      this.similar_pr = data;
      console.log(this.similar_pr)
    })
    
  }
 

}
