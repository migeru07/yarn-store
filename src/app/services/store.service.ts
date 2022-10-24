import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    
  ) { }

  private myCart = new BehaviorSubject<Product[]>([])

  myCart$ = this.myCart.asObservable();

  private myShoppingCart: Product[] = [];

  addProduct(producto: Product) {
    this.myShoppingCart.push(producto);
    this.myCart.next(this.myShoppingCart);
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum,item) => sum + item.price, 0 )
  }

}
