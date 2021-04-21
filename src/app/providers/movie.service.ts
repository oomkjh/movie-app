import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MovieService {
  API_KEY = 'a95036005fa6b7e51e9ae53399562bf7';
  API_ROUTE = `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&language=en-US&sort_by=popularity.desc&page=1`;
  API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=`;

  constructor(protected http: HttpClient) {}

  getMovie() {
    return this.http.get(this.API_ROUTE);
  }

  search(input: string) {
    return this.http.get(this.API_SEARCH + input);
  }

  getMovieById(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}&language=en-US`
    );
  }
}
