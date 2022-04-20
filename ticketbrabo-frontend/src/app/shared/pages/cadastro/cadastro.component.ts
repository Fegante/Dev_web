import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['cadastro.component.css']
})
export class CadastroComponent{

    constructor(private router: Router, private activedRoute: ActivatedRoute){
        this.activedRoute.params.subscribe(p => {
            console.log(p);
        });

        
        this.activedRoute.data.subscribe(d => {
            console.log(d);
        });
    }

}