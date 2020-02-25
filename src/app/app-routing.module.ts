import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BuscarComponent } from './buscar/buscar.component';
import { DetallesComponent } from './detalles/detalles.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  { path: '', component: BuscarComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'detalles/:id', component: DetallesComponent },
  { path: 'editar/:id', component: EditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
