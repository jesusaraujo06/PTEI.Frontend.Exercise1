import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieApiResponse } from '../components/interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  baseurl: string = 'https://api.themoviedb.org/3';
  apikey: string = '08cc33bd5ae3a747598ce2ad84376e66';

  GetTrendingMovieApiData(): Observable<MovieApiResponse> {
    return this.http.get<MovieApiResponse>(
      `${this.baseurl}/trending/movie/day?api_key=${this.apikey}`
    );
  }

  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');
    return this.http.get(
      `${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`
    );
  }
}
