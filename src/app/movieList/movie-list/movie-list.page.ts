import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/providers/cart.service';
import { MovieService } from 'src/app/providers/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListComponent implements OnInit {
  imagePath = 'https://image.tmdb.org/t/p/w500';
  listMovie: any;
  color = '#dce6ef';
  cartList: any;
  block = false;

  constructor(
    private movieService: MovieService,
    private cartService: CartService,
    private rotuer: Router
  ) {}

  ngOnInit() {
    this.getMovie();
    this.getCart();
  }

  async getMovie() {
    const listMovie: any = await this.movieService.getMovie().toPromise();
    this.listMovie = listMovie.results;
  }

  async search(input: string) {
    if (input) {
      let inputText: any = await this.movieService.search(input).toPromise();
      this.listMovie = inputText.results;
    } else {
      this.getMovie();
    }
  }

  cartId: any;
  async getCart() {
    this.cartList = await this.cartService.getCart().toPromise();
  }

  async addCart(item: any) {
    let check = false;
    const price = Math.floor(Math.random() * 600) + 100;

    for (let i of this.cartList) {
      let cartId = i?.cart_Id;
      if (cartId.includes(item?.id)) {
        check = true;
      }
    }

    let cartItem = {
      cart_Id: [item?.id],
      cart_Title: item?.title,
      cart_Price: price,
      cart_Img: item?.backdrop_path,
    };

    if (check) {
      alert('คุณมีสินค้าชินนี้ในตะกร้าอยู่แล้ว');
    } else {
      await this.cartService.addToCart(cartItem);
      this.rotuer.navigate(['movie-cart']);
      this.getCart();
    }
  }
}
