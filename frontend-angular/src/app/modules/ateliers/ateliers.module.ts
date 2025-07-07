import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AteliersRoutingModule } from './ateliers-routing.module';
import { AteliersComponent } from './ateliers.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AteliersComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AteliersRoutingModule
  ]
})
export class AteliersModule { }
