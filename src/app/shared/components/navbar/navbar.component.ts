import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor() {}
  
  isOpen:boolean = false;
  isScrolled:boolean = false;


  ngOnInit(): void {

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
