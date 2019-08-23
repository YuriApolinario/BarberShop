import { Component, OnInit } from '@angular/core';
import { Agendamento } from '../entidade/agendamento';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { getLocaleMonthNames } from '@angular/common';
import { map } from 'rxjs/operators';
import { Servico } from '../entidade/servico';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {
  agendamento = new Agendamento();

  listaServicos: Observable<Servico[]>;
  

  constructor(private fire: AngularFireDatabase, private rota: Router) {}

  ngOnInit() {
  }

  salvar(){
    this.fire.list('agendamento').push(this.agendamento);
    this.agendamento = new Agendamento();
    this.rota.navigate(['agendamento']);
  }
}
