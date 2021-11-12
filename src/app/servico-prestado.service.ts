import { Observable } from 'rxjs';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServicoPrestadoBusca } from './clientes/clientes-lista/ServicoPrestadoBusca';

@Injectable({
  providedIn: 'root',
})
export class ServicoPrestadoService {
  apiURL: string = environment.apiURL + '/api/servico-prestado';

  constructor(private http: HttpClient) {}

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(this.apiURL, servicoPrestado);
  }

  buscar(nome: any, mes: any): Observable<ServicoPrestadoBusca[]> {
    const httpParams = new HttpParams().set('nome', nome).set('mes', mes);
    const url = this.apiURL + '?' + httpParams;
    console.log(url);
    return this.http.get<any>(url);
  }
}
