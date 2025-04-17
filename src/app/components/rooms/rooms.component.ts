import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../shared/services/swagger.service';
import { Category } from '../../shared/models/category';
import { CategoryComponent } from '../../shared/components/category/category.component';
import { SpinnerComponent } from "../../shared/components/spinner/spinner.component";

@Component({
  selector: 'app-rooms',
  imports: [CategoryComponent, SpinnerComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {

  constructor(private swagger:SwaggerService) {}

  spinner:boolean = false;
  roomsCategories:Category[] = []

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getAllRoomsCategories();
  }

  getAllRoomsCategories() {
    this.spinner = false
    this.swagger.getRoomsCategories().subscribe((res)=> {
      this.spinner = true;
      this.roomsCategories = res;
    })
  }

  
}
