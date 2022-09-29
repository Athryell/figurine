import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { ElencoFigurineComponent } from './elenco-figurine/elenco-figurine.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'home', component: ElencoFigurineComponent , canActivate: [AuthGuardGuard]},
  {path: 'detail', component: CardDetailComponent , canActivate: [AuthGuardGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
