import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../_components/confirm-dialog/confirm-dialog.component';
import { ServicoEntity, ServicoService } from '../_services/servico.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss']
})
export class ServicoComponent implements OnInit {

  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;

  public displayedColumns: string[] = ['codigo', 'nome', 'descricao', 'preco', 'options'];

  public servicos: ServicoEntity[] = [];


  public servico: ServicoEntity = new ServicoEntity();

  public msgerror: string;
  public loading: boolean;

  constructor(private service: ServicoService,
    private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {


    this.msgerror = '';
    this.loading = true;


    this.service.find().subscribe(result => {

      this.servicos = result;
    }, error => {
      this.msgerror = error.message;
    }).add(() => this.loading = false);
  }
  private openSidebar(servico: ServicoEntity) {
    this.servico = servico;

    this.sidenav.open();
  }
  public add() {
    this.openSidebar(new ServicoEntity());
  }
  public editar(servico: ServicoEntity) {
    this.openSidebar(servico);
  }
  public excluir(servico: ServicoEntity): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: new ConfirmDialogModel('Excluir Registro', 'Deseja realmente excluir o registro?')
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = false;
        this.service.delete(servico.id).subscribe(result => {
          this.snackBar.open('Registro salvo com sucesso!', '', {
            duration: 3000
          });
        }, error => {
          this.msgerror = error.message;
        }).add(() => {
          this.loading = false;
        })
      }
    })
  }
  public confirmar() {
    this.loading = true;

    this.service.save(this.servico).subscribe(result => {
      this.snackBar.open('Registro salvo com sucesso!', '', {
        duration: 3000
      });
    }, error => {
      this.msgerror = error.message;
    }).add(() => {
      this.sidenav.close();

      this.loading = false;
    });
  }

  public compareOptions(id1, id2) {
    return id1 && id2 && id1.id === id2.id;
  }
}