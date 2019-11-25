import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ContratanteComponent } from './contratante/contratante.component';
import { ConfirmDialogComponent } from './_components/confirm-dialog/confirm-dialog.component';

import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { CidadeComponent } from './cidade/cidade.component';
import { AgmCoreModule } from '@agm/core';
import { ServicoComponent } from './servico/servico.component';
import { EstadoComponent } from './estado/estado.component';
import { PrestadorComponent } from './prestador/prestador.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material.module';
import { DataService } from './data/data.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ContratanteComponent,
    ConfirmDialogComponent,
    CidadeComponent,
    ServicoComponent,
    EstadoComponent,
    PrestadorComponent,
    DashboardComponent,
    PostDialogComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    FlexLayoutModule,
    MaterialModule,


    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDy6kfY-rVOtJhHStLoPWVYfpAMzcIMJlE'
    })
  ],
  providers: [DataService, AuthService],
  entryComponents: [ConfirmDialogComponent, PostDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
