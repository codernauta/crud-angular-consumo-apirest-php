import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarClienteComponent } from './components/cliente/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { ListaClientesComponent } from './components/cliente/lista-clientes/lista-clientes.component';

const routes: Routes = [
  {
    path: '',
    component: ListaClientesComponent
  },
  {
    path: 'agregar_cliente',
    component: AgregarClienteComponent
  },
  {
    path: 'editar_cliente/:id',
    component: EditarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
