import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { SwaggerService } from '../../shared/services/swagger.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../shared/components/product/product.component';
import { SpinnerComponent } from "../../shared/components/spinner/spinner.component";

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductComponent, SpinnerComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor(private swagger:SwaggerService, private activatedRoute:ActivatedRoute, private cdRef: ChangeDetectorRef) {}

  activeCategoryId: number = 0; // Initial category ID (can be null or 0)
  cat:string|null = '';
  spinner:boolean = false;
  isOpen:boolean = false;
  allProducts:Product[] = [];
  cartNumber:number = 0;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.swagger.cartNumbers.subscribe({
      next:(data)=> this.cartNumber = data
    })
     this.activatedRoute.paramMap.subscribe((res)=> {
      this.cat = res.get('name');
      this.getAllProducts(this.cat);
     });
  }

  getAllProducts(categoryName:string|null) {
    this.spinner = false;
    this.swagger.getProducts().subscribe((res)=> {
      this.spinner = true;
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

  setActiveCategory(categoryId: number) {
    this.activeCategoryId = categoryId;
    this.cdRef.detectChanges(); // Force change detection when category changes
  }


}
