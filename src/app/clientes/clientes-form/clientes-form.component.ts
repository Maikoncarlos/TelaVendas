import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Router, ActivatedRoute } from '@angular/router'

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css'],
})
export class ClientesFormComponent implements OnInit {
  cliente: any;
  success: boolean = false;
  errors!: String[];
  id: any;

  constructor(
    private service: ClientesService,
    private router: Router,
    private ativatedRoute: ActivatedRoute
    ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
   const params = this.ativatedRoute.params
   params.subscribe( urlParams => {
     this.id = urlParams['id'];
     if(this.id){
      this.service
      .getClienteById(this.id)
      .subscribe(
        resposta => this.cliente = resposta
        )
      }
      })
    }

  voltarParaListagem(){
    this.router.navigate(['/clientes-lista']);
  }

  onSubmit() {
    if(this.id){
      this.service.atualizar(this.cliente)
      .subscribe(resposta => {
        this.success = true;
        this.errors! = [];
      }, erros => {
        this.errors = ['Erro ao atualizar o Cliente']
      })

    }else{

    this.service
    .salvar(this.cliente)
    .subscribe(
      (response) => {
        this.success = true;
        this.errors! = [];
        this.cliente = response;
      },
      (errorResponse) => {
        this.errors = errorResponse.error.errors;
        this.success = false;
      }
    );
  }
}


}
