import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwaggerService } from '../../services/swagger.service';
import { Product } from '../../models/product';
import { Category } from '../../models/category';
import { ElementRef, ViewChild } from '@angular/core';
import { SearchPipe } from '../../search.pipe';
import { CutTitlePipe } from '../../pipes/cut-title.pipe';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, CutTitlePipe, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private swagger:SwaggerService, private cdRef: ChangeDetectorRef, private authService:AuthService) {}

  activeCategoryId = 0; // Initial category ID (can be null or 0)
  cartNumber:number = 0;
  isOpen:boolean = false;
  rooms:Category[] = [];
  collections:Category[] = [];
  isLogin:boolean = false;


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
    this.authService.userToken.subscribe({
      next:()=> {
        if(this.authService.userToken.getValue() != null){
          this.isLogin = true;
        }
        else {
          this.isLogin = false;
        }
      }

    })
  }
  openSide() {
    this.isOpen = true;
  }

  closeSide() {
    this.isOpen = false;
  }

  // searchForItem(term:any) {
  //   this.swagger.userSearch.next(term.target.value);
  // }

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


//   searchResults: string[] = [];

// searchForItems(event: Event): void {
//   const value = (event.target as HTMLInputElement).value.toLowerCase();

//   // لو فاضي، نخفي القائمة
//   if (!value) {
//     this.searchResults = [];
//     return;
//   }

//   // هنا تحط اللوجيك بتاع الفلترة
//   const allItems = ['Sofa', 'Table', 'Chair', 'Desk', 'Lamp']; // ده مثال، هتجيبه من API أو من array عندك
//   this.searchResults = allItems.filter(item => item.toLowerCase().includes(value));
// }

allItems: Product[] = [];
searchQuery: string = '';
searchResults: Product[] = [];
isDropdownOpen: boolean = false;

searchForItems(event: Event): void {
  const value = (event.target as HTMLInputElement).value.toLowerCase();

  if (!value) {
    this.searchResults = [];
    this.isDropdownOpen = false;
    return;
  }

  // Call the API
  this.swagger.getProducts().subscribe((res) => {
    this.allItems = res;

    // Filter after data is received
    this.searchResults = this.allItems.filter(item =>
      item.name.toLowerCase().includes(value)
    );

    this.isDropdownOpen = this.searchResults.length > 0;
  });

  this.swagger.userSearch.next(value);
}

// When user selects an item
selectItem(item: Product): void {
  this.searchQuery = item.name;
  this.isDropdownOpen = false;
}

// Close dropdown if clicked outside
@HostListener('document:click', ['$event'])
onClickOutside(event: MouseEvent) {
  const clickedInside = (event.target as HTMLElement).closest('.search');
  if (!clickedInside) {
    this.isDropdownOpen = false;
  }
}


goToSearch(): void {
  if (this.searchQuery.trim()) {
    this.isDropdownOpen = false; // اقفل الـ dropdown
  }
}


logOut(){
  this.authService.signOut()
}

}

