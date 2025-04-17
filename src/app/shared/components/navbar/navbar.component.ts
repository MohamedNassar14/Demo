import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwaggerService } from '../../services/swagger.service';
import { Product } from '../../models/product';
import { Category } from '../../models/category';
import { ElementRef, ViewChild } from '@angular/core';
import { SearchPipe } from '../../search.pipe';
import { CutTitlePipe } from '../../pipes/cut-title.pipe';



@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, CutTitlePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private swagger:SwaggerService, private cdRef: ChangeDetectorRef) {}

  activeCategoryId: number = 0; // Initial category ID (can be null or 0)
  cartNumber:number = 0;
  isOpen:boolean = false;
  rooms:Category[] = [];
  collections:Category[] = [];


  ngOnInit(): void {
    this.swagger.cartNumbers.subscribe((res)=> {
    this.cartNumber = res
    })
    this.swagger.getRoomsCategories().subscribe((res)=> {
      this.rooms = res
    })
    this.swagger.getCollectionsCategories().subscribe((res)=> {
      this.collections = res
    })
  }
  openSide() {
    this.isOpen = true;
  }

  closeSide() {
    this.isOpen = false;
  }

  searchForItem(term:any) {
    this.swagger.userSearch.next(term.target.value);
  }

  activeDropdown: string | null = null;

  showDropdown(category: string) {
    this.activeDropdown = category;
  }

  hideDropdown() {
    this.activeDropdown = null;
  }
  isOverButton = false;
  isOverDropdown = false;

  // Sample subcategories
  subcategoriesc = [
    { name: 'Todo Item 1' },
    { name: 'Todo Item 2' },
    { name: 'Todo Item 3' },
  ];



  setActiveCategory(categoryId: number) {
    this.activeCategoryId = categoryId;
    this.cdRef.detectChanges(); // Force change detection when category changes
  }

  hideTimeout: any = null;

  // Sample categories data
  categories: any[] = [
    {
      id: 1,
      name: 'Electronics',
      subcategories: [
        { id: 101, name: 'Smartphones' },
        { id: 102, name: 'Laptops' },
        { id: 103, name: 'Accessories' },
        { id: 104, name: 'Gaming' }
      ]
    },
    {
      id: 2,
      name: 'Fashion',
      subcategories: [
        { id: 201, name: "Men's Clothing" },
        { id: 202, name: "Women's Clothing" },
        { id: 203, name: 'Jewelry' },
        { id: 204, name: 'Watches' }
      ]
    },
    {
      id: 3,
      name: 'Home & Garden',
      subcategories: [
        { id: 301, name: 'Furniture' },
        { id: 302, name: 'Kitchenware' },
        { id: 303, name: 'Decor' },
        { id: 304, name: 'Gardening' }
      ]
    },
    {
      id: 4,
      name: 'Sports',
      subcategories: [
        { id: 401, name: 'Fitness' },
        { id: 402, name: 'Outdoor' },
        { id: 403, name: 'Team Sports' },
        { id: 404, name: 'Cycling' }
      ]
    }
  ];


  startHideTimeout(): void {
    this.cancelHideTimeout();
    this.hideTimeout = setTimeout(() => {
      this.activeCategoryId = 0;
    }, 200); // 200ms delay before hiding
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
}

