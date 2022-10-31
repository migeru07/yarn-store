import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor() { }

  @Input() producto: Product = {
    id: 0,
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: ''
    },
    description: ''
  }

  @Output() addedProduct = new EventEmitter<Product>();

  @Output() showProduct = new EventEmitter<number>();

  onAddToCart() {
    this.addedProduct.emit(this.producto);
  }

  

  onShowDetail() {
    this.showProduct.emit(this.producto.id)
  }

}
