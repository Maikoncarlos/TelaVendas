import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css'],
})
export class ClientesListaComponent implements OnInit {
  // clientes: Cliente[] = [];
  clientes:any;
  clienteSelecionado:any;
  msgSucesso: any;
  msgErro: any;

  constructor(
    private service: ClientesService,
    private router: Router ) {

  }

  ngOnInit(): void {
    this.service.getClientes2()
    .subscribe( resposta => this.clientes = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/clientes-form']);
  }

  preparandoDelecao(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
    this.service.deletarCliente(this.clienteSelecionado)
    .subscribe(
      resposta => {this.msgSucesso = 'Cliente deletado com sucesso!'
    this.ngOnInit()
  },
          erro => this.msgErro = 'ocorreu um erro ao tengtar deletar cliente!'
    )
  }
}
