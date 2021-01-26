import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './app-1/carousel/carousel.component';
import { EmpleadosComponent } from './app-2/empleados/empleados.component';

const routes: Routes = [
  { path: 'empleados', component:EmpleadosComponent },
  { path: 'carusel', component:CarouselComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
