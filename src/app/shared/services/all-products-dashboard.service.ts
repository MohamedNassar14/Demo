import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllProductsResponse, ProductDetails, ProductResponse, Products } from '../models/all-products';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AllProductsDashboardService {

  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<AllProductsResponse> {
    return this.httpClient.get<AllProductsResponse>(`https://rz037f87hh.execute-api.us-east-1.amazonaws.com/dev/api/products`);
  }
  getProductDetails(id:string|null):Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(`https://rz037f87hh.execute-api.us-east-1.amazonaws.com/dev/api/product/${id}`);
  }

  addNewProduct(newProduct:ProductDetails, adminToken:any):Observable<any> {
    return this.httpClient.post<any>(`https://rz037f87hh.execute-api.us-east-1.amazonaws.com/dev/api/createProduct`, newProduct, adminToken);
  }

  updateNewProduct(productId:string|null, updateProduct:Products, adminToken:any):Observable<any> {
    return this.httpClient.put<any>(`https://rz037f87hh.execute-api.us-east-1.amazonaws.com/dev/api/updateProduct/${productId}`, updateProduct, adminToken);
  }
}

