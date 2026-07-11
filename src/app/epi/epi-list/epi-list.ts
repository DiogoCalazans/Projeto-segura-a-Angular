import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EpiDetalhe } from '../epi-detalhe/epi-detalhe';

@Component({
  selector: 'app-epi-list',
  imports: [RouterModule,EpiDetalhe],
  templateUrl: './epi-list.html',
  styleUrl: './epi-list.scss',
})
export class EpiList {}
