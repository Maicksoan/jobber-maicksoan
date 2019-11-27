
import { PrestadorEntity, PrestadorService } from '../_services/prestador.service';
import { CidadeService, CidadeEntity } from './../_services/cidade.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../_components/confirm-dialog/confirm-dialog.component';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;

  public displayedColumns: string[] = ['cpf', 'nome', 'email', 'cidade', 'options'];

  public prestadores: PrestadorEntity[] = [];
  public cidades: CidadeEntity[] = [];


  public prestador: PrestadorEntity = new PrestadorEntity();

  public msgerror: string;
  public loading: boolean;

  constructor(private service: PrestadorService, private cidadeService: CidadeService,
    private snackBar: MatSnackBar, private dialog: MatDialog) { }
    ngOnInit() {


      this.msgerror = '';
      this.loading = true;
  
  
      this.service.find().subscribe(result => {
  
        this.prestadores = result;
  
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
    private openSidebar(prestador: PrestadorEntity) {
      this.prestador = prestador;
  
      this.sidenav.open();
    }
    public add() {
      this.openSidebar(new PrestadorEntity());
    }
    public editar(prestador: PrestadorEntity) {
      this.openSidebar(prestador);
    }
    public excluir(prestador: PrestadorEntity): void {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '400px',
        data: new ConfirmDialogModel('Excluir Registro', 'Deseja realmente excluir o registro?')
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.loading = false;
          this.service.delete(prestador.id).subscribe(result => {
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
  
      this.service.save(this.prestador).subscribe(result => {
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