export interface IFormItem {
    label: string;
    placeholder: string;
    name: string;
    id: string;
    type: FormItemTypeEnum;
}

export interface IFormSchema {
    resourceName: string,
    fields: IFormItem[]
}

export enum FormItemTypeEnum{
    TEXT = 'text',
    DATE_TIME = 'datetime-local',
    NUMBER = 'number'
}
