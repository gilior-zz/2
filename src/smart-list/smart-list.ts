import template from './smart-list.html'
import * as ko from 'knockout'
import {Observable, ObservableArray} from "knockout";

class SmartList {
    items: ObservableArray<string> = ko.observableArray(["ccc","ddd","aaa"]);
    selectedItems: ObservableArray<string> = ko.observableArray(["ccc"]);
    item_to_add: Observable<string> = ko.observable('')

    constructor() {
    }

    addItem = () => {
        this.items.push(this.item_to_add());
        this.item_to_add("");
    }

    on_sort=()=>{
        this.items.sort()
    }

    on_remove=()=>{
        for (let itemsKey in this.selectedItems()) {
            console.log(this.selectedItems()[itemsKey])
        }
        this.items.removeAll(this.selectedItems())
        this.selectedItems([])
    }
}

export default {viewModel: SmartList, template: template}