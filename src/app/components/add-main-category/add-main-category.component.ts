import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AllCategoriesDashboardService } from '../../shared/services/all-categories-dashboard.service';

@Component({
  selector: 'app-add-main-category',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-main-category.component.html',
  styleUrl: './add-main-category.component.css'
})
export class AddMainCategoryComponent implements OnInit {

  constructor(private allCategoriesService:AllCategoriesDashboardService) {}

  imagePreview: string | null = null;
  addNewMainCategory:FormGroup = new FormGroup({
    imageUrl: new FormControl(null, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {}


  
  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      // خزن الملف في الفورم (في الذاكرة فقط، مش في الـ input)
      this.addNewMainCategory.get('imageUrl')?.setValue(file);
      this.addNewMainCategory.get('imageUrl')?.markAsDirty();

      // اعمل preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  addMainCategory() {
    const token = localStorage.getItem('adminToken');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const formData = new FormData();

    formData.append('name', this.addNewMainCategory.get('name')?.value);
    formData.append('description', this.addNewMainCategory.get('description')?.value);
    const mainImage = this.addNewMainCategory.get('imageUrl')?.value;
  
    if (mainImage) {
      formData.append('imageUrl', mainImage);
    }
    this.allCategoriesService.addNewMainCategory(this.addNewMainCategory.value, {headers}).subscribe({
      next:(res)=> {
        if(res.message == "Main category created successfully") {
          alert('Success');
        } else {
          alert('Failed');
        }
      }
    })
  }
  

}
