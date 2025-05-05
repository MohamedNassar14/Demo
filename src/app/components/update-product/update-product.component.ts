import { Component, OnInit } from '@angular/core';
import { AllProductsDashboardService } from '../../shared/services/all-products-dashboard.service';
import { ProductDetails } from '../../shared/models/all-products';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-update-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {

  constructor(private allProductsService:AllProductsDashboardService, private activatedRoute:ActivatedRoute) {}

  mainImagePreview: string = '';
  brandImagePreview: string = '';
  productId:string|null = '';
  productDetails!:ProductDetails;
  
  updateNewProduct:FormGroup = new FormGroup({
    mainImageUrl: new FormControl(null, [Validators.required]),
    brandImageUrl: new FormControl(null, [Validators.required]),
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

  

  onMainImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.mainImagePreview = reader.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  onBrandImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.brandImagePreview = reader.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  updateProduct() {
    const token = localStorage.getItem('adminToken');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    console.log(this.updateNewProduct.value);
    const formData = new FormData();

    // بيانات عادية
    formData.append('name', this.updateNewProduct.get('name')?.value);
    formData.append('price', this.updateNewProduct.get('price')?.value);
    formData.append('stockQuantity', this.updateNewProduct.get('stockQuantity')?.value);
    formData.append('brandUrl', this.updateNewProduct.get('brandUrl')?.value);
    formData.append('generalNotes', this.updateNewProduct.get('generalNotes')?.value);
    formData.append('designNotes', this.updateNewProduct.get('designNotes')?.value);
    formData.append('businessCode', this.updateNewProduct.get('businessCode')?.value);
    formData.append('kind', this.updateNewProduct.get('kind')?.value);
    formData.append('sizes_W', this.updateNewProduct.get('sizes_W')?.value);
    formData.append('sizes_H', this.updateNewProduct.get('sizes_H')?.value);
    formData.append('sizes_L', this.updateNewProduct.get('sizes_L')?.value);
    formData.append('subCategoryId', this.updateNewProduct.get('subCategoryId')?.value);
    formData.append('rawMaterials', this.updateNewProduct.get('rawMaterials')?.value);
    formData.append('lastEdit', this.updateNewProduct.get('lastEdit')?.value);
    formData.append('description', this.updateNewProduct.get('description')?.value);
  
    // الصور الفردية
    const mainImage = this.updateNewProduct.get('mainImageUrl')?.value;
    const brandImage = this.updateNewProduct.get('brandImageUrl')?.value;
  
    if (mainImage) {
      formData.append('mainImageUrl', mainImage);
    }
  
    if (brandImage) {
      formData.append('brandImageUrl', brandImage);
    }
    this.allProductsService.updateNewProduct(this.productId , this.updateNewProduct.value, {headers}).subscribe({
      next:(res)=> {
        if(res.message == "Product updated successfully"){
          alert('Success');
        } else {
          alert('failed');
        }
      }
    })
  }
}
