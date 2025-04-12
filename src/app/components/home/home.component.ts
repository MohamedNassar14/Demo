import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SwaggerService } from '../../shared/services/swagger.service';
import { Product } from '../../shared/models/product';
import { ProductComponent } from "../../shared/components/product/product.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, CarouselModule, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private swagger:SwaggerService) {}

  allTrends:Product[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 10,
    navSpeed: 700,
    autoplay: true, 
    autoplayTimeout: 3000,  
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
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
    navSpeed: 700,
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
  }

  getAllTrends() {
    this.swagger.getTrends().subscribe((res)=> {
      this.allTrends = res
    })
  }
}
