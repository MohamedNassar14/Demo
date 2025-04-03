import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwaggerService } from '../../shared/services/swagger.service';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, RouterLink],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {

  constructor(private swagger:SwaggerService) {}

  isOpen:boolean = false;
  cartNumber:number = 0;
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.swagger.cartNumbers.subscribe({
      next:(data)=> this.cartNumber = data
    })
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

