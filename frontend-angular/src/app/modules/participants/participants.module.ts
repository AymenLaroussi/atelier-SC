import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantsRoutingModule } from './participants-routing.module';
import { ParticipantsComponent } from './participants.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParticipantsComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ParticipantsRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    RegisterComponent, 
  ]
})
export class ParticipantsModule { }
