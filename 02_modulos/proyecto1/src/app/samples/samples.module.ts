import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';
import { LocalComponent } from './local/local.component';
import { PensamientosComponent } from './pensamientos/pensamientos.component';
import { PensamientoComponent } from './pensamiento/pensamiento.component';
import { PipesComponent} from './pipes/pipes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [BindingComponent, LocalComponent, PensamientosComponent, PipesComponent],
  declarations: [BindingComponent, LocalComponent, PensamientosComponent, PensamientoComponent, PipesComponent]
})
export class SamplesModule { }
