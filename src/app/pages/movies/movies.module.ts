import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutes } from './movies.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { PaginatorModule } from 'primeng/paginator';
import { MoviesFacade } from './movies.facade';
import { MoviesState } from './movies.state';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent,
    // MovieComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    MenuModule,
    MultiSelectModule,
    StepsModule,
    TableModule,
    TabViewModule,
    TreeModule,
    TreeTableModule,
    PaginatorModule,
    ReactiveFormsModule,
    RouterModule.forChild(MoviesRoutes),
  ],
  providers: [
    MoviesFacade,
    MoviesState
  ]
})
export class MoviesModule { }
