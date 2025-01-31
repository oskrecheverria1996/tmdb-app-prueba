import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class MoviesState {
    private listMovies$ = new BehaviorSubject<any>([]);
    private loading$ = new BehaviorSubject<boolean>(false);
    private pageMetadata$ = new BehaviorSubject<any>({});
    private movieData$ = new BehaviorSubject<any>({});
    private movieCast$ = new BehaviorSubject<any>([]);
    private loadingSingle$ = new BehaviorSubject<boolean>(false);

    setListMovies(results: any[]) {
        this.listMovies$.next(results);
    }

    getListMovies$() {
        return this.listMovies$.asObservable();
    }

    setListMoviesMetadata(results: any) {
        this.pageMetadata$.next(results);
    }

    getListMoviesMetadata$() {
        return this.pageMetadata$.asObservable();
    }

    setMovieData(result) {
        this.movieData$.next(result);
    }

    getMovieData$(): Observable<any> {
        return this.movieData$.asObservable();
    }

    setMovieCast(result) {
        this.movieCast$.next(result);
    }

    getMovieCast$(): Observable<any> {
        return this.movieCast$.asObservable();
    }

    isLoading$(): Observable<boolean> {
        return this.loading$.asObservable();
    }

    setLoading(isLoading: boolean): void {
        this.loading$.next(isLoading);
    }

    isLoadingSingle$(): Observable<boolean> {
        return this.loadingSingle$.asObservable();
    }

    setLoadingSingle(isLoadingSingle: boolean): void {
        this.loadingSingle$.next(isLoadingSingle);
    }
}