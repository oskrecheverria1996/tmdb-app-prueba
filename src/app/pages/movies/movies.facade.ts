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

    getMovieList(search, page = 1) {
        this.moviesState.setLoading(true)
        this.apiServicesService.getMoviesList(search, page)
        .pipe(finalize(() => this.moviesState.setLoading(false)))
        .subscribe(
            (res) => {
                this.moviesState.setListMovies(res.results);
                this.moviesState.setListMoviesMetadata({
                    total_results: res.total_results,
                    page: res.page,
                    total_pages: res.total_pages,
                });
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
                this.moviesState.setMovieCast(res);
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

    getMoviesListMetadata$(): Observable<any> {
        return this.moviesState.getListMoviesMetadata$();
    }

    getMovieCast$(): Observable<any> {
        return this.moviesState.getMovieCast$();
    }

    isLoading$(): Observable<boolean> {
        return this.moviesState.isLoading$();
    }
    
    isLoadingSingle$(): Observable<boolean> {
        return this.moviesState.isLoadingSingle$();
    }
}