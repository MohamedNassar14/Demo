import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminAuthService } from '../../shared/services/admin-auth.service';

@Component({
  selector: 'app-admin-login',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

  
  constructor(private adminAuth:AdminAuthService, private router:Router) {}


  errorMsg:string = '';
  showPassword:boolean = false;
  adminLoginForm:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }


  submitAdminLoginForm() {
    this.adminLoginForm.markAllAsTouched();
    if (this.adminLoginForm.invalid) {
      return;
    }

    this.adminAuth.adminSignIn(this.adminLoginForm.value).subscribe({
      next:(res)=> {
        if(res.data){
          localStorage.setItem('adminToken', res.data.jwt);
          this.adminAuth.saveTokenAdmin();
          this.router.navigate(['/dashboard/all-products']);
          
        } else {
          this.errorMsg = res.data.message;
        }
      }
    })

 
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
