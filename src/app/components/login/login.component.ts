import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { SpinnerComponent } from "../../shared/components/spinner/spinner.component";

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) {}


  spinner:boolean = false;
  showPassword:boolean = false;
  isOpen:boolean = false;
  cartNumber:number = 0;
  loginForm:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    this.spinner = true;
    window.scrollTo(0, 0);
  }

  
  openSide()
  {
    this.isOpen = true;
  }

  closeSide()
  {
    this.isOpen = false;
  }
  submitLoginForm() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.authService.signIn(this.loginForm.value).subscribe((res)=> {
      console.log(res);
      if(res.message == '')
      {
        //Navigate
      }
    })
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
