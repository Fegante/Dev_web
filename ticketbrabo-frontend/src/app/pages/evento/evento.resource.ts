import { FormItemTypeEnum, IFormItem, IFormSchema } from "src/app/shared/models/form-item.model";


export const formItem: IFormSchema =
{
    resourceName: 'evento',
    fields: [
        {
            label: 'Nome',
            placeholder: 'Nome do Evento',
            name: 'nome',
            id: 'nome',
            type: FormItemTypeEnum.TEXT
        },
        {
            label: 'Data/Hora Início',
            placeholder: 'Data/Hora',
            name: 'dataHoraInicio',
            id: 'dataHoraInicio',
            type: FormItemTypeEnum.DATE_TIME
        },
        {
            label: 'Data/Hora Fim',
            placeholder: 'Data/Hora',
            name: 'dataHoraFim',
            id: 'dataHoraFim',
            type: FormItemTypeEnum.DATE_TIME
        },
        {
            label: 'Investimento',
            placeholder: 'R$ 00,00',
            name: 'totalInvestido',
            id: 'totalInvestido',
            type: FormItemTypeEnum.NUMBER
        },
        {
            label: 'Rua',
            placeholder: 'Rua...',
            name: 'logradouro',
            id: 'logradouro',
            group: 'localidade',
            type: FormItemTypeEnum.TEXT
        },
        {
            label: 'Bairro',
            placeholder: 'Bairro...',
            name: 'bairro',
            id: 'bairro',
            group: 'localidade',
            type: FormItemTypeEnum.TEXT
        },
        {
            label: 'Município',
            placeholder: 'Município...',
            name: 'municipio',
            id: 'municipio',
            group: 'localidade',
            type: FormItemTypeEnum.TEXT
        },
        {
            label: 'CEP',
            placeholder: '29000',
            name: 'cep',
            id: 'cep',
            group: 'localidade',
            type: FormItemTypeEnum.NUMBER
        }
    ]
};