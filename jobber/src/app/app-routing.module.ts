import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContratanteComponent } from './contratante/contratante.component';
import { CidadeComponent } from './cidade/cidade.component';
import { ServicoComponent } from './servico/servico.component';
import { PrestadorComponent } from './prestador/prestador.component';
import { EstadoComponent } from './estado/estado.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  { path: 'contratante', component: ContratanteComponent },
  { path: 'estado', component: EstadoComponent },
  { path: 'cidade', component: CidadeComponent },
  { path: 'servico', component: ServicoComponent },
  { path: 'prestador', component: PrestadorComponent },
  { path: '', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent }

  //otherwise
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
