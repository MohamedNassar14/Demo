import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { ProductDetails } from '../models/product-details';
import { provideToastr, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SwaggerService {

  constructor(private httpClient:HttpClient, private toast:ToastrService) { }

  
  productsCart:ProductDetails[] = [];
  cartNumbers:BehaviorSubject<any> = new BehaviorSubject<any>(this.getCartNumber());
  cartNumbers$ = this.cartNumbers.asObservable();
  userSearch:BehaviorSubject<any> = new BehaviorSubject<any>('');
  userSearch$ = this.userSearch.asObservable();

  getRoomsCategories():Observable<Category[]> {
    return this.httpClient.get<Category[]>(`assets/api/rooms.json`);
  }

  getCollectionsCategories():Observable<Category[]> {
    return this.httpClient.get<Category[]>(`assets/api/collections.json`);
  }

  getProducts():Observable<Product[]> {
    return this.httpClient.get<Product[]>(`assets/api/allProducts.json`);
  }
  getTrends():Observable<Product[]> {
    return this.httpClient.get<Product[]>(`assets/api/trends.json`);
  }

  getProductToAdd(event:any) {
    if(localStorage.getItem('productsCart') !== null)
      {
        this.productsCart = JSON.parse(localStorage.getItem('productsCart')!);
        //Check for if product exist already in productsCart 
        let newProduct:any = this.productsCart.find((item:ProductDetails)=> item.product.id == event.product.id);
        if(newProduct)
        {
          newProduct.quantity++;
          localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
          this.cartNumbers.next(this.productsCart.length);
          this.toast.success(`<div class="flex items-center gap-2 text-green-500">
     ✔️ <span>Product increment by 1</span>
   </div>`, '',{
            toastClass: 'toast-success', enableHtml: true});

        }
        else
        {
          this.productsCart.push(event);
          localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
          this.cartNumbers.next(this.productsCart.length);
          this.toast.success(`<div class="flex items-center gap-2 text-green-500">
     ✔️ <span>Product added to cart </span>
   </div>`, '',{
            toastClass: 'toast-success', enableHtml: true});
        }
      }
      else
      {
        this.productsCart.push(event);
        localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
        this.cartNumbers.next(this.productsCart.length);
        this.toast.success(`<div class="flex items-center gap-2 text-green-500">
     ✔️ <span>Product added to cart </span>
   </div>`, '',{
          toastClass: 'toast-success', enableHtml: true});
      }
  }

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
