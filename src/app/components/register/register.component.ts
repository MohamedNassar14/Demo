import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwaggerService } from '../../shared/services/swagger.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(private swagger:SwaggerService) {}

  isOpen:boolean = false;
  cartNumber:number = 0;

  ngOnInit(): void {
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