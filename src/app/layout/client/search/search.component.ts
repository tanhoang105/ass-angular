import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface ERROR {
  hasName: string,
    required: string,
    minlength:string,
    [key:string]: string
};

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input('formField') Formdata : any ;
  // @Output() resultSearch : EventEmitter<any> ;
  dataSearch :any ;
  constructor() {

   } 

  ngOnInit(): void {
    //  this.resultSearch  = new EventEmitter();
    //  this.resultSearch.emit(this.Formdata);
    // console.log(this.Formdata.value)
  }

 

















  // searchValue = '';
  // // spread, lay tat ca phan tu cua student dua
  // // gan cho filterStudents bang gia tri cua this.students
  // filterStudents = this.students;

  // onSearch(event: any) {
  //   this.searchValue = event.target.value;
    

  //   // Neu gan cho chinh this.student
  //   // thi sau khi filter mang goc se thay doi
  //   // xoa filter se khong tra ve kq nua

  //   // Gan phan hien thi cho 1 mang moi
  //   // Su dung mang goc de filter
  //   this.filterStudents = this.students.filter(student => {
  //     // 1. Chuyen ca name va searchValue ve dang viet thuong bang toLowerCase
  //     // 2. voi searchValue tien hanh .trim() de loai bo khoang trang o 2 dau
  //     const studentNameLowerCase = student.name.toLowerCase();
  //     const searchValueLowerCase = this.searchValue.toLowerCase().trim();

  //     return studentNameLowerCase.indexOf(searchValueLowerCase) !== -1;
  //   }
  //   );
  // }
}
