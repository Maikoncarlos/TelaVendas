import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  getCLientes(): Cliente[]{
    let cliente = new Cliente();
    cliente.id = 8;
    cliente.nome = 'Paloma Saturno';
    cliente.cpf = '66819756070';
    cliente.dataCadastro = '28/10/2021'
    return [cliente];
  }

}


