import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SwaggerService } from '../../shared/services/swagger.service';
import { Category } from '../../shared/models/category';
import { CategoryComponent } from '../../shared/components/category/category.component';

@Component({
  selector: 'app-collections',
  imports: [NavbarComponent, CategoryComponent],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent implements OnInit {

  constructor(private swagger:SwaggerService) {}

  collectionsCategories:Category[] = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getAllCollectionsCategories();
  }

  getAllCollectionsCategories() {
    this.swagger.getCollectionsCategories().subscribe((res)=> {
      this.collectionsCategories = res;
    })
  }
}
