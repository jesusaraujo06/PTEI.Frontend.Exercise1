import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListComponent } from './movie-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    MovieListRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class MovieListModule {}
