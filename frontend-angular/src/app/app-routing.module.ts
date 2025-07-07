import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './modules/participants/register/register.component';
import { ListComponent } from './modules/ateliers/list/list.component';


const routes: Routes = [
  { path: '', redirectTo: 'participants/register', pathMatch: 'full' },
  { path: 'participants/register', component: RegisterComponent },
  { path: 'ateliers', component: ListComponent },
  { path: '**', redirectTo: 'participants/register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
