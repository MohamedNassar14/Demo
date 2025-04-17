import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../shared/services/swagger.service';
import { Category } from '../../shared/models/category';
import { CategoryComponent } from '../../shared/components/category/category.component';
import { SpinnerComponent } from "../../shared/components/spinner/spinner.component";

@Component({
  selector: 'app-collections',
  imports: [CategoryComponent, SpinnerComponent],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent implements OnInit {

  constructor(private swagger:SwaggerService) {}

  spinner:boolean = false;
  collectionsCategories:Category[] = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getAllCollectionsCategories();
  }

  getAllCollectionsCategories() {
    this.spinner = false;
    this.swagger.getCollectionsCategories().subscribe((res)=> {
      this.spinner = true;
      this.collectionsCategories = res;
    })
  }
}
