import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MovieService } from '@app/shared/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private service: MovieService,
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('App Peli');
    this.meta.updateTag({
      name: 'description',
      content: 'Peliculas',
    });
  }

  trendingMovieResult: any = [];

  ngOnInit(): void {
    this.trendingData();
  }

  trendingData() {
    this.service.GetTrendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
      // this.trendingMovieResult
    });
  }
}
