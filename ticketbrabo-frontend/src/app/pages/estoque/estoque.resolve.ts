import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { formItem } from "./estoque.resource";

@Injectable({ providedIn: 'root' })
export class EstoqueResolve implements Resolve<any>{
    schema: any;
    
    constructor(){
        this.schema = formItem;
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return this.schema;
    }


}