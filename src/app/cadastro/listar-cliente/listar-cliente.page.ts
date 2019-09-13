import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {Cliente} from '../entidade/cliente'
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { SalvarClientePage } from '../salvar-cliente/salvar-cliente.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.page.html',
  styleUrls: ['./listar-cliente.page.scss'],
})
export class ListarClientePage implements OnInit {

  cliente: Cliente = new Cliente();



  listaClientes : Observable<Cliente[]>;
  constructor(
    private fire: AngularFireDatabase, 
    private modal: ModalController) { 
    
      this.listaClientes = this.fire.list<Cliente>('cliente').snapshotChanges().pipe(
    map(lista => lista.map( linha => ({key: linha.payload.key,... linha.payload.val() })))  
    );
  }

  ngOnInit() {
  }
 excluir(key:string){
  
   this.fire.list('cliente').remove(key);

 }

 async alterar(cliente: Cliente){
   const tela = await this.modal.create({
     component: SalvarClientePage,
     componentProps: {cliente : cliente}
   });
   tela.present();
 }

/* filtrar(key: string){
  this.listaClientes =  this.fire.list('cliente'),{
    query:{
      orderByChild:'nome',
      equalTo: key
    }
  }) as Observable<Cliente[]>;
  return this.listaClientes;




}*/
 }