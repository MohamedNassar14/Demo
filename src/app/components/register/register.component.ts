import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwaggerService } from '../../shared/services/swagger.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(private swagger:SwaggerService) {}

  isOpen:boolean = false;
  cartNumber:number = 0;
  registerForm:FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.swagger.cartNumbers.subscribe({
      next:(data)=> this.cartNumber = data
    })
  }


  submitRegisterForm() {

  }
  openSide() {
    this.isOpen = true;
  }

  closeSide() {
    this.isOpen = false;
  }
}