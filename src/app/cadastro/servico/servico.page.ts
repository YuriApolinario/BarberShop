import { Component, OnInit } from '@angular/core';
import { Servico } from '../entidade/servico';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Cliente } from '../entidade/cliente';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.page.html',
  styleUrls: ['./servico.page.scss'],
})
export class ServicoPage implements OnInit {
  servico: Servico = new Servico();
  constructor(private fire: AngularFireDatabase, private rota: Router) { }

  ngOnInit() {
  }
  salvar(){
    this.fire.list('servico').push(this.servico);
    this.servico = new Servico();
    alert("salvo com sucesso");
    this.rota.navigate
    (['servico'])
  }
}
