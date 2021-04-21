import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/providers/movie.service';

@Component({
  selector: 'app-movie-list-view',
  templateUrl: './movie-list-view.component.html',
  styleUrls: ['./movie-list-view.component.scss'],
})
export class MovieListViewComponent implements OnInit {
  id: any;
  movie: any;

  imagePath = 'https://image.tmdb.org/t/p/w500';
  noImage = '/assets/img/noImage.jpg';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    const movieId = this.route.snapshot.params.id;
    this.id = movieId;

    this.getMovie();
  }

  async getMovie() {
    this.movie = await this.movieService.getMovieById(this.id).toPromise();

    console.log(this.movie);
  }
}
