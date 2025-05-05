import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminAuthService } from '../../shared/services/admin-auth.service';

@Component({
  selector: 'app-admin-register',
  imports: [CommonModule, RouterLink, ReactiveFormsModule,],
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent implements OnInit {

  constructor(private adminAuthService:AdminAuthService , private router:Router) {}

  showPassword:boolean = false;
  errorMsg:string = '';
  alertMsg:string = '';
  registerAdminForm:FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }


  submitRegisterAdminForm() {
    this.registerAdminForm.markAllAsTouched();
    if (this.registerAdminForm.invalid) {
      return;
    }
    this.adminAuthService.adminSignUp(this.registerAdminForm.value).subscribe({
      next:(res)=> {
        if(res.message == 'Admin created successfully'){
          this.router.navigate(['/admin/login']);
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
