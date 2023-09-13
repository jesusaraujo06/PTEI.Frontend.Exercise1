import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Movie } from '@app/shared/components/interfaces/movie.interface';
import { MovieService } from '@app/shared/services/movie.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  private query: string = '';
  public movies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private MovieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getCharactersByQuery();
  }

  private getCharactersByQuery(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['q'];
      console.log(`param1: ${this.query}`);
      this.getDataFromService();
    });
  }

  private getDataFromService(): void {
    this.MovieService.getSearchMovie(this.query).subscribe((res: any) => {
      if (res?.results?.length) {
        const { results } = res;
        this.movies = [...this.movies, ...results];
      } else {
        this.movies = [];
      }
    });
  }
}
