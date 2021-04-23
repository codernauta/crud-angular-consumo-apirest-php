import { Component, OnInit } from '@angular/core';
import { ClienteService } from "../../../services/clientes/cliente.service";
import { Cliente } from "../../../clases/cliente";

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes() {
    this.clienteService.obtenerClientes().subscribe(clientes => this.clientes = clientes);
  }

  eliminar(id_cliente: number) {
    this.clienteService.eliminar(id_cliente).subscribe(resultado => {
      if(!resultado['delete']) {
        alert('Ocurrió un error al eliminar el registro');
      }//end fi
      this.cargarClientes();
    })
    
  }

}
