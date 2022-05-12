import { Ficha } from "@models/ficha-model";
import { ItemFicha } from "@models/Item-ficha-model";
import itemfichaService from "@services/itemficha-service";
import produtoService from "@services/produto-service";

export class FichaBuilder {

    constructor(private ficha: Ficha, private itemsFicha: ItemFicha[]) { }

    builder() {

        this.gerenciarItemsFicha();
        
    }

    gerenciarItemsFicha() {
        const itemsFichaValidos: ItemFicha[] = [];

        this.itemsFicha.forEach( async (itemFicha) => {
            const itemValido = await this.adicionarItemsFicha(itemFicha);
            //TODO diminuir quantidade estoque
            this.diminuirQuantidadeProduto(itemValido);

            itemsFichaValidos.push(itemValido);
        });
    }

    async adicionarItemsFicha(itemFicha: ItemFicha): Promise<ItemFicha> {
            const itemResult = itemfichaService.getOne(itemFicha.id);
            if(itemResult == null){
                throw "Item inválido";
            }
        return itemResult as Promise<ItemFicha>;
    }

    diminuirQuantidadeProduto(itemFicha: ItemFicha) {
            const produto = itemFicha.produto;
            produto.quantidadeTotal = produto.quantidadeTotal - itemFicha.quantidade;
            this.validarQuantidadeProduto(produto.quantidadeTotal);
    }

    validarQuantidadeProduto(quantidadeTotal: number){
        if(quantidadeTotal <0 ){
            throw "Quantidade insuficiente";
        } else if(quantidadeTotal == 0){
            throw "Produto não disponível";
        }
    }
}