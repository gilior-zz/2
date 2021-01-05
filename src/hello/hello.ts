import template from './hello.html'
import * as ko from 'knockout'
import {Observable} from "knockout";
class Hello{
    f_name:Observable<string>=ko.observable('');
    l_name:Observable<string>=ko.observable('');
    constructor() {
    }

    get_full_name=ko.computed(()=>{
        return this.f_name()+'  '+this.l_name();
    })
}

export default {viewModel:Hello,template:template}