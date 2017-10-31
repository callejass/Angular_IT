import { LibroComponent } from './componentes/libro/libro.component';
import { EnlacesComponent } from './componentes/enlaces/enlaces.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { AutoresComponent } from './componentes/autores/autores.component';
import { AboutComponent } from './componentes/about/about.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'autores', component: AutoresComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'enlaces', component: EnlacesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'libro/:id', component: LibroComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const appRouting = RouterModule.forRoot(routes);
