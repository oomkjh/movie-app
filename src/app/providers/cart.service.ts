import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  API_ROUTE = 'http://localhost:3000/cart';

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(protected http: HttpClient) {}

  getCart() {
    return this.http.get(this.API_ROUTE);
  }

  addToCart(item: any) {
    return this.http.post(this.API_ROUTE, item).subscribe();
  }

  deleteCart(id: any) {
    return this.http.delete(`${this.API_ROUTE}/${id}`, {
      headers: this.headers,
    });
  }

  deleteAllCart(id?: any) {
    return this.http.delete(`${this.API_ROUTE}/${id}`, {
      headers: this.headers,
    });
  }

  updateList(list: any, id: any) {
    return this.http.put(`${this.API_ROUTE}/${id}`, JSON.stringify(list), {
      headers: this.headers,
    });
  }
}
