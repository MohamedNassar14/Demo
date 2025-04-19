import { Component, OnInit, ViewChild } from '@angular/core';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-slider',
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() {}

  images: string[] = [
    'assets/images/slide1.webp',
    'assets/images/slide2.webp',
    'assets/images/slide3.jpg'
  ];

  @ViewChild('carousel') carousel!: Carousel; // ربط الـcarousel هنا

  activeIndex: number = 0; // تعريف المتغير للتتبع

  responsiveOptions: any[] = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  ngOnInit(): void {}

  // دالة للانتقال إلى الصورة السابقة
  goToPrev() {
    this.activeIndex = (this.activeIndex > 0) ? this.activeIndex - 1 : this.images.length - 1;
  }

  // دالة للانتقال إلى الصورة التالية
  goToNext() {
    this.activeIndex = (this.activeIndex < this.images.length - 1) ? this.activeIndex + 1 : 0;
  }
}
