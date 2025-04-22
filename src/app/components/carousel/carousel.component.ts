import { Component, ViewEncapsulation } from '@angular/core';
import { SliderModule } from 'primeng/slider';
import { CarouselModule } from 'primeng/carousel';
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
}
