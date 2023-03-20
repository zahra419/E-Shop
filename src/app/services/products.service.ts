import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url=environment.PRODUCTS_URL
  constructor(private http:HttpClient) { }
  getProducts(category?:string):Observable<Array<Product>>{
     return this.http.get<Array<Product>>(this.url+`${category? '/category/'+category:''}`)
  }
  getSingleProduct(id:number):Observable<Product>{
    return this.http.get<Product>(this.url+`/${id}`)
  }
  getCategories(){
    return this.http.get<Array<string>>(this.url+`/categories`)
  }
 
}
