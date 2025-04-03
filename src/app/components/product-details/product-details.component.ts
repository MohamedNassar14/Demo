import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../shared/models/product';
import { SwaggerService } from '../../shared/services/swagger.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private swagger:SwaggerService) {}

  isOpen:boolean = false;
  productDetails!:Product|undefined;
  quantity:number = 1;
  cartNumber:number = 0;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.swagger.getProducts().subscribe((res)=> {
      let details = res.find((ele)=> ele.id == id)
      this.productDetails = details
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
    this.swagger.getProductToAdd({product:product, quantity:this.quantity});
  }

}
