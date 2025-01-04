import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MoviesFacade } from './movies.facade';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/shared/common/notifications.service';
import { FormControl, Validators } from '@angular/forms';
import { InvalidNameDirective } from 'src/app/shared/directives/invalid-name.directive';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  standalone: false
})
export class MoviesComponent implements OnInit {

  subscriptions: Subscription = new Subscription();
  userslist$: Observable<any[]>;
  isLoading$: Observable<boolean>;
  searchInput = new FormControl('', [Validators.required, Validators.minLength(4), InvalidNameDirective()]);
  chart: any;
  @ViewChild('popOver') public popValid: NgbPopover;

  constructor(
    public moviesFacade: MoviesFacade,
    private router: Router,
    private notificationsService: NotificationsService
  ) {
    this.userslist$ = this.moviesFacade.getListMovies$();
    this.isLoading$ = this.moviesFacade.isLoading$();
  }
  
  ngOnInit(): void {
  }

  onPageChange(event) {

  }
  
  edit(event) {
    // localStorage.setItem('currentUser', JSON.stringify(event.data));
    // this.router.navigate(['movies/user/', event.data.login]);
    this.router.navigate(['movies/user/', event.data.id]);
  }

  search(value) {
    this.moviesFacade.getMovieList(value);
  }

  showAlert() {
    if (this.searchInput.invalid) {
      this.popValid.open();
    } else {
      this.popValid.close();
    }
  }

}
