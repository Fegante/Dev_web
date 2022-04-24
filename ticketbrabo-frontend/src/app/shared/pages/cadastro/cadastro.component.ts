import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { IFormSchema } from "../../models/form-item.model";

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['cadastro.component.css']
})
export class CadastroComponent{

    public schema!: IFormSchema;
    
    public form: any;

    constructor(private router: Router, private activedRoute: ActivatedRoute, private formBuilder: FormBuilder){
        this.activedRoute.data.subscribe(data => {
            this.schema = data.resource;
            console.log(data.resource)
        });

        this.form = this.formBuilder.group(this.defineGroupForm());
    }

    private defineGroupForm(): FormGroup{
        const map: any = {};
        this.schema.fields.forEach((field, index) => {
            const key = field.name;
            map[key] = '';
            return map;
        });
        
        return map;
    }

    onClickBack(){
        this.router.navigate(['../'], {relativeTo: this.activedRoute});
    }

}