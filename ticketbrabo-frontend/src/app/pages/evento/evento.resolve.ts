import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { formItem } from "./evento.resource";

export class EventoResolve implements Resolve<any>{
    schema: any;
    constructor(){
        this.schema = formItem;
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return this.schema;
    }


}