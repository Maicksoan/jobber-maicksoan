import { ConfirmDialogComponent, ConfirmDialogModel } from './../_components/confirm-dialog/confirm-dialog.component';
import { CidadeService, CidadeEntity } from './../_services/cidade.service';
import { ContratanteService, ContratanteEntity } from './../_services/contratante.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contratante',
  templateUrl: './contratante.component.html',
  styleUrls: ['./contratante.component.scss']
})
export class ContratanteComponent implements OnInit {

  @ViewChild(MatSidenav,{static: true}) sidenav: MatSidenav;

  public displayedColumns: string[] = ['cpf', 'nome', 'email', 'cidade', 'options'];

  public contratantes: ContratanteEntity[] = [];
  public cidades: CidadeEntity[] = [];

  public contratante: ContratanteEntity = new ContratanteEntity();

  public msgerror: string;
  public loading: boolean;

  constructor(private service: ContratanteService, private cidadeService: CidadeService,
              private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {
    
    //Inicia variaveis de controle
    this.msgerror = '';
    this.loading = true;

    //Carrega dados
    this.service.find().subscribe(result => {

      this.contratantes = result;

      this.cidadeService.find().subscribe(result => {

        this.cidades = result;

        this.loading = false;
  
      }, error => {
        this.msgerror = error.message;
      });

    }, error => {
      this.msgerror = error.message;
    }).add(() => this.loading = false);
  }
  private openSidebar(contratante: ContratanteEntity) {
    this.contratante = contratante;

    this.sidenav.open();
  }
  public add() {
    this.openSidebar(new ContratanteEntity());
  }
  public editar( contratante: ContratanteEntity ): void {
    this.openSidebar( contratante );
  }

  public excluir( contratante: ContratanteEntity ): void {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: new ConfirmDialogModel('Excluir Registro', 'Deseja realemente excluir o registro?')
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = false;

        this.service.delete( contratante.id ).subscribe(result => {
          this.snackBar.open('Registro excluído com sucesso!', '', {
            duration: 3000
          });
        }, error => {
          this.msgerror = error.message;
        }).add(() => {
          this.loading = false;
        });

      }
    });

  }

  public confirmar(): void {
    this.loading = true;

    this.service.save(this.contratante).subscribe(result=>{
      this.snackBar.open('Registro salvo com sucesso!', '', {
        duration: 3000
      });
    }, error=>{
      this.msgerror = error.message;
    }).add(()=> {
      this.sidenav.close();

      this.loading = false;
    });
  }

  public compareOptions(id1, id2) {
    return id1 && id2 && id1.id === id2.id;
  }
}
