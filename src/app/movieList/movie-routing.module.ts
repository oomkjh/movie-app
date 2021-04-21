import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCartComponent } from './movie-cart/movie-cart.component';
import { MovieListViewComponent } from './movie-list-view/movie-list-view.component';
import { MovieListComponent } from './movie-list/movie-list.page';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
  },
  { path: 'movie/:id', component: MovieListViewComponent },
  { path: 'movie-cart/:id', component: MovieCartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
