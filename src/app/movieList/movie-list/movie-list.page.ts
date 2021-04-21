import { Component, OnInit } from '@angular/core';
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

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getMovie();
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
}
