import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-info-payment',
  imports: [],
  templateUrl: './info-payment.component.html',
  styleUrl: './info-payment.component.css'
})
export class InfoPaymentComponent {


  @ViewChild('myImage') imageRef!: ElementRef;

  ngAfterViewInit() {
    const imageEl = this.imageRef.nativeElement;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            imageEl.classList.add('show');
            observer.unobserve(imageEl);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(imageEl);
  }
}
