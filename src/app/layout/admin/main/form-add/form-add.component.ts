import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
  formInput : FormGroup ;
  productDetail:any;
  id:any;
  imageBase64: any;
  constructor(
    private activRoute: ActivatedRoute, // su dung de lay id tren url
    private router: Router, // su dung de dieu huong
    private ps: ProductService
  ) {
    this.formInput = new FormGroup({
      name : new FormControl ('',[
        Validators.required,
        Validators.minLength(6),
      ]),
      desc : new FormControl ('',[
        Validators.required,
        Validators.minLength(6),
      ]),
      price : new FormControl ('',[
        Validators.required,
      ]),
      avatar : new FormControl (''),
      status : new FormControl (''),
    });
   }

  ngOnInit(): void {
    this.id = this.activRoute.snapshot.params['id'];
    console.log(this.id);
   
    if (this.id !== undefined) {
      this.ps.getProduct(this.id).subscribe(data => {
        this.productDetail = data;
        console.log(this.productDetail);
        this.formInput = new FormGroup({
          name : new FormControl (this.productDetail.name),
          desc : new FormControl (this.productDetail.desc),
          price : new FormControl (this.productDetail.price),
          avatar : new FormControl (this.productDetail.avatar),
          status : new FormControl (this.productDetail.status),
        });
      })
    } else {
      this.productDetail = {
        name: '',
        desc: '',
        avatar: '',
        price : 0,
        status : 0
      };
    }
  }
 


  onSubmit (obj :any) {
    // Nhan du lieu tu form, tien hanh call API
    this.id = this.activRoute.snapshot.params['id'];
    if (this.id !== undefined) {
      if(this.imageBase64 === undefined ){
        obj.avatar = this.productDetail.avatar;
        // console.log(this.productDetail.avatar);
      }else {
        obj.avatar = this.imageBase64;
        console.log(this.productDetail.avatar);
      }
      this.ps.upDateProduct(this.id, obj).subscribe();
    } else {
      obj.avatar = this.imageBase64;
      this.ps.createProduct(obj).subscribe();
    }
    
    // Tien hanh dieu huong ve trang danh sach
    this.router.navigate(['/admin']);
  }

  change(event :any){
    console.log(event.target.files);

    // 1. Định nghĩa việc đọc file
    const reader = new FileReader();
    // 2. Định nghĩa quá trình đọc file
    reader.onload = (e) => {
      this.imageBase64 = e.target?.result;
    };

    // 3. Đọc file lấy từ input
    reader.readAsDataURL(event.target.files[0]);
  }

}




