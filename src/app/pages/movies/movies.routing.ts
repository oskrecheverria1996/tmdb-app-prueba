import { Routes } from "@angular/router";
import { MoviesComponent } from "./movies.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

export const MoviesRoutes: Routes = [
    {
        path: '',
        component: MoviesComponent,
    },
    {
        path: ':movieId',
        component: MovieDetailComponent,
    }
]