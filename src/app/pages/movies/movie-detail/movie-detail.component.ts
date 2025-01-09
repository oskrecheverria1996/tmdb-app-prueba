import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MoviesFacade } from '../movies.facade';
import { ActivatedRoute } from '@angular/router';
import { MovieCastAPIResponse } from 'src/app/shared/interfaces/movie-cast-api-response.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  subscriptions: Subscription = new Subscription();
  movieData$: Observable<any>;
  movieCast$: Observable<any>;
  movieData: any = {};
  movieCast: any = [];
  isLoading$: Observable<boolean>;

  constructor(
    public moviesFacade: MoviesFacade,
    private route: ActivatedRoute,
  ) { 
    // this.movieCast$ = this.moviesFacade.getMovieCast$();
    this.moviesFacade.getMovieCast$().subscribe((res) => {
      this.movieCast = res.cast
    });
    // this.movieData$ = this.moviesFacade.getMovieData$();
    this.moviesFacade.getMovieData$().subscribe((res) => {
      this.movieData = res
    });
    this.isLoading$ = this.moviesFacade.isLoadingSingle$();
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.params.subscribe((params) => {
       this.moviesFacade.getMovieById(params['movieId']);
       this.moviesFacade.getMovieCastById(params['movieId']);
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  listGenres(genresList) {
    let result = genresList.map(x => x.name).join(", ");
    return result;
  }

}
