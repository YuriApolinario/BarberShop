import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Servico } from '../entidade/servico';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista-servicos',
  templateUrl: './lista-servicos.page.html',
  styleUrls: ['./lista-servicos.page.scss'],
})
export class ListaServicosPage implements OnInit {
  servico: Servico = new Servico();

  listaServicos: Observable<Servico[]>;
  constructor(private fire: AngularFireDatabase) {
    this.listaServicos = this.fire.list<Servico>('servico').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
   }

  ngOnInit() {
  } 
  
  excluir(key:string) {

    this.fire.list('servico').remove(key);

  }
 
  
 

}
