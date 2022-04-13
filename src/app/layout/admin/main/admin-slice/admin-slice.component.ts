import { Component, OnInit } from '@angular/core';
import { SlideService } from 'src/app/service/slide.service';

@Component({
  selector: 'app-admin-slice',
  templateUrl: './admin-slice.component.html',
  styleUrls: ['./admin-slice.component.css']
})
export class AdminSliceComponent implements OnInit {
  slices : any;
  constructor(
    private ps: SlideService
  ) { }

  ngOnInit(): void {
    this.getList()
  }


  getList(){
    this.ps.getSlides().subscribe(data => {
      this.slices = data ;
      console.log(this.slices);
    })
  }

  delete(id:number){
    this.ps.deleteSlice(id).subscribe(data => {
      this.slices = data;
      this.getList();
    })
  }

}
