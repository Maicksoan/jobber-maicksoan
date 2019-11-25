import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CidadeEntity } from './cidade.service';

@Injectable({
  providedIn: 'root'
})
export class ContratanteService {

  constructor(private http: HttpClient) { }

  public find():Observable<ContratanteEntity[]> {
    return this.http.get<ContratanteEntity[]>( environment.urlSaaS+ '/contratantes');
  }
  public save( contratante: ContratanteEntity ) {
    if (contratante.id) {
      return this.update( contratante );
    } else {
      return this.create( contratante );
    }
  }
  public delete( id: number ):Observable<ContratanteEntity> {
    return this.http.delete<ContratanteEntity>( environment.urlSaaS+ '/contratantes/'+ id);
  }
  private create( contratante: ContratanteEntity ):Observable<ContratanteEntity> {
    return this.http.post<ContratanteEntity>( environment.urlSaaS+ '/contratantes', contratante);
  }
  private update( contratante: ContratanteEntity ):Observable<ContratanteEntity> {
    return this.http.put<ContratanteEntity>( environment.urlSaaS+ '/contratantes/'+ contratante.id, contratante);
  }

}

export class ContratanteEntity {
  id: number;
  cpf: string;
  nome: string;
  email: string;
  cidade: CidadeEntity;
}
