import { Cliente } from "./cliente";
import { ItemCesta } from "./item-cesta";

export class Cesta {
    codigo: number = 0;
    cliente: Cliente = new Cliente();
    itens: ItemCesta[] = [];
    valorTotal: number = 0;
}
