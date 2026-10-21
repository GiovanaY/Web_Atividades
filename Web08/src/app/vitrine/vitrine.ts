import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {
  lista: Produto[] = [
  {
    "codigo": 1,
    "nome": "Dominus Empyreus",
    "descritivo": "Quidquid latine dictum sit, altum sonatur...",
    "valor": 45966277.86,
    "valorPromo": 45000000.00,
    "quantidade": 3,
    "destaque": 1
  },
  {
    "codigo": 2,
    "nome": "Boné de Beisebol com R de Roblox",
    "descritivo": "Imagine um mundo no qual você pudesse ter este lindo boné de beisebol... Peraí, a gente já tá nele!",
    "valor": 0,
    "quantidade": 100000,
    "destaque": 0
  },
  {
    "codigo": 3,
    "nome": "Deadly Dark Dominus",
    "descritivo": "Sic transit gloria mundi...",
    "valor": 45966277.86,
    "quantidade": 2,
    "destaque": 0
  }
];

}
