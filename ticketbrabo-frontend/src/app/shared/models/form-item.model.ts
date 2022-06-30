export interface IFormItem {
    label: string;
    placeholder: string;
    name: string;
    id: string;
    type: FormItemTypeEnum;
    group?: string;
    value?: any;
}

export interface IFormSchema {
    resourceName: string,
    fields: IFormItem[]
}

export enum FormItemTypeEnum{
    TEXT = 'text',
    DATE_TIME = 'datetime-local',
    NUMBER = 'number',
    EMAIL = 'email'
}
