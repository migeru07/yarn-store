import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private storeService: StoreService
  ) { 
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
  }

  myShoppingCart: Product[] = [];

  total = 0;

  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      id: '6',
      name: 'Una linda casa',
      price: 1448,
      image: './assets/images/house.jpg'
    },
    {
      id: '5',
      name: 'Gafas',
      price: 32,
      image: './assets/images/glasses.jpg'
    }
  ];

  onAddToShoppingCart(producto: Product) {
    this.storeService.addProduct(producto);
    this.total = this.storeService.getTotal();
    
  }

}
