import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwaggerService } from '../../services/swagger.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private swagger:SwaggerService) {}
  
  isOpen:boolean = false;
  isScrolled:boolean = false;
  cartNumber:number = 0;

  ngOnInit(): void {
    this.swagger.cartNumbers.subscribe({
      next:(data)=> this.cartNumber = data
    })
  }

  @HostListener('window:scroll')  
  onScroll() {
    if (window.scrollY > 10) {
      this.isScrolled = true; 
    } else {
      this.isScrolled = false; 
    }
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

