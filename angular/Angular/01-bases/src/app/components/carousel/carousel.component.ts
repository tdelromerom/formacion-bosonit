import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {
  plan : string[] = ["PLAN 1", "PLAN 2", "PLAN 3", "PLAN 4", "PLAN 5", "PLAN 6", "PLAN 7"];
  responsiveOptions: { breakpoint: string; numVisible: number; numScroll: number; }[] = [];
  constructor() { 
  }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

}
