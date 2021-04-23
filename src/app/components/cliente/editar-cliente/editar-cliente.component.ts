import { Component, OnInit } from '@angular/core';
import { ClienteService } from "../../../services/clientes/cliente.service";
import { Cliente } from "../../../clases/cliente";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  cliente = new Cliente(0,'','','','','');
  constructor(private router: Router, private clienteService: ClienteService, private params: ActivatedRoute) { }

  ngOnInit(): void {
    let id_cliente = parseInt(this.params.snapshot.paramMap.get('id'));
    this.clienteService.obtenerDonde(id_cliente).subscribe(cliente => this.cliente = cliente[0]);
  }

  editar() {
    this.clienteService.editar(this.cliente).subscribe(resultado => {
      if(resultado['update']) {
        this.router.navigate(['/']);
      }//end if
      else {
        alert('Ocurrió un error o la información no ha sufrido algún cambio de la información original');
      }//end else
    });
  }

}
