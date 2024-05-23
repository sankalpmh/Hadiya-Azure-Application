import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductsAPIResponse, SingleProductAPIResponse } from '../models/product.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { 
    
  }

  private productApiUrl: string = environment.apiGatewayURL + "/products";


  // private products: Product[] = [
  //   new Product(
  //     "Zebronics DRIP Smart Watch with Bluetooth Calling, 4.3cm (1.69\"), 10 built-in & 100+ Watch Faces, 100+ Sport Modes, 4 built-in Games, Voice Assistant, 8 Menu UI, Fitness Health & Sleep Tracker (Black)",
  //     2500,
  //     "INR",
  //     "https://m.media-amazon.com/images/I/61mtuZCcUdL._SL1500_.jpg",
  //     "17cdb5ce-d3cf-4282-8bd1-90acbf1dcae0"
  //   )
  // ]

  public getAllProducts(limit: number, offset: number): Observable<ProductsAPIResponse>{
    // return this.products;
    return this.http.get<ProductsAPIResponse>(this.productApiUrl + '?limit=' + limit + '&offset=' + offset);
  }

  public getProductById(productId: string): Observable<SingleProductAPIResponse>{
    return this.http.get<SingleProductAPIResponse>(this.productApiUrl + '?id=' + productId);
  }

  public addProduct(product: Product): Observable<any> {
    return this.http.post(this.productApiUrl, product);
  }

  public updateProduct(product: Product): Observable<any>{
    return this.http.put(this.productApiUrl + '?id=' + product.getId(), product);
  }

  public deleteProduct(productId: string): Observable<any>{
    return this.http.delete(this.productApiUrl + '?id=' + productId);
  }

}
