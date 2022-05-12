import { Ficha } from "@models/ficha-model";
import { ItemFicha } from "@models/Item-ficha-model";
import itemfichaService from "@services/itemficha-service";
import produtoService from "@services/produto-service";

export class FichaBuilder {

    constructor(private ficha: Ficha) { }

    builder() {

        //this.adicionarItemsFicha();
        //this.diminuirQuantidadeProduto();
        
        
    }

    adicionarItemsFicha() {
        const itemsFicha: ItemFicha[] = [];
        this.ficha.itemsFicha.forEach(async (itemFicha) => {
            const itemResult = await itemfichaService.getOne(itemFicha.id)
            if(itemResult != null){
                itemsFicha.push(itemResult);
            }
         });

         this.ficha.itemsFicha = itemsFicha;
    }

    diminuirQuantidadeProduto() {
        this.ficha.itemsFicha.forEach( itemFicha => {
            const produto = itemFicha.produto;
            produto.quantidadeTotal = produto.quantidadeTotal - itemFicha.quantidade;
            if(produto.quantidadeTotal <0 ){
                throw "Quantidade insuficiente";
            }
        });

    }


}