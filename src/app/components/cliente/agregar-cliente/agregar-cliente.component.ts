import { Component, OnInit } from '@angular/core';
import { Cliente } from "../../../clases/cliente";
import { ClienteService } from "../../../services/clientes/cliente.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {
  cliente = new Cliente(0,'','','','','');
  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void { }

  agregar() {
    this.clienteService.agregar(this.cliente).subscribe(resultado => {
      if(!resultado['insert']) {
        alert('Ocurriò un error al insertar la información del cliente');
      }//end if
      else {
        this.router.navigate(['/']);
      }//end else

    });
    
  }

}
