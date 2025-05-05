import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AllProductsDashboardService } from '../../shared/services/all-products-dashboard.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  constructor(private allProductsDAshboard:AllProductsDashboardService) { }

  imagePreview: string | null = null;

  addNewProduct: FormGroup = new FormGroup({
    mainImageUrl: new FormControl(null, [Validators.required]),
    brandImageUrl: new FormControl('', [Validators.required]),
    otherImages: new FormArray([]),
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

  ngOnInit(): void { }



  get otherImages(): FormArray {
    return this.addNewProduct.get('otherImages') as FormArray;
  }



 removeOtherImage(index: number, event: MouseEvent) {
  event.stopPropagation(); 
  this.otherImages.removeAt(index);
}


addOtherImage() {
  const imageGroup = new FormGroup({
    imageUrl: new FormControl(null, Validators.required),
    previewUrl: new FormControl(null) // أضف ده للعرض فقط
  });
  this.otherImages.push(imageGroup);
}

onOtherImageSelected(event: any, index: number) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.otherImages.at(index).patchValue({
        imageUrl: file,
        previewUrl: reader.result as string
      });
    };
    reader.readAsDataURL(file);
  }
}


  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      this.addNewProduct.get('mainImageUrl')?.setValue(file);
      this.addNewProduct.get('mainImageUrl')?.markAsDirty();

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  brandImagePreview: string | null = null;

  onBrandFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.brandImagePreview = reader.result as string;
        this.addNewProduct.get('brandImageUrl')?.setValue(file); // نحط الملف نفسه في الفورم
      };
      reader.readAsDataURL(file);
    }
  }

  addProduct() {
    const token = localStorage.getItem('adminToken');

    const headers = new HttpHeaders({
      authorization: `${token}`
    });
    console.log(this.addNewProduct.value);
    
    const formData = new FormData();

    // بيانات عادية
    formData.append('name', this.addNewProduct.get('name')?.value);
    formData.append('price', this.addNewProduct.get('price')?.value);
    formData.append('stockQuantity', this.addNewProduct.get('stockQuantity')?.value);
    formData.append('brandUrl', this.addNewProduct.get('brandUrl')?.value);
    formData.append('generalNotes', this.addNewProduct.get('generalNotes')?.value);
    formData.append('designNotes', this.addNewProduct.get('designNotes')?.value);
    formData.append('businessCode', this.addNewProduct.get('businessCode')?.value);
    formData.append('kind', this.addNewProduct.get('kind')?.value);
    formData.append('sizes_W', this.addNewProduct.get('sizes_W')?.value);
    formData.append('sizes_H', this.addNewProduct.get('sizes_H')?.value);
    formData.append('sizes_L', this.addNewProduct.get('sizes_L')?.value);
    formData.append('subCategoryId', this.addNewProduct.get('subCategoryId')?.value);
    formData.append('rawMaterials', this.addNewProduct.get('rawMaterials')?.value);
    formData.append('lastEdit', this.addNewProduct.get('lastEdit')?.value);
    formData.append('description', this.addNewProduct.get('description')?.value);
  
    const mainImage = this.addNewProduct.get('mainImageUrl')?.value;
    const brandImage = this.addNewProduct.get('brandImageUrl')?.value;
  
    if (mainImage) {
      formData.append('mainImageUrl', mainImage);
    }
  
    if (brandImage) {
      formData.append('brandImageUrl', brandImage);
    }
  
    const otherImages = this.otherImages.controls;
    otherImages.forEach((control, index) => {
      const file = control.get('imageUrl')?.value;
      if (file) {
        formData.append('otherImages', file);
      }
    });  

    this.allProductsDAshboard.addNewProduct(this.addNewProduct.value, {headers}).subscribe({
      next:(res)=> {
        if(res.message == "Product created successfully") {
          alert('success');
        } else {
          alert('success');
        }
      }
    })
  }
}
