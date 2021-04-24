import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/providers/cart.service';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-movie-cart',
  templateUrl: './movie-cart.component.html',
  styleUrls: ['./movie-cart.component.scss'],
})
export class MovieCartComponent implements OnInit {
  count = 0;
  listCart: any;
  currentList: any;
  timeleft = 60;

  imagePath = 'https://image.tmdb.org/t/p/w500';

  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit() {
    this.getCart();
  }

  async getCart() {
    this.listCart = await this.cartService.getCart().toPromise();
    let price: any;
    let total = 0;
    for (let i of this.listCart) {
      price = i?.cart_Price;
      total += price;
    }

    this.count = total;
  }

  async remove(id: any) {
    await this.cartService
      .deleteCart(id)
      .toPromise()
      .then(() => {
        this.getCart();
      });
  }

  async clearCart() {
    let id: any;
    for (let i of this.listCart) {
      id = i?.id;
      await this.cartService.deleteAllCart(id).toPromise();
    }
    this.getCart();
  }

  async editPrice(list: any, price: number) {
    if (!price || price < 0 || price < list?.cart_Price) {
      price = list?.cart_Price;
      alert('เพิ่มราคาสินค้าให้มากกว่าราคาสินค้าปัจจุบัน');
    }

    this.currentList = {
      cart_Id: [list?.cart_Id],
      cart_Img: list?.cart_Img,
      cart_Price: price,
      cart_Title: list?.cart_Title,
    };

    await this.cartService
      .updateList(this.currentList, list?.id)
      .toPromise()
      .then(() => {
        this.getCart();
      });
  }
}
