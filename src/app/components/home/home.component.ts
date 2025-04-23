import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SwaggerService } from '../../shared/services/swagger.service';
import { Product } from '../../shared/models/product';
import { ProductComponent } from '../../shared/components/product/product.component';
import { CommonModule } from '@angular/common';
import { SliderComponent } from "../../shared/components/slider/slider.component";
import { CategoriesComponent } from "../../shared/components/categories/categories.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { RouterLink } from '@angular/router';
import { InfoPaymentComponent } from "../info-payment/info-payment.component";

@Component({
  selector: 'app-home',
  imports: [CarouselModule, CommonModule, ProductComponent, CategoriesComponent, CarouselComponent, RouterLink, InfoPaymentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private swagger:SwaggerService, private el: ElementRef) {}

  allTrends:Product[] = [];

  slider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true, 
    navSpeed: 600,
    autoplayTimeout: 3000,  
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 45,
    navSpeed: 600,
    autoplay: true, 
    autoplayTimeout: 3000,  
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      },
      1200: {
        items: 3
      }
    },
    nav: true
  }
  trends: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 20,
    navSpeed: 600,
    autoplay: true, 
    autoplayTimeout: 3000,  
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1200: {
        items: 5
      }
    },
    nav: true
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getAllTrends(); 
    this.startAutoSlide();
  }

  getAllTrends() {
    this.swagger.getTrends().subscribe((res)=> {
      this.allTrends = res
    })
  }

  @ViewChildren('productCard', { read: ElementRef }) productCards!: QueryList<ElementRef>;


  

// داخل component.ts
@HostListener('window:scroll', [])
onWindowScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((el: any) => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      el.classList.add('opacity-100', 'translate-y-0');
      el.classList.remove('opacity-0', 'translate-y-5');
    }
  });
}




@ViewChildren('serviceBox', { read: ElementRef }) serviceBoxes!: QueryList<ElementRef>;

ngAfterViewInit(): void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '0px 0px -20% 0px' // يخلي الكشف يحصل لما يوصل لنص السكشن تقريبا
  });

  this.serviceBoxes.forEach(box => observer.observe(box.nativeElement));
}



images: string[] = [
  'assets/images/slide1.webp',
  'assets/images/slide2.webp',
  'assets/images/slide3.jpg'
];

currentIndex = 0;
autoSlideInterval: any;


next() {
  this.currentIndex = (this.currentIndex + 1) % this.images.length;
}

prev() {
  this.currentIndex =
    (this.currentIndex - 1 + this.images.length) % this.images.length;
}

goTo(index: number) {
  this.currentIndex = index;
}
startAutoSlide() {
  this.autoSlideInterval = setInterval(() => {
    this.next();
  }, 3000); // يتغير كل 3 ثواني
}

ngOnDestroy(): void {
  clearInterval(this.autoSlideInterval);
}




}
