import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateCategoryDto, MainCategoriesResponse, SubCategories, SubCategoriesResponse, UpdateCategoryDto } from '../models/all-categories';

@Injectable({
  providedIn: 'root'
})
export class AllCategoriesDashboardService {

  constructor(private httpClient:HttpClient) { }

  getAllMainCategories():Observable<MainCategoriesResponse> {
    return this.httpClient.get<MainCategoriesResponse>(`https://rz037f87hh.execute-api.us-east-1.amazonaws.com/dev/api/mainCategory`)
  }

  addNewMainCategory(newMainCategory:CreateCategoryDto, adminToken:any):Observable<any> {
    return this.httpClient.post<any>(`https://rz037f87hh.execute-api.us-east-1.amazonaws.com/dev/api/mainCategory`, newMainCategory, adminToken)
  }

  getCategoryDetails(id:string|null):Observable<SubCategoriesResponse> {
    return this.httpClient.get<SubCategoriesResponse>(`https://rz037f87hh.execute-api.us-east-1.amazonaws.com/dev/api/mainCategory/${id}`);
  }

  updateMainCategory(productId:string|null, updateMainCategory:UpdateCategoryDto, adminToken:any):Observable<any> {
    return this.httpClient.put<any>(`https://rz037f87hh.execute-api.us-east-1.amazonaws.com/dev/api/updateMainCategory/${productId}`, updateMainCategory, adminToken)
  }

  getAllSubCategories():Observable<SubCategories[]> {
    return this.httpClient.get<SubCategories[]>(`https://rz037f87hh.execute-api.us-east-1.amazonaws.com/dev/api/subCategories`);
  }
}


