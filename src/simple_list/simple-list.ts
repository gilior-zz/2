import template from './simple-list.html'
import * as ko from 'knockout'
import {Observable, ObservableArray} from "knockout";

class SimpleList {
    items: ObservableArray<string> = ko.observableArray();
    item_to_add: Observable<string> = ko.observable('')

    constructor() {
    }

    addItem = () => {
        this.items.push(this.item_to_add());
    }
}

export default {viewModel: SimpleList, template: template}