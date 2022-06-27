import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { formItem } from "./produtor.resource";

@Injectable({ providedIn: 'root' })
export class ProdutorResolve implements Resolve<any>{
    schema: any;
    
    constructor(){
        this.schema = formItem;
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return this.schema;
    }


}