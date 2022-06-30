import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";


@Injectable()
export class FormResourceService {
    private groupKey!: string;
    private resourceName !: string;
    private fieldsAgrupados: any = {};
    private form !: FormGroup;

    constructor(private formBuilder: FormBuilder){

    }

    public defineGroupForm(schemaFields: any, resourceName: string): FormGroup {
        this.resourceName = resourceName;
        const fields: any = this.agroupResourceField(schemaFields);
        const values = Object.values(fields[this.resourceName]);
       
        values.forEach((field: any) => {
            
            if (field instanceof Array) {
                this.defineMultiField(field);
            } else {
                const key = field.name;
                this.fieldsAgrupados[key] = field.value;
            }
        });
        return this.fieldsAgrupados;
    }

    private agroupResourceField(fields: any[]): any {
        return fields.reduce((prev, curr) => {
           this.groupKey = curr.group || this.resourceName;

            if (this.groupKey != curr.group) {
                this.agroupNormalField(prev, curr);
            } else {
                this.agroupMultiField(prev, curr);
            }

            return prev;

        }, Object.create(null));
    }
    
    private defineMultiField(fields: any): any{
        let groupName = null;
        const fieldsAgrupados: any = {};
        fields.forEach((child: any) => {
            groupName = child.group;
            fieldsAgrupados[child.name] = child.value;
        });
       
        if(groupName != null){
           this.fieldsAgrupados[groupName] = this.formBuilder.group(fieldsAgrupados);
        }

    }

    private agroupNormalField(previous: any, current: any){
        previous[this.groupKey] = previous[this.groupKey] || [];
        previous[this.groupKey].push(current);
    }
    private agroupMultiField(previous: any, current: any){
        if(!previous[this.resourceName]){
            previous[this.resourceName] = {};
        }
        previous[this.resourceName][this.groupKey] = previous[this.resourceName][this.groupKey] || [];
        previous[this.resourceName][this.groupKey].push(current);
    }
}