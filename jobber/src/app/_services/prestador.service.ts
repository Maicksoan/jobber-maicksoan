import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CidadeEntity } from './cidade.service';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

  constructor(private http: HttpClient) { }

  public find(): Observable<PrestadorEntity[]> {
    return this.http.get<PrestadorEntity[]>(environment.urlSaaS + '/prestadores');
  }
  public save(prestador: PrestadorEntity) {
    if (prestador.id) {
      return this.update(prestador);
    } else {
      return this.create(prestador);
    }
  }
  public delete(id: number): Observable<PrestadorEntity> {
    return this.http.delete<PrestadorEntity>(environment.urlSaaS + '/prestadores/' + id); 
  }
  private create(prestadore: PrestadorEntity): Observable<PrestadorEntity> {
    return this.http.post<PrestadorEntity>(environment.urlSaaS + '/prestadores', prestadore);
  }
  private update(prestadore: PrestadorEntity): Observable<PrestadorEntity> {
    return this.http.put<PrestadorEntity>(environment.urlSaaS + '/prestadores/' + prestadore.id, prestadore);
  }

}

export class PrestadorEntity {
  id: number;
  cpf: string;
  nome: string;
  email: string;
  cidade: CidadeEntity;
}