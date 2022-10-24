import { Component } from '@angular/core';
import { Product } from './models/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yarn store';
//https://www.w3schools.com/howto/img_avatar2.png
  imgParent = '';

  onLoaded(img: string) {
    console.log('log padre', img);
  }

}
