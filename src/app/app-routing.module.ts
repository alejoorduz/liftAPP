import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { auth } from 'firebase';
import { NologinGuard } from "./guards/nologin.guard";

const routes: Routes = [

  { path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate : [AuthGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule), canActivate : [NologinGuard]},
  { path: 'register', loadChildren: () => import('./componentes/register/register.module').then( m => m.RegisterPageModule),canActivate : [NologinGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
