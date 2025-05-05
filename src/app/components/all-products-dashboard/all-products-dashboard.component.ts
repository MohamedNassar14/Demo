import { Component, OnInit } from '@angular/core';
import { AllProductsDashboardService } from '../../shared/services/all-products-dashboard.service';
import { ProductDetails } from '../../shared/models/all-products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-products-dashboard',
  imports: [RouterLink],
  templateUrl: './all-products-dashboard.component.html',
  styleUrl: './all-products-dashboard.component.css'
})
export class AllProductsDashboardComponent implements OnInit {

  constructor(private allProductsDashboardService:AllProductsDashboardService) {}

  ngOnInit(): void {
    this.getAllProductsToDisplay();
  }

  allProducts:ProductDetails[] = []

  getAllProductsToDisplay(){
    this.allProductsDashboardService.getAllProducts().subscribe({
      next:(res)=> {
        this.allProducts = res.data
      }
    })
  }

  deleteProduct(productId:string) {
    
  }

}
