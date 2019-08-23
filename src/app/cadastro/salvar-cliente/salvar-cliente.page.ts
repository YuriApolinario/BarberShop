import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router'

import { Cliente } from '../entidade/cliente';
import { Servico } from '../entidade/servico';



@Component({
  selector: 'app-salvar-cliente',
  templateUrl: './salvar-cliente.page.html',
  styleUrls: ['./salvar-cliente.page.scss'],
})
export class SalvarClientePage implements OnInit {
  cliente: Cliente = new Cliente();
  listaServico: Observable<Servico[]>;

  constructor(private fire: AngularFireDatabase, private rota: Router) { 

    this.listaServico = this.fire.list<Servico>('servico').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  ngOnInit() {
  }

  salvar() {
    this.fire.list('cliente').push(this.cliente);
    this.cliente = new Cliente();
    alert("salvo com sucesso");
    this.rota.navigate(['clientes']);
  }

  
}
