import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.page';
import { MovieRoutingModule } from './movie-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieListViewComponent } from './movie-list-view/movie-list-view.component';
import { MovieCartComponent } from './movie-cart/movie-cart.component';

@NgModule({
  imports: [CommonModule, MovieRoutingModule, HttpClientModule],
  exports: [],
  declarations: [
    MovieListComponent,
    MovieListViewComponent,
    MovieCartComponent,
  ],
  providers: [],
})
export class MovieModule {}
