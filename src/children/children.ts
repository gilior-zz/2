import * as ko from 'knockout'
import {Observable, ObservableArray} from 'knockout'
import template from './children.html'

class Children {
    names: ObservableArray<string> = ko.observableArray();
    current: Observable<string> = ko.observable("");
    name: string;

    constructor(params: any) {
        this.name = params.name;
    }

    on_click() {
        this.names.push(this.current());
        this.current("");
        console.log(this.names())
    }
}

export default {viewModel: Children, template: template}
