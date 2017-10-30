
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { MisserviciosModule } from './misservicios/misservicios.module';
import { SamplesModule } from './samples/samples.module';
import { Form1Component } from './form1/form1.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, /* Importar esto para poder utilizar formularios reactivos*/
    SharedModule,
    SamplesModule,
    MisserviciosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
