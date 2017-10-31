
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { BuscadorComponent} from './buscador/buscador.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule

  ],
  declarations: [PadreComponent, HijoComponent, BuscadorComponent],
  exports: [PadreComponent, HijoComponent, BuscadorComponent]
})
export class SamplesModule { }
