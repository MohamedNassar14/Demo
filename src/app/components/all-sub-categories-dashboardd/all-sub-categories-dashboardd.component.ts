import { Component, OnInit } from '@angular/core';
import { AllCategoriesDashboardService } from '../../shared/services/all-categories-dashboard.service';

import { RouterLink } from '@angular/router';
import { SubCategories } from '../../shared/models/all-categories';

@Component({
  selector: 'app-all-sub-categories-dashboardd',
  imports: [RouterLink],
  templateUrl: './all-sub-categories-dashboardd.component.html',
  styleUrl: './all-sub-categories-dashboardd.component.css'
})
export class AllSubCategoriesDashboarddComponent implements OnInit {

  constructor(private allCategoriesService:AllCategoriesDashboardService) {}

  allSubCategories:SubCategories[] = [];
  

  ngOnInit(): void {
    this.getAllSubCAtegories();
  }

  getAllSubCAtegories() {
    this.allCategoriesService.getAllSubCategories().subscribe({
      next:(res)=> {
       this.allSubCategories = res
      }
    })
  }


}
