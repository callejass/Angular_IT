import { LibrosService } from './libros.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [LibrosService]/* ,
  exports: [LibrosService] los servicios no hace falta exportarlos*/
})
export class MisserviciosModule { }
