import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cliente', loadChildren: './cadastro/salvar-cliente/salvar-cliente.module#SalvarClientePageModule' },
  { path: 'clientes', loadChildren: './cadastro/listar-cliente/listar-cliente.module#ListarClientePageModule' },
  { path: 'servico', loadChildren: './cadastro/servico/servico.module#ServicoPageModule' },
  { path: 'agendamento', loadChildren: './cadastro/agendamento/agendamento.module#AgendamentoPageModule' },
  { path: 'servicos', loadChildren: './cadastro/lista-servicos/lista-servicos.module#ListaServicosPageModule' },
  { path: 'edita-cliente', loadChildren: './edita-cliente/edita-cliente.module#EditaClientePageModule' },
  { path: 'principal', loadChildren: './principal/principal.module#PrincipalPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
 
 
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
