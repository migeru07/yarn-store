import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() producto: Product = {
    id: '',
    price: 0,
    image: '',
    name: ''
  }

  @Output() addedProduct = new EventEmitter<Product>();

  onAddToCart() {
    this.addedProduct.emit(this.producto)
  }


}
