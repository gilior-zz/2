import template from './counter.html'
import * as ko from 'knockout'
import {Observable} from "knockout";

class Counter{
    counter:Observable<number>=ko.observable(0)

    on_click=():void=>this.counter(this.counter()+1)

    constructor() {

    }
    reset=()=>{
        this.counter(0);
    }
    more_then_10=ko.computed(()=>{
        return this.counter()>10;
    })
}



export default {viewModel:Counter,template:template}