import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-cart',
  templateUrl: './movie-cart.component.html',
  styleUrls: ['./movie-cart.component.scss'],
})
export class MovieCartComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const movieId = this.route.snapshot.params.id;
    this.id = movieId;
    console.log(this.id);
  }
}
