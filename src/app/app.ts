import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpiList } from './epi-list/epi-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EpiList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 titulo = "Sistema de controle de EPIs";
 subtitulo = "Gestão  de seguraça do trabalho";
 descricao = "Aplição para contole, monitoramento e conformidade dos equipamentos de proteção individual";
 
}
