import { AfterViewInit, Component, Input, input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [RouterLink, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, AfterViewInit  {

  constructor() {}

  @Input() product!:Product;
  
  ngOnInit(): void {}
  ngAfterViewInit() {
    const cards = Array.from(document.querySelectorAll('.product'));
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cards.indexOf(entry.target as Element);
            const delay = index * 70; // تأخير بسيط بين البطاقات
  
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'scale-100');
              entry.target.classList.remove('opacity-0', 'scale-95');
            }, delay);
  
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  
    cards.forEach((card) => observer.observe(card));
  }
  
  
  

}
