import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

// Feature Modules
import { ParticipantsModule } from './modules/participants/participants.module';
import { AteliersModule } from './modules/ateliers/ateliers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    ParticipantsModule,
    AteliersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
