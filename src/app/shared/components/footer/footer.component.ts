import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwaggerService } from '../../services/swagger.service';
import { Product } from '../../models/product';
import { Category } from '../../models/category';
import { CutTitlePipe } from '../../pipes/cut-title.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, CommonModule, CutTitlePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  constructor(private swagger:SwaggerService) {}

  hideTimeout: any = null;
  activeCategoryId = 0; // Initial category ID (can be null or 0)
  rooms:Category[] = [];
  collections:Category[] = [];
  isLoading:boolean = false;
  isOpen:boolean = false;


  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = true;
    }, 1000);
    this.swagger.getRoomsCategories().subscribe((res)=> {
      this.rooms = res
    })
    this.swagger.getCollectionsCategories().subscribe((res)=> {
      this.collections = res
    })
  }
  

  startHideTimeout(): void {
    this.cancelHideTimeout();
    this.hideTimeout = setTimeout(() => {
      this.activeCategoryId = 0;
    }, 600); // 200ms delay before hiding
  }

  cancelHideTimeout(): void {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }


 


  navigateToSubcategory(): void {
    // Cancel any pending hide timeout
    this.cancelHideTimeout();
    // Immediately close the dropdown
    this.activeCategoryId = 0;
  }




  toggleSubcategories(index: number) {
    if (this.activeCategoryId === index) {
      this.activeCategoryId = 0; // Close the dropdown if the same category is clicked again
    } else {
      this.activeCategoryId = index; // Open the dropdown for the clicked category
    }
  }

  closeSide() {
    this.isOpen = true;
  }

}