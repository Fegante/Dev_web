import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AppSettings } from "src/app/app-settings";
import { FormItemTypeEnum, IFormSchema } from "../../models/form-item.model";
import { FormResourceService } from "../../services/form-resource.service";

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['cadastro.component.css']
})
export class CadastroComponent implements OnInit{

    private resourceName!: string;
    public schema!: IFormSchema;
    public form!: FormGroup;

    constructor(private router: Router, 
                private activedRoute: ActivatedRoute, 
                private formBuilder: FormBuilder,
                private http: HttpClient,
                private formResourceService: FormResourceService){

        this.activedRoute.data.subscribe(data => {
            this.schema = data.resource;
            this.resourceName = this.schema.resourceName;
        });

    }

    
    ngOnInit() {
        this.obtainDataWhenIdExists();
    }

    onClickBack(){
        this.router.navigate(['../'], {relativeTo: this.activedRoute});
    }

    obtainDataWhenIdExists() {
       const id = this.activedRoute.snapshot.paramMap.get("id");
       if(id) {
           this.http.get(`${AppSettings.HTTPS}/api/${this.resourceName}/${id}`)
           .subscribe((entity: any) => {
              
               for(let field of this.schema.fields) {    
                   field.value = entity[field.name];
                   if(field.type == FormItemTypeEnum.DATE_TIME){
                       field.value = entity[field.name].replace("Z","");
                   }
                   if(field.group) {
                       field.value = entity[field.group][field.name];
                   }
               }

               this.form = this.formBuilder.group(this.formResourceService.defineGroupForm(this.schema.fields, this.resourceName));

           });
       }


    }

    onSubmit(){
        if(this.form.valid){
            
            this.http.post(`${AppSettings.HTTPS}/api/${this.schema.resourceName}/add`, this.form.value).subscribe(result => {
                console.log(result);
            });
        }
    }
}