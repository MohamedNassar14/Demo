import { Component, OnInit } from '@angular/core';
import { AllProductsDashboardService } from '../../shared/services/all-products-dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductDetails } from '../../shared/models/all-products';

@Component({
  selector: 'app-product-info',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent implements OnInit {

  constructor(private allProductsService:AllProductsDashboardService, private activatedRoute:ActivatedRoute) {}


  productId:string|null = '';
  productDetails!:ProductDetails;
  updateNewProduct:FormGroup = new FormGroup({
    mainImageUrl: new FormControl('', [Validators.required]),
    brandImageUrl: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    stockQuantity: new FormControl('', [Validators.required]),
    brandUrl: new FormControl('', [Validators.required]),
    generalNotes: new FormControl('', [Validators.required]),
    designNotes: new FormControl('', [Validators.required]),
    businessCode: new FormControl('', [Validators.required]),
    kind: new FormControl('', [Validators.required]),
    sizes_W: new FormControl('', [Validators.required]),
    sizes_H: new FormControl('', [Validators.required]),
    sizes_L: new FormControl('', [Validators.required]),
    subCategoryId: new FormControl('', [Validators.required]),
    rawMaterials: new FormControl('', [Validators.required]),
    lastEdit: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(res)=> {
        this.productId = res.get('id');
        this.getAllProductDetails(this.productId);
      }
     })
  }

  getAllProductDetails(productId:string|null) {
    this.allProductsService.getProductDetails(productId).subscribe({
      next:(res)=> {
        this.productDetails = res.data;
        
        this.updateNewProduct.patchValue({
          name: this.productDetails.name,
          price: this.productDetails.price,
          stockQuantity: this.productDetails.stockQuantity,
          brandUrl: this.productDetails.brandUrl,
          generalNotes: this.productDetails.generalNotes,
          designNotes: this.productDetails.designNotes,
          businessCode: this.productDetails.businessCode,
          kind: this.productDetails.kind,
          sizes_W: this.productDetails.sizes_W,
          sizes_H: this.productDetails.sizes_H,
          sizes_L: this.productDetails.sizes_L,
          subCategoryId: this.productDetails.subCategoryId,
          rawMaterials: this.productDetails.rawMaterials,
          lastEdit: this.productDetails.lastEdit,
          description: this.productDetails.description,
        });
  
        this.mainImagePreview = this.productDetails.mainImageUrl;
        this.brandImagePreview = this.productDetails.brandImageUrl;
        
      }
    })
  }
  mainImagePreview: string = '';
  brandImagePreview: string = '';
  

}
