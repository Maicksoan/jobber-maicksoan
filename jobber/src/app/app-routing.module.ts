import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContratanteComponent } from './contratante/contratante.component';
import { CidadeComponent } from './cidade/cidade.component';
import { ServicoComponent } from './servico/servico.component';
import { PrestadorComponent } from './prestador/prestador.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EstadoComponent } from './estado/estado.component';
import {UserComponent} from './user/user.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';



const routes: Routes = [
  { path: 'contratante', component: ContratanteComponent },
  { path: 'estado', component: EstadoComponent },
  { path: 'cidade', component: CidadeComponent },
  { path: 'servico', component: ServicoComponent },
  { path: 'prestador', component: PrestadorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent}

  //otherwise
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
