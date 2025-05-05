import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AllCategoriesDashboardService } from '../../shared/services/all-categories-dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { Category, SubCategoriesResponse } from '../../shared/models/all-categories';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-update-main-category',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-main-category.component.html',
  styleUrl: './update-main-category.component.css'
})
export class UpdateMainCategoryComponent implements OnInit {

  constructor(private allCategoriesService:AllCategoriesDashboardService, private activatedRoute:ActivatedRoute) {}

  categoryId:string|null = '';
  categoryDetails!:Category;
  mainImagePreview: string | null = null;
  updateMainCategory:FormGroup = new FormGroup({
    imageUrl: new FormControl(null, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    createdAt: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(res)=> {
        this.categoryId = res.get('id');
        this.getAllCategoryDetails(this.categoryId)
      }
     })
  }


  getAllCategoryDetails(categoryId:string|null) {
    this.allCategoriesService.getCategoryDetails(categoryId).subscribe({
      next:(res)=> {
        this.categoryDetails = res.data;
        this.updateMainCategory.patchValue({
          name: this.categoryDetails.name,
          description: this.categoryDetails.description,
          createdAt: this.categoryDetails.createdAt
        })
        this.mainImagePreview = this.categoryDetails.imageUrl
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

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      // خزن الملف في الفورم (في الذاكرة فقط، مش في الـ input)
      this.updateMainCategory.get('imageUrl')?.setValue(file);
      this.updateMainCategory.get('imageUrl')?.markAsDirty();

      // اعمل preview
      const reader = new FileReader();
      reader.onload = () => {
        this.mainImagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  updateMainCategoryToDisplay() {
    const token = localStorage.getItem('adminToken');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    console.log(this.updateMainCategory.value);
    const formData = new FormData();

    formData.append('name', this.updateMainCategory.get('name')?.value);
    formData.append('description', this.updateMainCategory.get('description')?.value);
    formData.append('createdAt', this.updateMainCategory.get('createdAt')?.value);

    const mainImage = this.updateMainCategory.get('imageUrl')?.value;
  
    if (mainImage) {
      formData.append('imageUrl', mainImage);
    }

    this.allCategoriesService.updateMainCategory(this.categoryId, this.updateMainCategory.value, {headers}).subscribe({
      next:(res)=> {
        if(res.message == "Main category updated successfully") {
          alert('Success');
        } else {
          alert('Failed');
        }
      }
    })
  }

}
