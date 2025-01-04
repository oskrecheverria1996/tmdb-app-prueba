import { Routes } from "@angular/router";
import { MoviesComponent } from "./movies.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { ScoreGuard } from "../../core/guards/guard-score.guard";

export const MoviesRoutes: Routes = [
    {
        path: '',
        component: MoviesComponent,
    },
    {
        path: 'user/:userName',
        component: MovieDetailComponent,
    }
]