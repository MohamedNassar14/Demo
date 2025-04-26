import { Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
export class CarouselComponent implements OnInit, OnDestroy {


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


@Input() slides: any[] = [];
@Input() autoSlide = false;
@Input() slideInterval = 3000; // Default to 3 seconds

currentSlide = 0;
private intervalId: any;

ngOnInit() {
  if (this.autoSlide) {
    this.startAutoSlide();
  }
}

ngOnDestroy() {
  if (this.intervalId) {
    clearInterval(this.intervalId);
  }
}

startAutoSlide() {
  this.intervalId = setInterval(() => {
    this.next();
  }, this.slideInterval);
}

next() {
  this.currentSlide = (this.currentSlide + 1) % this.slides.length;
}

previous() {
  this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
}

goToSlide(index: number) {
  this.currentSlide = index;
  if (this.autoSlide) {
    this.resetAutoSlide();
  }
}

resetAutoSlide() {
  if (this.intervalId) {
    clearInterval(this.intervalId);
  }
  this.startAutoSlide();
}
}
