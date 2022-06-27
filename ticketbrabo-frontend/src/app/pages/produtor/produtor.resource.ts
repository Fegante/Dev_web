import { FormItemTypeEnum, IFormSchema } from "src/app/shared/models/form-item.model";

export const formItem: IFormSchema =
{
    resourceName: 'produtor',
    fields: [
        {
            label: 'Nome',
            placeholder: 'Ex: Maria, João',
            name: 'nome',
            id: 'nome',
            type: FormItemTypeEnum.TEXT
        },
        {
            label: 'E-mail',
            placeholder: 'Ex: maria@email',
            name: 'email',
            id: 'email',
            type: FormItemTypeEnum.EMAIL
        },
        {
            label: 'CPF',
            placeholder: 'CPF',
            name: 'cpf',
            id: 'cpf',
            type: FormItemTypeEnum.TEXT
        },
        {
            label: 'CNPJ',
            placeholder: 'CNPJ',
            name: 'cnpj',
            id: 'CNPJ',
            type: FormItemTypeEnum.TEXT
        },
        {
            label: 'Telefone',
            placeholder: '27 000 000',
            name: 'phone',
            id: 'phone',
            type: FormItemTypeEnum.TEXT
        }
    ]
};