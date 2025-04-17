import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [CommonModule, BrowserAnimationsModule], // إضافة CommonModule و BrowserAnimationsModule
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent {
  constructor(private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('Message sent successfully!', 'Success');
  }

  showError() {
    this.toastr.error('Something went wrong!', 'Error');
  }

  showInfo() {
    this.toastr.info('This is an info message', 'Info');
  }

  showWarning() {
    this.toastr.warning('This is a warning message', 'Warning');
  }
}
