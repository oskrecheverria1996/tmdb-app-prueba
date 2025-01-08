import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MoviesFacade } from './movies.facade';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/shared/common/notifications.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  standalone: false
})
export class MoviesComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();
  moviesList$: Observable<any[]>;
  isLoading$: Observable<boolean>;
  searchText: string;

  constructor(
    public moviesFacade: MoviesFacade,
    private router: Router,
    private notificationsService: NotificationsService
  ) {
    this.moviesList$ = this.moviesFacade.getListMovies$();
    this.isLoading$ = this.moviesFacade.isLoading$();
  }
  
  ngOnInit(): void {
  }

  onPageChange(event) {

  }
  
  edit(event) {
    this.router.navigate(['movies/' + event.data.id]);
  }

  search() {
    this.moviesFacade.getMovieList(this.searchText);
  }
  
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
