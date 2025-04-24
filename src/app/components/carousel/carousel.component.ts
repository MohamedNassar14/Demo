import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SliderModule } from 'primeng/slider';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [SliderModule, CommonModule, CarouselModule, ButtonModule, TagModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent {


  images: string[] = [
    'assets/images/villa-house-1.webp',
    'assets/images/villa-house-2.webp',
    'assets/images/villa-house-3.webp'
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true, 
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }


  @ViewChild('owlCar') owlCar: any;

nextSlide() {
  this.owlCar.next();
}

prevSlide() {
  this.owlCar.prev();
}
}
