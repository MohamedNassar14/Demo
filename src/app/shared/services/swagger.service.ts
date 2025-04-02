import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { ProductDetails } from '../models/product-details';

@Injectable({
  providedIn: 'root'
})
export class SwaggerService {

  constructor(private httpClient:HttpClient) { }

  productsCart:ProductDetails[] = [];
  cartNumbers:BehaviorSubject<any> = new BehaviorSubject<any>(this.getCartNumber());
  cartNumbers$ = this.cartNumbers.asObservable();

  getRoomsCategories():Observable<Category[]> {
    return this.httpClient.get<Category[]>(`http://localhost:3000/roomsCategories`);
  }

  getCollectionsCategories():Observable<Category[]> {
    return this.httpClient.get<Category[]>(`http://localhost:3000/collectionsCategories`);
  }

  getProducts(catName:string):Observable<Product[]> {
    return this.httpClient.get<Product[]>(`http://localhost:3000/allProducts?catName=${catName}`);
  }

  getSingleProduct():Observable<Product[]> {
    return this.httpClient.get<Product[]>(`http://localhost:3000/allProducts`);
  }

  // getProductToAdd(event:any) {
  //   if(localStorage.getItem('productsCart') !== null)
  //     {
  //       this.productsCart = JSON.parse(localStorage.getItem('productsCart')!);
  //       //Check for if product exist already in productsCart 
  //       let newProduct:any = this.productsCart.find((item:ProductDetails)=> item.product.id == event.product.id);
  //       if(newProduct)
  //       {
  //         newProduct.quantity++;
  //         localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
  //         this.cartNumbers.next(this.productsCart.length);
  //       }
  //       else
  //       {
  //         this.productsCart.push(event);
  //         localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
  //         this.cartNumbers.next(this.productsCart.length);
  //       }
  //     }
  //     else
  //     {
  //       this.productsCart.push(event);
  //       localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
  //       this.cartNumbers.next(this.productsCart.length);
  //     }
  // }

  getCartNumber()
  {
    if(localStorage.getItem('productsCart') != null)
    {
      return JSON.parse(localStorage.getItem('productsCart')!).length;
    }
    else
    {
      return 0;
    }
  }
}
