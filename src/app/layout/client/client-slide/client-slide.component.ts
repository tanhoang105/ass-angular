import { Component, OnInit } from '@angular/core';
import { SlideService } from 'src/app/service/slide.service';

@Component({
  selector: 'app-client-slide',
  templateUrl: './client-slide.component.html',
  styleUrls: ['./client-slide.component.css']
})
export class ClientSlideComponent implements OnInit {
  slides: any;
  constructor( private slide: SlideService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.slide.getSlides().subscribe(data=> {
      this.slides = data ;
      console.log(this.slides);
    })
  }

}
