import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-barra-busca',
  styleUrl: './barra-busca.css',
  templateUrl: './barra-busca.html',
})
export class BarraBusca {
  busca: string = "";
  private ehBrowser: boolean = isPlatformBrowser(inject(PLATFORM_ID));

  ngOnInit() {
    this.carregar();
  }

  gravar() {
    if (this.ehBrowser) {
      localStorage.setItem("busca", this.busca);
    }
  }

  carregar() {
    if (this.ehBrowser) {
      let texto = localStorage.getItem("busca");
      if (texto != null) {
        this.busca = texto;
      }
    }
  }
}
