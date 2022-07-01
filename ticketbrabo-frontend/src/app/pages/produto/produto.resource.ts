import { FormItemTypeEnum, IFormSchema } from "src/app/shared/models/form-item.model";

export const formItem: IFormSchema =
{
    resourceName: 'produto',
    fields: [
        {
            label: 'Preço',
            placeholder: 'Digite o valor',
            name: 'preco',
            id: 'preco',
            type: FormItemTypeEnum.NUMBER
        },
        {
            label: 'Quantidade',
            placeholder: 'Digite o valor',
            name: 'quantidadeTotal',
            id: 'quantidadeTotal',
            type: FormItemTypeEnum.NUMBER
        },
        {
            label: 'categoria',
            placeholder: 'categoria do produto',
            name: 'nome',
            id: 'nome',
            type: FormItemTypeEnum.TEXT,
            group: 'categoriaProduto'
        },
        {
            label: 'descricão',
            placeholder: 'descrição do produto',
            name: 'descricao',
            id: 'descricao',
            type: FormItemTypeEnum.TEXT,
            group: 'categoriaProduto'
        }
 
    ]
};