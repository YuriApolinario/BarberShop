import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {Cliente} from '../entidade/cliente'
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.page.html',
  styleUrls: ['./listar-cliente.page.scss'],
})
export class ListarClientePage implements OnInit {

  cliente: Cliente = new Cliente();



  listaClientes : Observable<Cliente[]>;
  constructor(private fire : AngularFireDatabase) { 
    this.listaClientes = this.fire.list<Cliente>('cliente').snapshotChanges().pipe(
    map(lista => lista.map( linha => ({key: linha.payload.key,... linha.payload.val() })))  
    );
  }

  ngOnInit() {
  }
 excluir(key:string){
  
   this.fire.list('cliente').remove(key);

 }

 


}
