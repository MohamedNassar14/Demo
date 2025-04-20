import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductDetails } from '../../shared/models/product-details';
import { SwaggerService } from '../../shared/services/swagger.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(private swagger:SwaggerService, private toast:ToastrService) {}

  isOpen:boolean = false;
  productsCart:ProductDetails[] = [];
  totalPrice = 0;
  cartNumber:number = 0;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getAllProductsCart();
    this.getTotalPrice();
    this.swagger.cartNumbers.subscribe({
      next:(data)=> this.cartNumber = data
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

  getAllProductsCart() {
    if(localStorage.getItem('productsCart') !== null) {
        this.productsCart = JSON.parse(localStorage.getItem('productsCart')!);
      }
  }
  plusProduct(index:number) {
    this.productsCart[index].quantity++;
    localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
    this.swagger.cartNumbers.next(this.productsCart.length);
    this.getTotalPrice();
    this.toast.success(`<div class="flex items-center gap-2 text-green-500">
      ✔️ <span>Product increment by 1 </span>
    </div>`, '',{
             toastClass: 'toast-success', enableHtml: true});
  }

  minusProduct(index:number) {
    this.productsCart[index].quantity--;
    if(this.productsCart[index].quantity == 0)
    {
      this.productsCart.splice(index, 1);
      localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
      this.swagger.cartNumbers.next(this.productsCart.length);
      this.toast.error(`<div class="flex items-center gap-2 text-red-500">
     ❌ <span>Product removed from cart</span>
   </div>`, '',{
        toastClass: 'toast-error', enableHtml: true});
    }
    else
    {
      localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
      this.swagger.cartNumbers.next(this.productsCart.length);
      this.toast.success(`<div class="flex items-center gap-2 text-green-500">
        ✔️ <span>Product decrement by 1 </span>
      </div>`, '',{
               toastClass: 'toast-success', enableHtml: true});
    }
    this.getTotalPrice();
  }
  removeProduct(index:number) {
    this.productsCart.splice(index, 1);
    localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
    this.swagger.cartNumbers.next(this.productsCart.length);
    this.toast.error(`<div class="flex items-center gap-2 text-red-500">
      ❌ <span> Product removed from cart</span>
    </div>`, '',{
         toastClass: 'toast-error', enableHtml: true});
    this.getTotalPrice();
  }

  getTotalPrice() {
    this.totalPrice = 0;
    for(let product of this.productsCart)
    {
      this.totalPrice += product.product.price * product.quantity;
    }
  }

}
