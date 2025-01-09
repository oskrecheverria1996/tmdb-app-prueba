import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieListAPIResponse } from '../shared/interfaces/movies-list-api-response.interface';
import { MovieDetailAPIResponse } from '../shared/interfaces/movie-detail-api-response.interface';
import { MovieCastAPIResponse } from '../shared/interfaces/movie-cast-api-response.interface';

@Injectable({
    providedIn: 'root'
  })
  export class ApiServicesService {
    
  constructor(
    private http: HttpClient,
  ) { }

    getApiEndpoint() {
      return environment.apiEndpoint;
    }

    getMoviesList(search, page):Observable<MovieListAPIResponse> {
      return this.http.get(`${this.getApiEndpoint()}search/movie?api_key=${environment.api_key}&query=${search}&page=${page}&language=es-ES`,
        {
          observe: 'response',
          reportProgress: true,
        })
        .pipe(map(res => res.body as MovieListAPIResponse))
    }

    getMovieDetail(id):Observable<MovieDetailAPIResponse> {
      return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${environment.api_key}&language=es-ES`,
        {
          observe: 'response',
          reportProgress: true,
        })
        .pipe(map(res => res.body as MovieDetailAPIResponse))
    }

    getMovieCast(id):Observable<MovieCastAPIResponse> {
      return this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${environment.api_key}&language=es-ES`,
        {
          observe: 'response',
          reportProgress: true,
        })
        .pipe(map(res => res.body as MovieCastAPIResponse))
    }

  }