import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BuscarComponent } from './buscar/buscar.component';
import { SismosService } from './services/sismos.service';
import { DetallesComponent } from './detalles/detalles.component';
import { EditarComponent } from './editar/editar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableFilterPipe } from './table-filter.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BuscarComponent,
    DetallesComponent,
    EditarComponent,
    TableFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [SismosService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
