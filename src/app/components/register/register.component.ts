import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { SpinnerComponent } from "../../shared/components/spinner/spinner.component";

@Component({
  selector: 'app-register',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) {}

  spinner:boolean = false;
  showPassword:boolean = false;
  errorMsg:string = '';
  isOpen:boolean = false;
  isLoading:boolean = false;
  cartNumber:number = 0;
  registerForm:FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    this.spinner = true;
    window.scrollTo(0, 0);
  }


  submitRegisterForm() {
    this.isLoading = true;
    this.registerForm.markAllAsTouched();
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.authService.signUp(this.registerForm.value).subscribe({
      next:(res)=> {
        this.isLoading = false;
         if(res.message == "created successfully , please check your phone for activation OTP") {
             this.router.navigate(['/login'])
          }
          else {
             this.errorMsg = res.data.message;
             console.log(res);
             
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
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}