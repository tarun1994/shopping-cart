import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
  import { AuthService } from './auth.service';

const routes: Routes = [
  { path: '',canActivate : [AuthService], component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home',canActivate : [AuthService], component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
