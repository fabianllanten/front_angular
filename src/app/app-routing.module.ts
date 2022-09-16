import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import {InicioComponent} from './inicio/inicio.component'
import { ServicioComponent } from './servicio/servicio.component';

const routes: Routes = [
  {
    path:'',
    component:InicioComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'servicio',
    component:ServicioComponent
  },
  {
    path:'contactenos',
    component:ContactoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
