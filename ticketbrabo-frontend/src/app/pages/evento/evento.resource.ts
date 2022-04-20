
interface IFormItem {
    label: string;
    placeholder: string;
    name: string;
    id: string;
    type: FormItemTypeEnum;
}

enum FormItemTypeEnum{
    TEXT,
}

export const formItem: [IFormItem] = [
    {
        label: 'Nome',
        placeholder: 'Nome do Evento',
        name:'eventName',
        id: 'eventName',
        type:  FormItemTypeEnum.TEXT
    }
];