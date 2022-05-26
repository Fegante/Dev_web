export class ObservableModel {
    
    private observers: any[] = [];

    addObserver(observer: any) {
        this.observers.push(observer);
        return observer;
    }

    removeObserver(observer: any){
        const index = this.observers.indexOf(observer);
        if(index > -1){
            this.observers.splice(index, 1)
        }
    }

    notifyObservers(){
        for(let observer of this.observers){
            observer(this);
        }
    }
}