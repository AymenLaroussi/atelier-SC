import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './modules/participants/register/register.component';
import { ListComponent } from './modules/ateliers/list/list.component';
import { ListParticipantsComponent } from './modules/participants/list/listParticipants.component';
import { LoginComponent } from './modules/participants/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'participants/register', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'participants', component: ListParticipantsComponent },
  { path: 'participants/register', component: RegisterComponent },
  { path: 'ateliers', component: ListComponent },
  { path: '**', redirectTo: 'participants/register' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
