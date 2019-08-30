import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../cadastro/entidade/usuario';

import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: Usuario = new Usuario();

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  logar() {
    this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email,
      this.usuario.senha).then((res) => {
        this.router.navigate(['principal']);
      }).catch((erro) => console.log(erro));
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['home']);
  }


  alterarSenha() {
    this.afAuth.auth.sendPasswordResetEmail(this.usuario.email)
    .then((res) => {
        this.router.navigate(['/']);
      }).catch((erro) => console.log(erro));
  }
}
