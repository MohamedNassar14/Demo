import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/models/all-categories';
import { AllCategoriesDashboardService } from '../../shared/services/all-categories-dashboard.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-main-categories-dashboard',
  imports: [RouterLink],
  templateUrl: './all-main-categories-dashboard.component.html',
  styleUrl: './all-main-categories-dashboard.component.css'
})
export class AllMainCategoriesDashboardComponent implements OnInit {

  constructor(private allCategories:AllCategoriesDashboardService) {}

  allMainCategories:Category[]= [];

  ngOnInit(): void {
    this.getAllMainCategories();
  }

  getAllMainCategories() {
    this.allCategories.getAllMainCategories().subscribe({
      next:(res)=> {
        this.allMainCategories = res.data;
      }
    })
  }

}
