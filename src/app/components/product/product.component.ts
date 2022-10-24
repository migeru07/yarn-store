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
    id: 0,
    title: '',
    price: 0,
    image: '',
    description: '',
    category: ''   
  }

  @Output() addedProduct = new EventEmitter<Product>();

  onAddToCart() {
    this.addedProduct.emit(this.producto)
  }


}
