import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AutoresComponent } from './autores/autores.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { AboutComponent } from './about/about.component';
import { LibroComponent } from './libro/libro.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [InicioComponent, CatalogoComponent, AutoresComponent, EnlacesComponent, AboutComponent, LibroComponent],
  exports: [InicioComponent, CatalogoComponent, AutoresComponent, EnlacesComponent, AboutComponent, LibroComponent]
})
export class ComponentesModule { }
