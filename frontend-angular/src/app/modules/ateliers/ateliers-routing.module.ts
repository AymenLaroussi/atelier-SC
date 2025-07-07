import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AteliersComponent } from './ateliers.component';

const routes: Routes = [{ path: '', component: AteliersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AteliersRoutingModule { }
