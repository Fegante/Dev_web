import { FormItemTypeEnum, IFormItem, IFormSchema } from "src/app/shared/models/form-item.model";


export const formItem: IFormSchema =
{
    resourceName: 'evento',
    fields: [
        {
            label: 'Nome',
            placeholder: 'Nome do Evento',
            name: 'eventName',
            id: 'eventName',
            type: FormItemTypeEnum.TEXT
        },
        {
            label: 'Data/Hora Início',
            placeholder: 'Data/Hora',
            name: 'eventDateStart',
            id: 'eventDateStart',
            type: FormItemTypeEnum.DATE_TIME
        },
        {
            label: 'Data/Hora Fim',
            placeholder: 'Data/Hora',
            name: 'eventDateEnd',
            id: 'eventDateEnd',
            type: FormItemTypeEnum.DATE_TIME
        },
        {
            label: 'Investimento',
            placeholder: 'R$ 00,00',
            name: 'eventInvestiment',
            id: 'eventInvestiment',
            type: FormItemTypeEnum.NUMBER
        },
        {
            label: 'Rua',
            placeholder: 'Rua...',
            name: 'eventStreet',
            id: 'eventStreet',
            group: 'address',
            type: FormItemTypeEnum.TEXT
        },
        {
            label: 'Bairro',
            placeholder: 'Bairro...',
            name: 'eventDistrict',
            id: 'eventDistrict',
            group: 'address',
            type: FormItemTypeEnum.TEXT
        },
        {
            label: 'Cidade',
            placeholder: 'Cidade...',
            name: 'eventCity',
            id: 'eventCity',
            group: 'address',
            type: FormItemTypeEnum.TEXT
        },
        {
            label: 'CEP',
            placeholder: '29000',
            name: 'eventCEP',
            id: 'eventCEP',
            group: 'address',
            type: FormItemTypeEnum.NUMBER
        }
    ]
};