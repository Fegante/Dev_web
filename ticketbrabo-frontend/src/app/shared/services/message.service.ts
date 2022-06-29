import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({providedIn: 'root'})
export class MessageService {

    private _messageToShow = new Subject<string>();


    registerMessage(message: string){
        this._messageToShow.next(message);
    }

   get messageToShow() {
       return this._messageToShow;
   }
}