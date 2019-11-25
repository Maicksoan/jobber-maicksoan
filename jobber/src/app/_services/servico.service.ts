import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) { }

  public find(): Observable<ServicoEntity[]> {
    return this.http.get<ServicoEntity[]>(environment.urlSaaS + '/servicos');
  }
  public save(servico: ServicoEntity) {
    if (servico.id) {
      return this.update(servico);
    } else {
      return this.create(servico);
    }
  }
  public delete(id: number): Observable<ServicoEntity> {
    return this.http.delete<ServicoEntity>(environment.urlSaaS + '/servicos/' + id); 
  }
  private create(servico: ServicoEntity): Observable<ServicoEntity> {
    return this.http.post<ServicoEntity>(environment.urlSaaS + '/servicos', servico);
  }
  private update(servico: ServicoEntity): Observable<ServicoEntity> {
    return this.http.put<ServicoEntity>(environment.urlSaaS + '/servicos/' + servico.id, servico);
  }

}

export class ServicoEntity {
  id: number;
  codigo: string;
  nome: string;
  descricao: string;
  preco: number;
}