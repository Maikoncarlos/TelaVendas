import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './clientes/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURL + '/api/clientes';

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>( `${this.apiURL}` , cliente);
  }

  atualizar(cliente: Cliente) : Observable<any> {
    return this.http.put<Cliente>( `${this.apiURL}/${cliente.id}`, cliente);
  }

 /* é o mesmo do de baixo...
    getClientes(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  } */

  getClientes(){
    return this.http.get(`${this.apiURL}`);
  }

  getClienteById(id: any) {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  deletarCliente(cliente: Cliente) : Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);

  }

}


