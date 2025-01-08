import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./core/layout/layout.component";
import { HomeComponent } from "./core/home/home.component";

const routes: Routes =[
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: "movies",
        loadChildren: () =>
        import("./pages/movies/movies.module").then(
            (m) => m.MoviesModule
        ),
      }
    ]
  }, { 
    path: '', 
    redirectTo: 'movies', 
    pathMatch: 'full' 
  }, { 
    path: '**', 
    redirectTo: 'movies' 
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
