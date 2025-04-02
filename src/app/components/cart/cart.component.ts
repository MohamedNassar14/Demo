import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductDetails } from '../../shared/models/product-details';
import { SwaggerService } from '../../shared/services/swagger.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(private swagger:SwaggerService) {}

  isOpen:boolean = false;
  productsCart:ProductDetails[] = [];
  totalPrice = 0;
  cartNumber:number = 0;

  ngOnInit(): void {
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
    if(localStorage.getItem('productsCart') !== null)
      {
        this.productsCart = JSON.parse(localStorage.getItem('productsCart')!);
      }
  }
  plusProduct(index:number)
  {
    this.productsCart[index].quantity++;
    localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
    this.getTotalPrice();
  }

  minusProduct(index:number)
  {
    this.productsCart[index].quantity--;
    if(this.productsCart[index].quantity == 0)
    {
      this.productsCart.splice(index, 1);
      localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
    }
    else
    {
      localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
    }
    this.getTotalPrice();
  }
  removeProduct(index:number)
  {
    this.productsCart.splice(index, 1);
    localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
    this.getTotalPrice();
  }

  getTotalPrice()
  {
    this.totalPrice = 0;
    for(let product of this.productsCart)
    {
      this.totalPrice += product.product.price * product.quantity;
    }
  }

}
