import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
   loadComponent: ()=> import('./pages/login/login.component').then(m => m.LoginComponent) 
  },
  { path: 'dashboard',
   loadComponent: ()=> import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
