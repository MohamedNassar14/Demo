import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SwaggerService } from '../../shared/services/swagger.service';
import { Category } from '../../shared/models/category';
import { CategoryComponent } from '../../shared/components/category/category.component';

@Component({
  selector: 'app-rooms',
  imports: [NavbarComponent, CategoryComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {

  constructor(private swagger:SwaggerService) {}

  roomsCategories:Category[] = []

  ngOnInit(): void {
    this.getAllRoomsCategories();
  }

  getAllRoomsCategories() {
    this.swagger.getRoomsCategories().subscribe((res)=> {
      this.roomsCategories = res;
    })
  }

  
}
