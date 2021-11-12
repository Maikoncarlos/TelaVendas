import { ServicoPrestado } from './../servicoPrestado';
import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: any;
  servico: any;

  constructor(
    private clienteService: ClientesService,
    private service: ServicoPrestadoService
  ) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe( response => this.clientes = response);
  }

  onSubmit(){
    this.service.salvar(this.servico)
    .subscribe(response => { console.log(response);
      })
  }

}
