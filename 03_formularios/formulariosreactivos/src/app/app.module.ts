import { Form1Component } from './form1/form1.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Form1Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, /* Importar esto para poder utilizar formularios reactivos*/
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
