import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { EpiList } from './epi/epi-list/epi-list';
import { EpiDetalhe } from './epi/epi-detalhe/epi-detalhe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EpiList,EpiDetalhe,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 titulo = "Sistema de controle de EPIs";
 subtitulo = "Gestão  de seguraça do trabalho";
 descricao = "Aplição para contole, monitoramento e conformidade dos equipamentos de proteção individual";
 
 
 
}
