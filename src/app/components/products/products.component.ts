import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) { 
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  productChosen: Product = {
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


  products: Product[] = [];
  showProductDetail = false;

  today = new Date();
  date = new Date(2021,1,21);

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    })
  }

  myShoppingCart: Product[] = [];

  total = 0;

  onAddToShoppingCart(producto: Product) {
    this.storeService.addProduct(producto);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: number) {
    this.productsService.getProduct(id)
    .subscribe(data => {
      this.toggleProductDetail();
      this.productChosen = data;
    })   
  }

}
