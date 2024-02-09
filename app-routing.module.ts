import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'frontend', loadChildren: () => import('./frontend/frontend.module').then(m => m.FrontendModule) }, { path: '', loadChildren: () => import('./frontend/index/index.module').then(m => m.IndexModule) }, { path: 'header', loadChildren: () => import('./header/header.module').then(m => m.HeaderModule) }, { path: 'footer', loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule) }, { path: 'theater', loadChildren: () => import('./frontend/theater/theater.module').then(m => m.TheaterModule) }, { path: 'bheed', loadChildren: () => import('./frontend/movieinfo/bheed/bheed.module').then(m => m.BheedModule) }, { path: 'movie1', loadChildren: () => import('./frontend/movieinfo/movie1/movie1.module').then(m => m.Movie1Module) }, { path: 'movie2', loadChildren: () => import('./frontend/movieinfo/movie2/movie2.module').then(m => m.Movie2Module) }, { path: 'movie3', loadChildren: () => import('./frontend/movieinfo/movie3/movie3.module').then(m => m.Movie3Module) }, { path: 'movie4', loadChildren: () => import('./frontend/movieinfo/movie4/movie4.module').then(m => m.Movie4Module) }, { path: 'movie5', loadChildren: () => import('./frontend/movieinfo/movie5/movie5.module').then(m => m.Movie5Module) }, { path: 'movie6', loadChildren: () => import('./frontend/movieinfo/movie6/movie6.module').then(m => m.Movie6Module) }, { path: 'movie7', loadChildren: () => import('./frontend/movieinfo/movie7/movie7.module').then(m => m.Movie7Module) }, { path: 'movie8', loadChildren: () => import('./frontend/movieinfo/movie8/movie8.module').then(m => m.Movie8Module) }, { path: 'movie9', loadChildren: () => import('./frontend/movieinfo/movie9/movie9.module').then(m => m.Movie9Module) }, { path: 'movie10', loadChildren: () => import('./frontend/movieinfo/movie10/movie10.module').then(m => m.Movie10Module) }, { path: 'movie11', loadChildren: () => import('./frontend/movieinfo/movie11/movie11.module').then(m => m.Movie11Module) }, { path: 'seatbooking', loadChildren: () => import('./frontend/seatbooking/seatbooking.module').then(m => m.SeatbookingModule) }, { path: 'bill', loadChildren: () => import('./frontend/bill/bill.module').then(m => m.BillModule) }, { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) }, { path: 'idsearch', loadChildren: () => import('./idsearch/idsearch.module').then(m => m.IdsearchModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
