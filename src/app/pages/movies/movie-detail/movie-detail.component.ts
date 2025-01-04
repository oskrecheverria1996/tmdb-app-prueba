import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MoviesFacade } from '../movies.facade';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  subscriptions: Subscription = new Subscription();
  movieData$: Observable<any>;
  movieData: any = {};
  isLoading$: Observable<boolean>;

  constructor(
    public moviesFacade: MoviesFacade,
    private route: ActivatedRoute,
  ) { 
    // this.movieData$ = this.usersDataFacade.getMovieData$();
    this.moviesFacade.getMovieData$().subscribe((res) => {
      this.movieData = res
    });
    this.isLoading$ = this.moviesFacade.isLoadingSingle$();
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.params.subscribe((params) => {
       this.moviesFacade.getMovieById(params['userName']);
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
