import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../shared/services/swagger.service';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, RouterLink],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta, private swagger:SwaggerService) {}
  
  isOpen:boolean = false;
  cartNumber:number = 0;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.setSEO();
    this.swagger.cartNumbers.subscribe({
      next:(data)=> this.cartNumber = data
    })
  }

  setSEO(): void {
    this.titleService.setTitle('Who We Are - La Terra');
    this.metaService.updateTag({ name: 'description', content: 'Learn more about La Terra, a brand specializing in luxury furniture design that blends elegance with functionality.' });
    this.metaService.updateTag({ property: 'og:title', content: 'Who We Are - La Terra' });
    this.metaService.updateTag({ property: 'og:description', content: 'La Terra offers high-end, natural furniture designed for luxury living spaces, combining beauty with functionality.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
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
