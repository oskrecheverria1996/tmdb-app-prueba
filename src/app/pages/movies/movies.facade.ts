import { Injectable } from "@angular/core";
import { ApiServicesService } from "../../api/api-services.service";
import { MoviesState } from "./movies.state";
import { finalize, map, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { NotificationsService } from "../../shared/common/notifications.service";

@Injectable()
export class MoviesFacade {
    constructor(
        private apiServicesService: ApiServicesService,
        private moviesState: MoviesState,
        private notificationsService: NotificationsService,
    ) { }

    getMovieList(search) {
        this.moviesState.setLoading(true)
        this.apiServicesService.getMoviesList(search)
        .pipe(finalize(() => this.moviesState.setLoading(false)))
        .subscribe(
            (res) => {
                this.moviesState.setListMovies(res.results);
            },
            (err) => {
                this.notificationsService.error(err.error.message, 'Error');
            }
        )
    }
       
    getMovieById(id) {
        this.moviesState.setLoadingSingle(true);
        this.apiServicesService.getMovieDetail(id)
        .pipe(finalize(() => this.moviesState.setLoadingSingle(false)))
        .subscribe(
            (res) => {
                this.moviesState.setMovieData(res);
            },
            (err) => {
                this.notificationsService.error(err.error.message, 'Error')
            }
        )
    }

    getMovieCastById(id) {
        this.moviesState.setLoadingSingle(true);
        this.apiServicesService.getMovieCast(id)
        .pipe(finalize(() => this.moviesState.setLoadingSingle(false)))
        .subscribe(
            (res) => {
                this.moviesState.setMovieData(res);
            },
            (err) => {
                this.notificationsService.error(err.error.message, 'Error')
            }
        )
    }

    getListMovies$(): Observable<any[]> {
        return this.moviesState.getListMovies$();
    }

    getMovieData$(): Observable<any[]> {
        return this.moviesState.getMovieData$();
    }

    isLoading$(): Observable<boolean> {
        return this.moviesState.isLoading$();
    }
    
    isLoadingSingle$(): Observable<boolean> {
        return this.moviesState.isLoadingSingle$();
    }
}