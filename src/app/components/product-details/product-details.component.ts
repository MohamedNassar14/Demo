import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../shared/models/product';
import { SwaggerService } from '../../shared/services/swagger.service';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { SpinnerComponent } from "../../shared/components/spinner/spinner.component";


@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink, NgxImageZoomModule, SpinnerComponent ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private swagger:SwaggerService) {}

  isLoading:boolean = false;
  spinner:boolean = false;
  isOpen:boolean = false;
  productDetails!:Product|undefined;
  quantity:number = 1;
  cartNumber:number = 0;
  selectedImage: string | undefined;


  ngOnInit(): void {
    window.scrollTo(0, 0);
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.spinner = false;
    this.swagger.getProducts().subscribe((res)=> {
      this.spinner = true;
      let details = res.find((ele)=> ele.id == id)
      this.productDetails = details;
      this.selectedImage = details?.imgUrl;
    });
    this.swagger.cartNumbers.subscribe({
      next:(res:any)=> this.cartNumber = res
    })
  }

  openSide()
  {
    this.isOpen = true;
  }

  closeSide()
  {
    this.isOpen = false;
  }

  addToCart(product:any) {
    this.isLoading = true;
    this.swagger.getProductToAdd({product:product, quantity:this.quantity});
    this.isLoading = false;
  }
  zoomOrigin: string = 'center center';
  zoomActive = false;

  @ViewChild('zoomContainer', { static: false }) zoomContainer!: ElementRef;

  onMouseMove(event: MouseEvent) {
    const rect = this.zoomContainer.nativeElement.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    this.zoomOrigin = `${x}% ${y}%`;
    this.zoomActive = true;
  }

  onMouseLeave() {
    this.zoomActive = false;
  }


  isFullScreen = false;

openFullScreen() {
  this.isFullScreen = true;
}

closeFullScreen() {
  this.isFullScreen = false;
}


}
