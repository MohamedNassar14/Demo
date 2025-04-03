import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { SwaggerService } from '../../shared/services/swagger.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../shared/components/product/product.component';

@Component({
  selector: 'app-products',
  imports: [RouterLink, CommonModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor(private swagger:SwaggerService, private activatedRoute:ActivatedRoute) {}

  isOpen:boolean = false;
  allProducts:Product[] = [];
  cartNumber:number = 0;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.swagger.cartNumbers.subscribe({
      next:(data)=> this.cartNumber = data
    })
    let {name} = this.activatedRoute.snapshot.params;
    this.getAllProducts(name);
  }

  getAllProducts(categoryName:string) {
    this.swagger.getProducts().subscribe((res)=> {
       this.allProducts = res.filter((product)=> product.catName == categoryName)
    });
  }

  openSide()
  {
    this.isOpen = true;
  }

  closeSide()
  {
    this.isOpen = false;
  }

}
